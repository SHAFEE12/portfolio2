Add-Type -AssemblyName System.Net.Http
function Send-Cdp($socket, $method, $params, [int]$id) {
  $payload = @{ id = $id; method = $method; params = $params } | ConvertTo-Json -Depth 20 -Compress
  $bytes = [Text.Encoding]::UTF8.GetBytes($payload)
  $socket.SendAsync([ArraySegment[byte]]::new($bytes), [System.Net.WebSockets.WebSocketMessageType]::Text, $true, [Threading.CancellationToken]::None).GetAwaiter().GetResult()
  $buffer = New-Object byte[] 2097152
  do {
    $result = $socket.ReceiveAsync([ArraySegment[byte]]::new($buffer), [Threading.CancellationToken]::None).GetAwaiter().GetResult()
    $text = [Text.Encoding]::UTF8.GetString($buffer, 0, $result.Count)
    if ($text -match '"id":' + $id) { return $text | ConvertFrom-Json }
  } while ($true)
}
function Test-Viewport($name, $width, $height, $port) {
  $edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
  $userData = Join-Path $env:TEMP "edge-responsive-$port"
  $proc = Start-Process -FilePath $edge -ArgumentList @('--headless=new','--disable-gpu','--no-first-run',"--remote-debugging-port=$port","--user-data-dir=$userData",'about:blank') -WindowStyle Hidden -PassThru
  Start-Sleep -Seconds 2
  try {
    $tabs = Invoke-RestMethod "http://127.0.0.1:$port/json/list"
    $ws = ($tabs | Where-Object { $_.type -eq 'page' } | Select-Object -First 1).webSocketDebuggerUrl
    $socket = [System.Net.WebSockets.ClientWebSocket]::new()
    $socket.ConnectAsync([Uri]$ws, [Threading.CancellationToken]::None).GetAwaiter().GetResult()
    [void](Send-Cdp $socket 'Emulation.setDeviceMetricsOverride' @{ width = $width; height = $height; deviceScaleFactor = 1; mobile = ($width -lt 600) } 1)
    [void](Send-Cdp $socket 'Page.enable' @{} 2)
    [void](Send-Cdp $socket 'Page.navigate' @{ url = 'http://127.0.0.1:5174/' } 3)
    Start-Sleep -Seconds 3
    $js = @"
(() => {
  const pick = (selector) => {
    const el = document.querySelector(selector);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { selector, left: Math.round(r.left), right: Math.round(r.right), top: Math.round(r.top), bottom: Math.round(r.bottom), width: Math.round(r.width), height: Math.round(r.height) };
  };
  const all = Array.from(document.querySelectorAll('body *'));
  const overflowing = all.map((el) => {
    const r = el.getBoundingClientRect();
    return { tag: el.tagName.toLowerCase(), className: String(el.className || ''), id: el.id || '', left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width) };
  }).filter((r) => r.width > 0 && (r.left < -2 || r.right > window.innerWidth + 2)).slice(0, 12);
  const textOverflow = all.filter((el) => el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0).map((el) => ({ tag: el.tagName.toLowerCase(), className: String(el.className || ''), id: el.id || '', scrollWidth: el.scrollWidth, clientWidth: el.clientWidth })).slice(0, 12);
  return {
    url: location.href,
    title: document.title,
    viewport: { width: window.innerWidth, height: window.innerHeight },
    document: { scrollWidth: document.documentElement.scrollWidth, bodyText: document.body.innerText.trim().length },
    hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 2,
    viteOverlay: !!document.querySelector('.vite-error-overlay'),
    key: [pick('.site-nav'), pick('.profile-icon-rail'), pick('.intro-panel'), pick('.hero-visual'), pick('#about'), pick('.credential-grid'), pick('.portfolio-card'), pick('.footer-panel')],
    overflowing,
    textOverflow
  };
})()
"@
    $response = Send-Cdp $socket 'Runtime.evaluate' @{ expression = $js; returnByValue = $true; awaitPromise = $true } 4
    $socket.CloseAsync([System.Net.WebSockets.WebSocketCloseStatus]::NormalClosure, 'done', [Threading.CancellationToken]::None).GetAwaiter().GetResult()
    [pscustomobject]@{ name = $name; result = $response.result.result.value }
  }
  finally {
    if ($proc -and -not $proc.HasExited) { Stop-Process -Id $proc.Id -Force }
  }
}
$results = @(
  Test-Viewport 'desktop' 1440 1100 9234
  Test-Viewport 'tablet' 768 1100 9235
  Test-Viewport 'mobile' 390 1100 9236
)
$results | ConvertTo-Json -Depth 20

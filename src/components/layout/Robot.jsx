export default function Robot({ onLoad, hidden }) {
  return (
    <iframe
      title="AI assistant robot"
      src="https://my.spline.design/genkubgreetingrobot-gfRhqDcP1XHjOce6dWQ3x77F/"
      frameBorder="0"
      className="ai-assistant-frame"
      onLoad={onLoad}
      style={{ opacity: hidden ? 0 : 1 }}
      aria-hidden={hidden}
    />
  );
}

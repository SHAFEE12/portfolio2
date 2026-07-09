let heroVideo = null;

export function registerHeroVideo(video) {
  heroVideo = video;
}

export function prepareHeroVideo() {
  if (!heroVideo) return;

  heroVideo.currentTime = 0;
  heroVideo.muted = false;
  heroVideo.volume = 1;

  console.log("✅ Hero Video Ready");
}

export async function playHeroVideo() {
  if (!heroVideo) return;

  heroVideo.currentTime = 0;
  heroVideo.muted = false;
  heroVideo.volume = 1;

  try {
    await heroVideo.play();
    console.log("🎥 Hero Video Playing");
  } catch (err) {
    console.error("❌ Video Play Failed:", err);
  }
}

export function stopHeroVideo() {
  if (!heroVideo) return;

  heroVideo.pause();
  heroVideo.currentTime = 0;
}
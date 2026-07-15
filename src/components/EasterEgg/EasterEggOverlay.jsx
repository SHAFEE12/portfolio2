import { useEffect, useRef } from "react";
import useEasterEgg from "../../hooks/useEasterEgg";

import "./EasterEgg.css";

import secretVideo from "../../assets/videos/secret.mp4";
export default function EasterEggOverlay() {
  const { isActive, stopEasterEgg } = useEasterEgg();

  const videoRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    videoRef.current?.play();
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="easter-overlay">

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={false}
        onEnded={stopEasterEgg}
      >
        <source
          src={secretVideo}
          type="video/mp4"
        />
      </video>

    </div>
  );
}
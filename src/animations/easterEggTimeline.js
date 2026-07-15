
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { playHeroVideo } from "../utils/videoController";

gsap.registerPlugin(ScrollToPlugin);

let timeline = null;

// ======================================================
// Sections
// ======================================================

const sectionOrder = [
  ".header-section",
  ".about-section",
  ".skills-section",
  ".portfolio-section",
  ".credentials-section",
  ".footer-section",
];

// ======================================================
// Detect Current Section
// ======================================================

function getVisibleSection() {
  let active = ".header-section";
  let maxVisible = 0;

  sectionOrder.forEach((selector) => {
    const element = document.querySelector(selector);

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const visibleHeight =
      Math.min(rect.bottom, window.innerHeight) -
      Math.max(rect.top, 0);

    const visibility = Math.max(
      0,
      visibleHeight / rect.height
    );

    if (visibility > maxVisible) {
      maxVisible = visibility;
      active = selector;
    }
  });

  return active;
}

// ======================================================
// Collapse Animation
// ======================================================

function collapseSection(selector) {
  if (!timeline) return;

  timeline.to(selector, {
    opacity: 0,
    y: 80,
    scale: 0.95,
    duration: 0.55,
  });

  timeline.to({}, { duration: 0.08 });
}

// ======================================================
// Create Timeline
// ======================================================

export function startEasterEggTimeline() {
  const currentSection = getVisibleSection();
  const currentIndex = sectionOrder.indexOf(currentSection);

  if (timeline) {
    timeline.kill();
    timeline = null;
  }

  timeline = gsap.timeline({
    paused: true,
    defaults: {
      ease: "expo.inOut",
    },
  });

  //-------------------------------------------------
  // Hide AI Assistant
  //-------------------------------------------------

  timeline.to(".ai-section", {
    opacity: 0,
    y: 40,
    duration: 0.45,
  });

  timeline.to({}, { duration: 0.3 });

  //-------------------------------------------------
  // Collapse Current Section ↓ Footer
  //-------------------------------------------------

  for (let i = currentIndex; i < sectionOrder.length; i++) {
    collapseSection(sectionOrder[i]);
  }

  //-------------------------------------------------
  // Scroll To Hero
  //-------------------------------------------------

  timeline.to({}, { duration: 0.4 });

  timeline.to(window, {
    duration: 1,
    scrollTo: {
      y: ".intro-section",
      offsetY: 0,
      autoKill: false,
    },
    ease: "expo.inOut",
  });

  //-------------------------------------------------
  // Hero Zoom (Optional)
  //-------------------------------------------------

  // timeline.to(".hero-image", {
  //   scale: 1.08,
  //   duration: 0.8,
  // });

  //-------------------------------------------------
  // Hide Photo
  //-------------------------------------------------

  timeline.to(".hero-photo", {
    opacity: 0,
    duration: 0.5,
  });

  //-------------------------------------------------
  // Show Secret Video
  //-------------------------------------------------

  timeline.set(".hero-secret-video", {
    display: "block",
  });

  timeline.to(".hero-secret-video", {
    opacity: 1,
    duration: 0.6,
  });

  //-------------------------------------------------
  // Play Video
  //-------------------------------------------------

  timeline.call(() => {
    if (timeline.reversed()) return;

    console.log("🎥 Playing Secret Video");

    playHeroVideo();
  });

  //-------------------------------------------------
  // Collapse Remaining (Above) Sections
  //-------------------------------------------------

  for (let i = currentIndex - 1; i >= 0; i--) {
    collapseSection(sectionOrder[i]);
  }

  return timeline;
}

// ======================================================
// Play
// ======================================================

export function playTimeline() {
  if (!timeline) return;
  timeline.play();
}

// ======================================================
// Reverse
// ======================================================

export function reverseTimeline() {
  if (!timeline) return;

  timeline.eventCallback("onReverseComplete", () => {
    const video = document.querySelector(".hero-secret-video");

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    gsap.set(sectionOrder, {
      clearProps: "all",
    });

    gsap.set(
      [
        ".ai-section",
        ".assistant-window",
        ".hero-image",
        ".hero-photo",
        ".hero-secret-video",
      ],
      {
        clearProps: "all",
      }
    );

    timeline.kill();
    timeline = null;
  });

  timeline.reverse();
}

// ======================================================
// Reset
// ======================================================

export function resetTimeline() {
  if (!timeline) return;
  timeline.progress(0).pause();
}
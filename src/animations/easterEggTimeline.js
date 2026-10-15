
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
// Detect Visible Section Chain
// ======================================================

function getVisibleSections() {
  const visible = sectionOrder
    .map((selector) => {
      const element = document.querySelector(selector);

      if (!element) return null;

      const rect = element.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) -
        Math.max(rect.top, 0);
      const visibility = Math.max(0, visibleHeight / rect.height);

      return {
        selector,
        visibility,
        visibleHeight,
        top: rect.top,
      };
    })
    .filter((item) => item && item.visibleHeight > 0)
    .sort((a, b) => a.top - b.top);

  if (!visible.length) {
    return [{ selector: ".header-section", visibility: 1, visibleHeight: 1, top: 0 }];
  }

  const strongestIndex = visible.reduce(
    (winnerIndex, current, currentIndex, list) =>
      current.visibility > list[winnerIndex].visibility ? currentIndex : winnerIndex,
    0
  );

  return sectionOrder.slice(
    sectionOrder.indexOf(visible[strongestIndex].selector),
    sectionOrder.length
  ).map((selector) => ({ selector }));
}

function getVisibleSection() {
  const visible = getVisibleSections();

  return visible[0]?.selector || ".header-section";
}

// ======================================================
// Create Timeline
// ======================================================

export function startEasterEggTimeline() {
  const visibleSections = getVisibleSections();
  const currentSection = getVisibleSection();
  const currentIndex = sectionOrder.indexOf(currentSection);

  if (timeline) {
    timeline.kill();
    timeline = null;
  }

  timeline = gsap.timeline({
    paused: true,
    defaults: {
      ease: "power3.inOut",
    },
  });

  const collapseStart = 0.12;
  const sectionStep = 0.28;
  const collapseTargets = visibleSections.map((item) => item.selector);

  //-------------------------------------------------
  // Hide AI Assistant + collapse only the visible chain
  //-------------------------------------------------

  timeline.to(
    ".ai-section",
    {
      opacity: 0,
      y: 28,
      duration: 0.5,
      ease: "power3.inOut",
    },
    0
  );

  collapseTargets.forEach((selector, index) => {
    const isLast = index === collapseTargets.length - 1;
    const delay = collapseStart + index * sectionStep;
    const scrollTarget = isLast ? ".intro-section" : collapseTargets[index + 1];

    timeline.to(
      selector,
      {
        opacity: 0,
        y: 72,
        scale: 0.985,
        duration: 0.52,
        ease: "power3.inOut",
      },
      delay
    );

    timeline.to(
      window,
      {
        duration: isLast ? 1.2 : 0.55,
        scrollTo: {
          y: scrollTarget,
          offsetY: 0,
          autoKill: false,
        },
        ease: "power2.inOut",
      },
      delay
    );
  });

  const heroStart = collapseStart + collapseTargets.length * sectionStep + 0.16;

  //-------------------------------------------------
  // Hero Photo → Secret Video Crossfade
  //-------------------------------------------------

  timeline.to(
    ".hero-photo",
    {
      opacity: 0,
      scale: 1.04,
      filter: "blur(7px)",
      duration: 0.78,
      ease: "power3.inOut",
    },
    heroStart
  );

  timeline.set(
    ".hero-secret-video",
    {
      display: "block",
      opacity: 0,
    },
    heroStart
  );

  timeline.to(
    ".hero-secret-video",
    {
      opacity: 1,
      duration: 0.72,
      ease: "power3.inOut",
    },
    heroStart + 0.08
  );

  timeline.call(() => {
    if (!timeline || timeline.reversed()) return;
    playHeroVideo();
  }, [], heroStart + 0.2);

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

export function reverseTimeline(onComplete) {
  if (!timeline) return;

  const complete = () => {
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

    if (typeof onComplete === "function") {
      onComplete();
    }

    timeline.kill();
    timeline = null;
  };

  timeline.eventCallback("onReverseComplete", complete);
  timeline.reverse();
}

// ======================================================
// Reset
// ======================================================

export function resetTimeline() {
  if (!timeline) return;
  timeline.progress(0).pause();
}
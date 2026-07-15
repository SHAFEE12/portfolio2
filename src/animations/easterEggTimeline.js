import { playHeroVideo } from "../utils/videoController";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);




import gsap from "gsap";

let timeline = null;

// ======================================================
// Sections Order
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
// Detect Most Visible Section
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
  timeline.to(selector, {
    opacity: 0,
    y: 60,
    scale: 0.97,
    duration: 0.45,
  });
}

// ======================================================
// Create Timeline
// ======================================================

export function startEasterEggTimeline() {
  const currentSection = getVisibleSection();

  const currentIndex = sectionOrder.indexOf(currentSection);

  console.log("🎯 Current Section:", currentSection);

  console.log("📍 Index:", currentIndex);

  if (timeline) {
    timeline.kill();
    timeline = null;
  }

  timeline = gsap.timeline({
    paused: true,
    defaults: {
      ease: "power2.out",
    },
  });

  //-------------------------------------------------
  // AI Assistant
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

  for (
    let i = currentIndex;
    i < sectionOrder.length;
    i++
  ) {
    collapseSection(sectionOrder[i]);
  }

  //-------------------------------------------------
  // Scroll will come here later
  //-------------------------------------------------


  //-------------------------------------------------
// Scroll To Hero
//-------------------------------------------------

for (
  let i = currentIndex;
  i < sectionOrder.length;
  i++
) {
    collapseSection(sectionOrder[i]);
}

timeline.to({}, {
    duration: 0.4,
});

timeline.to(window, {
  duration: 1,
  scrollTo: {
    y: ".intro-section",
    offsetY: 0,
  },
  ease: "expo.inOut",
});



function collapseSection(selector) {

    timeline.to(selector,{
        opacity:0,
        y:80,
        scale:.95,
        duration:.55,
    });

    timeline.to({},{
        duration:.08
    });

}







// timeline.to({}, { duration: 0.5 });

// timeline.to(window, {
//   duration: 3,
//   scrollTo: {
//     y: ".intro-section",
//     autoKill: false,
//   },
//   ease: "expo.inOut",
// });




//-------------------------------------------------
// Hero Zoom
//-------------------------------------------------

// timeline.to(".hero-image", {
//     scale: 1.12,
//     duration: 1,
//     // ease: "power2.inOut",
// });

//-------------------------------------------------
// Hero Photo Fade
//-------------------------------------------------

timeline.to(".hero-photo", {
    opacity: 0,
    duration: 0.6,
});


//-------------------------------------------------
// Show Video
//-------------------------------------------------

timeline.to(".hero-secret-video", {
    opacity: 1,
    duration: 0.6,
});

// timeline.call(() => {

//     console.log("🎥 Play Hero Video");

//     playHeroVideo();

// });


timeline.call(() => {

    // Only when playing forward
    if (timeline.reversed()) return;

    console.log("🎥 Play Hero Video");

    playHeroVideo();

});
  timeline.to(window,{
    scrollTo:".intro-section"
  })

  //-------------------------------------------------
  // Collapse Above Sections Later
  //-------------------------------------------------

  // for(
  //   let i=currentIndex-1;
  //   i>=0;
  //   i--
  // ){
  //    collapseSection(sectionOrder[i]);
  // }


  //-------------------------------------------------
// Collapse Remaining Sections
//-------------------------------------------------

for (
  let i = currentIndex - 1;
  i >= 0;
  i--
) {
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

// export function reverseTimeline() {
//   if (!timeline) return;

//   timeline.reverse();
// }


export function reverseTimeline() {

  if (!timeline) return;

  timeline.eventCallback("onReverseComplete", () => {
 

      const video = document.querySelector(".hero-secret-video");

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    gsap.set([
        ".header-section",
        ".about-section",
        ".skills-section",
        ".portfolio-section",
        ".credentials-section",
        ".footer-section",
        ".assistant-window",
        ".hero-image",
        ".hero-photo",
        ".hero-secret-video"
    ], {
        clearProps: "all"
    });


    timeline.kill();

    timeline = null;

    console.log("✅ Portfolio Restored");

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
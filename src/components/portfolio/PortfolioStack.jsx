import { useEffect } from "react";
import StickyCardWrapper from "./StickyCardWrapper.jsx";

export default function PortfolioStack({ projects }) {
  useEffect(() => {
    const cardsContainer = document.querySelector(".portfolio-stack");
    const cards = document.querySelectorAll(".stacking__card");

    if (!cards.length) return;

    cardsContainer.style.setProperty("--cards-count", cards.length);
    cardsContainer.style.setProperty(
      "--card-height",
      `${cards[0].clientHeight}px`
    );

    const handleScroll = () => {
      cards.forEach((card, index) => {
        const offsetTop = 20 + index * 20;

        card.style.paddingTop = `${offsetTop}px`;

        // Last card doesn't animate
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];
        const cardInner = card.querySelector(".stacking__card-inner");

        if (!cardInner) return;

        const rect = nextCard.getBoundingClientRect();

        const start = window.innerHeight;
        const end = offsetTop + 80;

        let percentageY = (start - rect.top) / (start - end);

        percentageY = Math.max(0, Math.min(1, percentageY));

        const toScale =
          1 - (cards.length - 1 - index) * 0.1;

        const scale =
          1 + (toScale - 1) * percentageY;

        const brightness =
          1 + (0.6 - 1) * percentageY;

        cardInner.style.transform = `scale(${scale})`;
        cardInner.style.filter = `brightness(${brightness})`;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [projects]);

  return (
    <div
      className="portfolio-stack"
      aria-label="Selected portfolio projects"
    >
      {projects.map((project, index) => (
        <StickyCardWrapper
          key={project.id}
          index={index}
          total={projects.length}
          project={project}
        />
      ))}
    </div>
  );
}


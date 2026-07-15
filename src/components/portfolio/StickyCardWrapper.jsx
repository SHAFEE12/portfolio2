import PortfolioCard from "./PortfolioCard";

export default function StickyCardWrapper({
  project,
  index,
}) {
  return (
    <div className="stacking__card">
      <div className="stacking__card-inner">
        <PortfolioCard
          project={project}
          style={{
            "--index": index,
          }}
        />
      </div>
    </div>
  );
}
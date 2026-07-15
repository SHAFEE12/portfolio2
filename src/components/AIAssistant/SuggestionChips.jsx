import "./SuggestionChip.css";

const suggestions = [
  { label: "About", value: "about" },
  { label: "Skills", value: "skills" },
  { label: "Projects", value: "projects" },
  { label: "Experience", value: "experience" },
  // { label: "Education", value: "education" },
  // { label: "Resume", value: "resume" },
  // { label: "Contact", value: "contact" },
  // { label: "GF", value: "gf" },
  { label: "Did I solve DSA problems today?", value: "leetcode" },
  

];

export default function SuggestionChip({ onSelect }) {
  return (
    <div className="suggestion-container">
      {suggestions.map((item) => (
        <button
          key={item.value}
          className="suggestion-chip"
          onClick={() => onSelect(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
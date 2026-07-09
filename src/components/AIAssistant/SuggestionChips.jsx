// import React from 'react';

// function SuggestionChips({ suggestions, onSelect }) {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.9rem' }}>
//       {suggestions.map((item) => (
//         <button
//           key={item}
//           type="button"
//           onClick={() => onSelect(item)}
//           style={{
//             border: '1px solid rgba(124, 58, 237, 0.35)',
//             borderRadius: '999px',
//             padding: '0.55rem 0.95rem',
//             background: 'rgba(255,255,255,0.05)',
//             color: '#e5e7eb',
//             cursor: 'pointer'
//           }}
//         >
//           {item}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default SuggestionChips;














// import "./SuggestionChip.css";

// const suggestions = [
//   "About",
//   "Skills",
//   "Projects",
//   "Experience",
//   "Education",
//   "Resume",
//   "Contact",
// ];


// // const suggestions = [

// //     {
// //         label:"💻 Skills",
// //         value:"skills"
// //     },

// //     {
// //         label:"🚀 Projects",
// //         value:"projects"
// //     },

// //     {
// //         label:"📚 DSA",
// //         value:"leetcode"
// //     },

// //     {
// //         label:"❤️ GF",
// //         value:"gf"
// //     }

// // ];

// export default function SuggestionChip({ onSelect }) {
//   return (
//     <div className="suggestion-container">
//       {suggestions.map((item) => (
//         <button
//           key={item}
//           className="suggestion-chip"
//           onClick={() => onSelect(item)}
//         >
//           {item}
//         </button>
// //         <button

// // onClick={()=>onSelect(item.value)}

// // >

// // {item.label}

// // </button>
//       ))}
//     </div>
//   );
// }









import "./SuggestionChip.css";

const suggestions = [
  { label: "About", value: "about" },
  { label: "Skills", value: "skills" },
  { label: "Projects", value: "projects" },
  { label: "Experience", value: "experience" },
  { label: "Education", value: "education" },
  { label: "Resume", value: "resume" },
  { label: "Contact", value: "contact" },
  { label: "GF", value: "gf" },
  { label: "DSA", value: "leetcode" },
  

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
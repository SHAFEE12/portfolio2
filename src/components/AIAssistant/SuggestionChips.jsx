import React from 'react';

function SuggestionChips({ suggestions, onSelect }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.9rem' }}>
      {suggestions.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onSelect(item)}
          style={{
            border: '1px solid rgba(124, 58, 237, 0.35)',
            borderRadius: '999px',
            padding: '0.55rem 0.95rem',
            background: 'rgba(255,255,255,0.05)',
            color: '#e5e7eb',
            cursor: 'pointer'
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default SuggestionChips;

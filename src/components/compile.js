import React from "react";

export default function Translation({ makeSearch, setInput, result }) {
  return (
    <div>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={makeSearch}>
        Search
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}

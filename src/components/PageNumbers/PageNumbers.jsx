import "./PageNumbers.css";
import { useState, useEffect } from "react";

export default function Pagination({
  curPg,
  handlePageTurn,
  resultsLen,
  resultsPerPg,
}) {
  const totalPages = Math.ceil(resultsLen / resultsPerPg);
  const [pages, setPages] = useState(generatePages());

  function generatePages() {
    const pgs = [];
    for (let i = curPg - 3; i <= curPg + 3; i++) {
      if (i <= totalPages && i > 0) pgs.push(i);
    }
    return pgs;
  }

  useEffect(
    function () {
      setPages(generatePages(curPg));
    },
    [resultsLen, curPg]
  );

  function handleClick(pg) {
    setPages([]);
    handlePageTurn(pg);
  }

  return (
    <div className="pages-container">
      {pages.length ? (
        <>
          {curPg !== 1 ? (
            <>
              <button onClick={() => handleClick(curPg - 1)}>&lt;</button>
            </>
          ) : (
            ""
          )}
          {pages.map((pg, idx) => (
            <button key={idx} onClick={() => handleClick(pg)}>
              {pg}
            </button>
          ))}
          {curPg !== totalPages ? (
            <>
              <button onClick={() => handleClick(curPg + 1)}>&gt;</button>
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

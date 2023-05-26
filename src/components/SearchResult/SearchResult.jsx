import "./SearchResult.css";
import SearchResultCard from "../SearchResultCard/SearchResultCard";

export default function SearchReults({
  curData,
  addItem,
  noResults,
  quickAddItem,
}) {
  return (
    <>
      <div className="site-section" id="portfolio-section">
        <div className="container">
          <div
            className="filters-content mb-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row grid">
              {noResults ? (
                <div className="search-results-loading">no results found</div>
              ) : (
                ""
              )}
              {curData.length ? (
                <>
                  {curData.map((result, idx) => (
                    <SearchResultCard
                      result={result}
                      key={idx}
                      addItem={addItem}
                      quickAddItem={quickAddItem}
                    />
                  ))}
                </>
              ) : (
                <>
                  {noResults ? (
                    ""
                  ) : (
                    <div className="search-results-loading">
                      results loading...
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

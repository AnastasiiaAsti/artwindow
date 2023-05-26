import "./MetMuseum.css";
import { useState } from "react";
import * as metAPI from "../../utilities/met-api";
import SearchResult from "../../components/SearchResult/SearchResult";
import PageNumbers from "../../components/PageNumbers/PageNumbers";

export default function MetMuseum() {
  const [resultsPerPg, setResultsPerPg] = useState(20);
  const [search, setSearch] = useState("");
  const [curSearch, setCurSearch] = useState("");
  const [resultIDs, setResultIDs] = useState([]);
  const [curData, setCurData] = useState([]);
  const [curPg, setCurPg] = useState(1);
  const [noResults, setNoResults] = useState(false);
  const [resultsLen, setResultsLen] = useState(0);

  async function handleSearch() {
    setCurData([]);
    setCurSearch(search);
    setCurPg(1);
    setSearch("");
    setNoResults(false);
    setResultsLen(0);
    const res = await metAPI.search(search);
    await handleSearchResults(res);
  }

  async function handleSearchResults(res) {
    if (res) {
      const data = await metAPI.getArrDetails(res, 1, resultsPerPg);
      setResultIDs(data.objectIDs);
      setResultsLen(data.objectIDs.length);
      setCurData(data.results);
    } else {
      setNoResults(true);
      setCurPg(1);
    }
  }

  async function handlePageTurn(num) {
    setCurData([]);
    const data = await metAPI.getArrDetails(resultIDs, num, resultsPerPg);
    setResultIDs(data.objectIDs);
    setResultsLen(data.objectIDs.length);
    setCurData(data.results);
    setCurPg(num);
  }

  return (
    <div className="container">
      <div className="met-title">
        <h1 class="hero-heading">The Metropolitan Museum of Art Collection</h1>
      </div>
      <div className="met-search-bar">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
          placeholder="start typing here..."
        ></input>
        <button className="btn" onClick={handleSearch}>
          search
        </button>
      </div>

      <div className="met-search-text-container">
        {curSearch && (
          <div className="met-search-text">
            <span>
              showing results for <span className="bold">"{curSearch}"</span>
            </span>
          </div>
        )}
      </div>

      {curSearch && (
        <>
          <SearchResult curData={curData} noResults={noResults} />
          <PageNumbers
            curPg={curPg}
            handlePageTurn={handlePageTurn}
            resultsLen={resultsLen}
            resultsPerPg={resultsPerPg}
          />
        </>
      )}
    </div>
  );
}

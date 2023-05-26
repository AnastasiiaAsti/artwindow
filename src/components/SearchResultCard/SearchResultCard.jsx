import "./SearchResultCard.css";
import { useState } from "react";

export default function SearchResultCard({ result, addItem, quickAddItem }) {
  const [imgClass, setImgClass] = useState("");

  const itemData = {
    apiID: result.objectID,
    title: result.title,
    url: result.primaryImage,
    artist: result.artistDisplayName,
  };

  return (
    <>
      <div className="isotope-card col-sm-4 all mockup">
        <a href={itemData.url} data-fancybox="gal">
          <img className="img-fluid" src={itemData.url} alt={itemData.title} />
          <div className="contents">
            <h3>{itemData.title}</h3>
            <div className="cat">
              {itemData.artist !== "" ? `by  ${itemData.artist}` : ""}
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

export default function HomePage() {
  return (
    <div>
      <div className="custom-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="hero-heading">Welcome to AW</h1>
              <div className="line js-line mx-auto mb-3 my-3"></div>
              <p className="sub-text">
                Immerse yourself in the captivating realm of an art portfolio
                showcased through a simple yet elegant website. Experience a
                visual feast as you explore a collection of exquisite artworks,
                carefully curated to evoke emotions, spark imagination, and
                transport you to different dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ImageSlider />
    </div>
  );
}

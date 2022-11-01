import React from "react";

export default function ImageSlider() {
  return (
    <div className="section pt-0">
      <div className="container">
        <div className="col-lg-7 mx-auto text-center">
          <h2>Images</h2>
          <div className="line my-3 mx-auto"></div>
        </div>
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="main-slider owl-single owl-carousel">
              <div className="testimonial mx-auto">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1579187707643-35646d22b596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwbWluaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60"
                    alt="Image"
                    className="img-fluid"
                    style={{ height: 700 }}
                  />
                </div>
              </div>

              <div className="testimonial mx-auto">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0JTIwbWluaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60"
                    alt="Image"
                    className="img-fluid"
                    style={{ height: 700 }}
                  />
                </div>
              </div>

              <div className="testimonial mx-auto">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0JTIwbWluaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60"
                    alt="Image"
                    className="img-fluid"
                    style={{ height: 700 }}
                  />
                </div>
              </div>

              <div className="testimonial mx-auto">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1529066663606-c3a09451acd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFydCUyMG1pbmltYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60"
                    alt="Image"
                    className="img-fluid"
                    style={{ height: 700 }}
                  />
                </div>
              </div>
              <div className="testimonial mx-auto">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1613946576929-3cc54e1cb5ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFydCUyMG1pbmltYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60"
                    alt="Image"
                    className="img-fluid"
                    style={{ height: 700 }}
                  />
                </div>
              </div>
              <div className="testimonial mx-auto">
                <div className="">
                  <img
                    src="https://images.unsplash.com/photo-1535569955641-5808932ebbe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGFydCUyMG1pbmltYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60"
                    alt="Image"
                    className="img-fluid"
                    style={{ height: 700 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

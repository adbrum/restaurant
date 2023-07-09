import React from "react";

const RoseWine = () => {
  return (
    <>
      <div className="col-lg-5">
        <div className="section_tittle">
          <h2>Vinhos Rosés / Alentejo</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img src="/image/food_menu/logo.png" className="mr-3" alt="..." />
            <div className="media-body align-self-center">
              <h3>Monte da Peceguina</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>14€ (0,75l)</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img src="/image/food_menu/logo.png" className="mr-3" alt="..." />
            <div className="media-body align-self-center">
              <h3>Terras d’uva</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>9€ (0,75l)</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img src="/image/food_menu/logo.png" className="mr-3" alt="..." />
            <div className="media-body align-self-center">
              <h3>Pouca Roupa</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>9€ (0,75l)</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoseWine;

import React from "react";

// import { Container } from './styles';

const GreenWine = () => {
  return (
    <>
      <div className="col-lg-5">
        <div className="section_tittle">
          <h2>Vinhos Verdes</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img src="/image/food_menu/logo.png" className="mr-3" alt="..." />
            <div className="media-body align-self-center">
              <h3>Quinta da Aveleda</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>4,50€ (0,38l) / 8€ (0,75l)</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img src="/image/food_menu/logo.png" className="mr-3" alt="..." />
            <div className="media-body align-self-center">
              <h3>Muralhas de Monção</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>5€ (0,38l) / 9€ (0,75l)</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img src="/image/food_menu/logo.png" className="mr-3" alt="..." />
            <div className="media-body align-self-center">
              <h3>Quinta da Lixa</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>8€ (0,75l)</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img src="/image/food_menu/logo.png" className="mr-3" alt="..." />
            <div className="media-body align-self-center">
              <h3>Foral de Felgueiras - Tinto</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>9€ (0,75l)</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenWine;

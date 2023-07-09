import React from "react";

// import { Container } from './styles';

const Appetizer = () => {
  return (
    <>
      <div className="col-lg-5">
        <div className="section_tittle">
          <h2>Entradas</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img src="/image/entradas/pao.jpg" className="mr-3" alt="..." />
            <div className="media-body align-self-center">
              <h3>Pão</h3>
              <p>Pão regional Alentejano</p>
              <h5>1€</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img
              src="/image/entradas/azeitonas.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Azeitonas</h3>
              <p>Azeitona Alentejana</p>
              <h5>0,60€</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img
              src="/image/entradas/manteiga.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Manteiga / Patês (cada)</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>0,60€</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img
              src="/image/entradas/queijo_seco.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Queijinho seco (ovelha/cabra +/- 100gr)</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>4€</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img
              src="/image/entradas/torresmo.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Torresmos do rissol</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>1.50€ (pequeno) / 3€ (grande)</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img
              src="/image/entradas/linguica_assada.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Linguiça (caseira) assada</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>4€ (pequeno) / 7€ (grande)</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img
              src="/image/entradas/tapas_presunto.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Tapas de Presunto / Paio / Queijo</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>7€ (pequeno) / 10€ (grande)</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appetizer;

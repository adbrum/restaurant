import React from "react";

// import { Container } from './styles';

const DishesOfTheDay = () => {
  return (
    <>
      <div className="col-lg-5">
        <div className="section_tittle">
          <h2>Pratos do dia</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img
              src="/image/entradas/sopa_dia.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Sopa do dia</h3>
              <p>Canja de pato</p>
              <h5>1,75€</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img src="/image/food_menu/logo.png" className="mr-3" alt="..." />
            <div className="media-body align-self-center">
              <h3>Carne 01</h3>
              <p>Borrego estufado com ervas aromáticas</p>
              <h5>10€ dose</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img src="/image/food_menu/logo.png" className="mr-3" alt="..." />
            <div className="media-body align-self-center">
              <h3>Carne 02</h3>
              <p>Alheira de caça c/ batata frita e ovo estrelado</p>
              <h5>8€ dose</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img src="/image/food_menu/logo.png" className="mr-3" alt="..." />
            <div className="media-body align-self-center">
              <h3>Peixe 01</h3>
              <p>Bacalhau à braz</p>
              <h5>9€ dose</h5>
            </div>
            {/* <div className="single_food_item media"> <img src="/image/food_menu/logo.png" className="mr-3" alt="..."/> <div className="media-body align-self-center"> <h3>Peixe 02</h3> <p>Carapaus assados c/ salada de pimentos</p> <h5>8,50€ dose</h5> </div> </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DishesOfTheDay;

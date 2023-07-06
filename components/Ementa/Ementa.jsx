import React from "react";

// import { Container } from './styles';

const Ementa = () => {
  return (
    <>
      <div className="col-lg-3">
        <div className="section_tittle">
          {/* <p>Ementa</p> */}
          <h2>Ementa</h2>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="nav nav-tabs food_menu_nav" id="myTab" role="tablist">
          <a
            className="active"
            id="Starters-tab"
            data-toggle="tab"
            href="#Starters"
            role="tab"
            aria-controls="Starters"
            aria-selected="false"
          >
            Entradas
            <img src="/image/icon/play.svg" alt="play" />
          </a>
          <a
            id="Dishesday-tab"
            data-toggle="tab"
            href="#Dishesday"
            role="tab"
            aria-controls="Dishesday"
            aria-selected="false"
          >
            Pratos do dia
            <img src="/image/icon/play.svg" alt="play" />
          </a>
          <a
            id="Grilled-tab"
            data-toggle="tab"
            href="#Grilled"
            role="tab"
            aria-controls="Grilled"
            aria-selected="false"
          >
            Grelhados
            <img src="/image/icon/play.svg" alt="play" />
          </a>
          <a
            id="Specialties-tab"
            data-toggle="tab"
            href="#Specialties"
            role="tab"
            aria-controls="Specialties"
            aria-selected="false"
          >
            Especialidades
            <img src="/image/icon/play.svg" alt="play" />
          </a>
          <a
            id="Drinks-tab"
            data-toggle="tab"
            href="#Drinks"
            role="tab"
            aria-controls="Drinks"
            aria-selected="false"
          >
            Bebidas
            <img src="/image/icon/play.svg" alt="play" />
          </a>
          <a
            id="Desserts-tab"
            data-toggle="tab"
            href="#Desserts"
            role="tab"
            aria-controls="Desserts"
            aria-selected="false"
          >
            Sobremesas
            <img src="/image/icon/play.svg" alt="play" />
          </a>
          <a
            id="Redwine-tab"
            data-toggle="tab"
            href="#Redwine"
            role="tab"
            aria-controls="Redwine"
            aria-selected="false"
          >
            Vinhos Tintos
            <img src="/image/icon/play.svg" alt="play" />
          </a>
          <a
            id="Whitewine-tab"
            data-toggle="tab"
            href="#Whitewine"
            role="tab"
            aria-controls="Whitewine"
            aria-selected="false"
          >
            Vinhos Brancos
            <img src="/image/icon/play.svg" alt="play" />
          </a>
          <a
            id="Rosewine-tab"
            data-toggle="tab"
            href="#Rosewine"
            role="tab"
            aria-controls="Rosewine"
            aria-selected="false"
          >
            Vinhos Rosés
            <img src="/image/icon/play.svg" alt="play" />
          </a>
          <a
            id="Greenwine-tab"
            data-toggle="tab"
            href="#Greenwine"
            role="tab"
            aria-controls="Greenwine"
            aria-selected="false"
          >
            Vinhos Verdes
            <img src="/image/icon/play.svg" alt="play" />
          </a>
          <a
            id="Digestive-tab"
            data-toggle="tab"
            href="#Digestive"
            role="tab"
            aria-controls="Digestive"
            aria-selected="false"
          >
            Digestivos
            <img src="/image/icon/play.svg" alt="play" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Ementa;

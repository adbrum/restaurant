import React from "react";
import Appetizer from "./Appetizer/Appetizer";
import DishesOfTheDay from "./DishesOfTheDay/DishesOfTheDay";
import Grilled from "./Grilled/Grilled";
import Specialties from "./Specialties/Specialties";
import Drinks from "./Drinks/Drinks";
import Desserts from "./Desserts/Desserts";

export const FoodMenu = () => {
  return (
    <>
      <section className="food_menu gray_bg">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3">
              <div className="section_tittle">
                {/* <p>Ementa</p> */}
                <h2>Ementa</h2>
              </div>
            </div>
            <div className="col-lg-9">
              <div
                className="nav nav-tabs food_menu_nav"
                id="myTab"
                role="tablist"
              >
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
            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active single-member"
                  id="Starters"
                  role="tabpanel"
                  aria-labelledby="Starters-tab"
                >
                  <Appetizer />
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Dishesday"
                  role="tabpanel"
                  aria-labelledby="Dishesday-tab"
                >
                  <DishesOfTheDay />
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Grilled"
                  role="tabpanel"
                  aria-labelledby="Grilled-tab"
                >
                  <Grilled />
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Specialties"
                  role="tabpanel"
                  aria-labelledby="Specialties-tab"
                >
                  <Specialties />
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Drinks"
                  role="tabpanel"
                  aria-labelledby="Drinks-tab"
                >
                  <Drinks />
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Desserts"
                  role="tabpanel"
                  aria-labelledby="Desserts-tab"
                >
                  <Desserts />
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Redwine"
                  role="tabpanel"
                  aria-labelledby="Redwine-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Vinhos Tintos / Alentejo</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>
                            Vinho Tinto da Casa (vinho de mesa Vila de Frades)
                          </h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2€ (1/4l) / 3€ (1/2l) / 5€ (1l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte da Peceguina</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,38l) / 16€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Herdade dos Grous</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>16€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Cantando (herd. da Figueirinha)</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>16€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Nã te rales (herd. da Figueirinha)</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>7,50€ (0,38l) / 12€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Black (Mingorra)</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>29€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Mingorra</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>12€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Terras D’Uva</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>5€ (0,38l) / 9€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte Velho</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>5€ (0,38l) / 9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Chaminé</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>6€ (0,38l) / 10€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Marquês de Borba</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>7€ (0,38l) / 11€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Convento da Tomina</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>15€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Sobro</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>10€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Paço do Conde</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>10€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Herd. Grande Gerações</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>22€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Herd. Grande</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>12€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Vidigueira Grande escolha (A Decisão ato V)</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>14€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Vidigueira (Saudade ato III )</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Trinca Bolotas</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>11€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte das Servas</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>12€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Caiado (adega Mayor)</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Vinha das lebres (Paulo Laureano)</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="section_tittle">
                        <h2>Reservas</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/image/food_menu/logo.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Conde D’ervideira reserva</h3>
                            {/* <p>They're wherein heaven seed hath nothing</p> */}
                            <h5>22€ (0,75l)</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/image/food_menu/logo.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Fonte Mouro reserva (herd. da Figueirinha)</h3>
                            {/* <p>They're wherein heaven seed hath nothing</p> */}
                            <h5>18€ (0,75l)</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-6">
                        <div className="single_food_item media">
                          <img
                            src="/image/food_menu/logo.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Herdade do Sobroso reserva</h3>
                            {/* <p>They're wherein heaven seed hath nothing</p> */}
                            <h5>16€ (0,75l)</h5>
                          </div>
                        </div>
                        <div className="single_food_item media">
                          <img
                            src="/image/food_menu/logo.png"
                            className="mr-3"
                            alt="..."
                          />
                          <div className="media-body align-self-center">
                            <h3>Adega Mayor reserva</h3>
                            {/* <p>They're wherein heaven seed hath nothing</p> */}
                            <h5>16€ (0,75l)</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Whitewine"
                  role="tabpanel"
                  aria-labelledby="Whitewine-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Vinhos Brancos / Alentejo</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>
                            Vinho Branco da Casa (vinho de mesa Vila de Frades)
                          </h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2€ (1/4l) / 3€ (1/2l) / 5€ (1l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte da Peceguina</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>16€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Flor do Guadiana</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>16€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Nã te rales</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>12€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Sobro</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>10€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Black (Mingorra)</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>29€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte Velho</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Mingorra</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>12€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Vidigueira Antão Vaz (inspiração ato IV )</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>5€ (0,38l) / 9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Terras d’uva</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>6€ (0,38l) / 10€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Paço do conde</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>10€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Rosewine"
                  role="tabpanel"
                  aria-labelledby="Rosewine-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Vinhos Rosés / Alentejo</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Monte da Peceguina</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>14€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Terras d’uva</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Pouca Roupa</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Greenwine"
                  role="tabpanel"
                  aria-labelledby="Greenwine-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Vinhos Verdes</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Quinta da Aveleda</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>4,50€ (0,38l) / 8€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Muralhas de Monção</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>5€ (0,38l) / 9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Quinta da Lixa</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>8€ (0,75l)</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Foral de Felgueiras - Tinto</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>9€ (0,75l)</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Digestive"
                  role="tabpanel"
                  aria-labelledby="Digestive-tab"
                >
                  <div className="col-lg-5">
                    <div className="section_tittle">
                      <h2>Digestivos</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Moscatel de Setúbal</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Vinho do Porto</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Amarguinha</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Licor Beirão</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>2,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>1/2 whiskey novo</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3,50€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>1 whiskey velho</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>6€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Aguardentes</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Aguardentes velhas</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>6€</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Brandys</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>4€</h5>
                        </div>
                      </div>
                      <div className="single_food_item media">
                        <img
                          src="/image/food_menu/logo.png"
                          className="mr-3"
                          alt="..."
                        />
                        <div className="media-body align-self-center">
                          <h3>Gin</h3>
                          {/* <p>They're wherein heaven seed hath nothing</p> */}
                          <h5>3€</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

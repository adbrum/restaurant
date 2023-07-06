import React from "react";
import Appetizer from "./Appetizer/Appetizer";
import DishesOfTheDay from "./DishesOfTheDay/DishesOfTheDay";
import Grilled from "./Grilled/Grilled";
import Specialties from "./Specialties/Specialties";
import Drinks from "./Drinks/Drinks";
import Desserts from "./Desserts/Desserts";
import RedWine from "./RedWine/RedWinw";
import WhiteWine from "./WhiteWine/WhiteWine";
import RoseWine from "./RoseWine/RoseWine";
import GreenWine from "./GreenWine/GreenWine";
import Digestive from "./Digestive/Digestive";
import Ementa from "./Ementa/Ementa";

export const FoodMenu = () => {
  return (
    <>
      <section className="food_menu gray_bg">
        <div className="container">
          <div className="row justify-content-between">
            <Ementa />
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
                  <RedWine />
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Whitewine"
                  role="tabpanel"
                  aria-labelledby="Whitewine-tab"
                >
                  <WhiteWine />
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Rosewine"
                  role="tabpanel"
                  aria-labelledby="Rosewine-tab"
                >
                  <RoseWine />
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Greenwine"
                  role="tabpanel"
                  aria-labelledby="Greenwine-tab"
                >
                  <GreenWine />
                </div>
                <div
                  className="tab-pane fade single-member"
                  id="Digestive"
                  role="tabpanel"
                  aria-labelledby="Digestive-tab"
                >
                  <Digestive />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

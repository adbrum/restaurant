import React from "react";

const Specialties = () => {
  return (
    <>
      <div className="col-lg-5">
        <div className="section_tittle">
          <h2>Especialidades da casa</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img
              src="/image/especialidades/migas_alentejana.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Migas à Alentejana</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>11€</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img
              src="/image/especialidades/sopas_tomate.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Sopas de Tomate (bacalhau e ovo)</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>11€</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img
              src="/image/especialidades/acorda_bacalhau.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Açorda de Bacalhau</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>11€</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-6">
          <div className="single_food_item media">
            <img
              src="/image/especialidades/arros_bacalhau.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Arroz de Bacalhau</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>11€</h5>
            </div>
          </div>
          <div className="single_food_item media">
            <img
              src="/image/especialidades/sopas_cacao.jpg"
              className="mr-3"
              alt="..."
            />
            <div className="media-body align-self-center">
              <h3>Sopas de Cação</h3>
              {/* <p>They're wherein heaven seed hath nothing</p> */}
              <h5>11€</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialties;

import React from "react";

export const Owners = () => {
  return (
    <>
      <section className="chefs_part blog_item_section section_padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle">
                {/* <p>Team Member</p> */}
                <h2>Proprietários</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_image">
                  <img src="/image/team/Ilda.jpg" alt="" />
                </div>
                <div className="single_blog_text text-center">
                  <h3>Ilda Moreno</h3>
                  <p>Cozinheira</p>
                  {/* <div className="social_icon"> <a href="#"> <i className="ti-facebook"></i> </a> <a href="#"> <i className="ti-twitter-alt"></i> </a> <a href="#"> <i className="ti-instagram"></i> </a> <a href="#"> <i className="ti-skype"></i> </a> </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_image">
                  <img src="/image/team/Ines.jpg" alt="" />
                </div>
                <div className="single_blog_text text-center">
                  <h3>Inês Pereira</h3>
                  <p>Cozinheira</p>
                  {/* <div className="social_icon"> <a href="#"> <i className="ti-facebook"></i> </a> <a href="#"> <i className="ti-twitter-alt"></i> </a> <a href="#"> <i className="ti-instagram"></i> </a> <a href="#"> <i className="ti-skype"></i> </a> </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="single_blog_item">
                <div className="single_blog_image">
                  <img src="/image/team/Ismael.png" alt="" />
                </div>
                <div className="single_blog_text text-center">
                  <h3>Ismael Pereira</h3>
                  <p>Gerente</p>
                  {/* <div className="social_icon"> <a href="#"> <i className="ti-facebook"></i> </a> <a href="#"> <i className="ti-twitter-alt"></i> </a> <a href="#"> <i className="ti-instagram"></i> </a> <a href="#"> <i className="ti-skype"></i> </a> </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

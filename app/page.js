import { Banner } from "@/app/components/Banner";
import { ExclusiveItem } from "@/app/components/ExclusiveItem";

import Image from "next/image";

import { IntroVideo } from "@/app/components/IntroVideo";
import { FoodMenu } from "@/app/components/FoodMenu";
import { Owners } from "@/app/components/Owners";

export default function Home() {
  return (
    <>
      {/* banner part start*/}
      <Banner />
      {/* banner part end*/}

      {/*::exclusive_item_part start::*/}
      <ExclusiveItem />
      {/*::exclusive_item_part end::*/}

      {/* about part start*/}
      {/* <section className="about_part"> <div className="container-fluid"> <div className="row align-items-center"> <div className="col-sm-4 col-lg-5 offset-lg-1"> <div className="about_image"> <img src="/image/about.jpg" alt="" /> </div> </div> <div className="col-sm-8 col-lg-4"> <div className="about_text"> <h5>Our History</h5> <h2>Where The Food’s As Good As The Root Beer.</h2> <h4>Satisfying people hunger for simple pleasures</h4> <p> May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep abundantly bearing, him, gathering you blessed bearing he our position best ticket in month hole deep </p> <a href="#" className="btn_3" >Leia sobre <img src="/image/icon/left_2.svg" alt="" /></a> </div> </div> </div> </div> </section> */}
      {/* about part end*/}

      {/* intro_video_bg start*/}
      <IntroVideo />
      {/* intro_video_bg part start*/}

      {/* food_menu start*/}
      {/* <FoodMenu /> */}
      {/* food_menu part end*/}

      {/*::chefs_part start::*/}
      <Owners />
      {/*::chefs_part end::*/}

      {/*::regervation_part start::*/}
      {/* <section className="regervation_part section_padding"> <div className="container"> <div className="row"> <div className="col-xl-5"> <div className="section_tittle"> <p>Reservation</p> <h2>Book A Table</h2> </div> </div> </div> <div className="row"> <div className="col-lg-6"> <div className="regervation_part_iner"> <form> <div className="form-row"> <div className="form-group col-md-6"> <input type="email" className="form-control" id="inputEmail4" placeholder="Name *" /> </div> <div className="form-group col-md-6"> <input type="password" className="form-control" id="inputPassword4" placeholder="Email address *" /> </div> <div className="form-group col-md-6"> <select className="form-control" id="Select"> <option value="1" selected>Persons *</option> <option value="2">Number of guests 1</option> <option value="3">Number of guests 2</option> <option value="4">Number of guests 3</option> <option value="5">Number of guests 4</option> </select> </div> <div className="form-group col-md-6"> <input type="text" className="form-control" id="pnone" placeholder="Phone number *" /> </div> <div className="form-group col-md-6"> <div className="input-group date"> <input id="datepicker" type="text" className="form-control" placeholder="Date *" /> </div> </div> <div className="form-group col-md-6"> <select className="form-control" id="Select2"> <option value="" selected>Time *</option> <option value="1">8 AM TO 10AM</option> <option value="1">10 AM TO 12PM</option> <option value="1">12PM TO 2PM</option> <option value="1">2PM TO 4PM</option> <option value="1">4PM TO 6PM</option> <option value="1">6PM TO 8PM</option> <option value="1">4PM TO 10PM</option> <option value="1">10PM TO 12PM</option> </select> </div> <div className="form-group col-md-12"> <textarea className="form-control" id="Textarea" rows="4" placeholder="Your Note *" ></textarea> </div> </div> <div className="regerv_btn"> <a href="#" className="btn_4">Book A Table</a> </div> </form> </div> </div> </div> </div> </section> */}
      {/*::regervation_part end::*/}

      {/*::review_part start::*/}
      {/* <section className="review_part gray_bg section_padding"> <div className="container"> <div className="row"> <div className="col-xl-5"> <div className="section_tittle"> <p>Testimonials</p> <h2>Customers Feedback</h2> </div> </div> </div> <div className="row"> <div className="col-lg-11"> <div className="client_review_part owl-carousel"> <div className="client_review_single media"> <div className="client_image align-self-center"> <img src="/image/client/client_1.png" alt="" /> </div> <div className="client_review_text media-body"> <p> Also made from. Give may saying meat there from heaven it lights face had is gathered god dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place </p> <h4>Mosan Cameron, <span>Executive of fedex</span></h4> </div> </div> <div className="client_review_single media"> <div className="client_image align-self-center"> <img src="/image/client/client_1.png " alt="" /> </div> <div className="client_review_text media-body"> <p> Also made from. Give may saying meat there from heaven it lights face had is gathered god dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place </p> <h4>Mosan Cameron, <span>Executive of fedex</span></h4> </div> </div> <div className="client_review_single media"> <div className="client_image align-self-center"> <img src="/image/client/client_1.png" alt="" /> </div> <div className="client_review_text media-body"> <p> Also made from. Give may saying meat there from heaven it lights face had is gathered god dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place </p> <h4>Mosan Cameron, <span>Executive of fedex</span></h4> </div> </div> </div> </div> </div> </div> </section> */}
      {/*::review_part end::*/}

      {/*::exclusive_item_part start::*/}
      {/* <section className="blog_item_section blog_section section_padding"> <div className="container"> <div className="row"> <div className="col-xl-5"> <div className="section_tittle"> <p>Recent News</p> <h2>Latest From Blog</h2> </div> </div> </div> <div className="row"> <div className="col-sm-6 col-lg-4"> <div className="single_blog_item"> <div className="single_blog_image"> <img src="/image/blog/blog_1.png" alt="" /> </div> <div className="single_blog_text"> <div className="date"> <a href="#" className="date_item">Apr 06, 2019 </a> <a href="#" className="date_item"> <span>#</span> Food News </a> </div> <h3> <a href="blog.html" >Adama kind deep gatherin first over fter his great</a > </h3> <a href="#" className="btn_3" >Read More <img src="/image/icon/left_1.svg" alt="" /></a> </div> </div> </div> <div className="col-sm-6 col-lg-4"> <div className="single_blog_item"> <div className="single_blog_image"> <img src="/image/blog/blog_2.png" alt="" /> </div> <div className="single_blog_text"> <div className="date"> <a href="#" className="date_item">Apr 06, 2019 </a> <a href="#" className="date_item"> <span>#</span> Food News </a> </div> <h3> <a href="blog.html" >Adama kind deep gatherin first over fter his great</a > </h3> <a href="#" className="btn_3" >Read More <img src="/image/icon/left_1.svg" alt="" /></a> </div> </div> </div> <div className="col-sm-6 col-lg-4"> <div className="single_blog_item"> <div className="single_blog_image"> <img src="/image/blog/blog_3.png" alt="" /> </div> <div className="single_blog_text"> <div className="date"> <a href="#" className="date_item">Apr 06, 2019 </a> <a href="#" className="date_item"> <span>#</span> Food News </a> </div> <h3> <a href="blog.html" >Adama kind deep gatherin first over fter his great</a > </h3> <a href="#" className="btn_3" >Read More <img src="/image/icon/left_1.svg" alt="" /></a> </div> </div> </div> <div className="col-sm-6 col-lg-4 d-none d-sm-block d-lg-none"> <div className="single_blog_item"> <div className="single_blog_image"> <img src="/image/blog/blog_1.png" alt="" /> </div> <div className="single_blog_text"> <div className="date"> <a href="#" className="date_item">Apr 06, 2019 </a> <a href="#" className="date_item"> <span>#</span> Food News </a> </div> <h3> <a href="blog.html" >Adama kind deep gatherin first over fter his great</a > </h3> <a href="#" className="btn_3" >Read More <img src="/image/icon/left_1.svg" alt="" /></a> </div> </div> </div> </div> </div> </section> */}
      {/*::exclusive_item_part end::*/}
    </>
  );
}

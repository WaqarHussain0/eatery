import React from "react";
import Row from "./common/Row";
import bannerImg from "../imgs/01.png"
import star from "../imgs/star.png"
import circle from "../imgs/circle.png"
import design from "../imgs/design.png"
// import design from "../fonts/cotoris.ttf"

function FirstBanner() {
  return (
    <Row className="justify-center relative">
      <Row className="flex-col">
        <div className="w-[575px]  items-center bg-[#5B0017B2] absolute left-[80px] top-[30px]">
          <h1 className="cotoris-bold text-[73px] text-white leading-[80px]">
            Taste the authentic <br /> Saudi cuisine
          </h1>
        </div>
        <p className="interL mt-48 text-[20px] font-light leading-9 text-white mr-16">
          Among the best Saudi chefs in the world, <br /> serving you something
          beyond flavor.
        </p>
        <button className="cotoris-bold mt-4 mb-10 text-[#CC9D2F] border-[2px] border-[#CC9D2F] h-[40px] w-[120px]">
          Our Menu
        </button>
      </Row>

      <Row>
      <img src={design} className="opacity-50 mb-5 absolute top-[-115px] left-[90px] w-[510px] h-[540px] z-[0]" alt="..."/>

        <img src={bannerImg} className="w-[610px] h-[400px]" alt="..."/>
        <img src={star} className="absolute top-[-14px] right-[135px] w-[20px] h-[25px]" alt="..."/>
        <img src={circle} className="mb-5 absolute top-[360px] left-[80px] w-[60px] h-[60px]" alt="..."/>
      </Row>
    </Row>
  );
}

export default FirstBanner;

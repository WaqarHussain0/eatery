import React from "react";
import Row from "./common/Row";
import lastBanner from "../imgs/04.png";
import star from "../imgs/star.png";
import topDesign from "../imgs/Group 229.png";
import bottomDesign from "../imgs/Group 230.png";

function SecondBanner() {
  return (
    <Row className="mt-20 flex-col items-center h-[650px] w-full relative">
      <img
        src={lastBanner}
        className="z-0 h-[650px] w-full opacity-60"
        alt="..."
      />
      <img
        src={star}
        className="absolute top-[100px]  h-[60px] w-[55px]"
        alt="..."
      />

      <img
        src={topDesign}
        className="absolute top-[0px] h-[40px] opacity-50 w-[40%] left-0 drop-shadow-sm"
        alt="..."
      />

      <img
        src={bottomDesign}
        className="absolute bottom-0 right-0 h-[40px] opacity-10 w-[40%] drop-shadow-sm "
        alt="..."
      />

      <h1 className="cotoris-bold mt-4 text-white absolute top-[170px] text-[50px] ">
        A unique menu that reflects the <br /> true essence of the Saudi cuisine
      </h1>
      <button className="cotoris-bold absolute top-[380px]  mt-5 mb-10 text-[#5B0017]  bg-[#CC9D2F] h-[40px] w-[120px]">
        Our Menu
      </button>
    </Row>
  );
}

export default SecondBanner;

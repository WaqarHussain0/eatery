import React from "react";
import Row from "./common/Row";
import videoImage from "../imgs/03.png";
import person from "../imgs/person.png";
import sideDesign from "../imgs/sideDesign.png";
import play from "../imgs/Play.png";

function Quote() {
  return (
    <>
      <Row className="justify-center mt-20 mb-10">
        <Row className="bg-[#CC9D2F] w-[465px] h-[450px] px-14">
          <p className="interR text-justify mt-20 text-[#243054] text-[20px]">
            You can't go wrong with Chicken Mandi, I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would defiantly recommend it.
          </p>
        </Row>

        <Row className=" w-[570px] h-[450px] ml-[-1px]">
          <img src={videoImage} alt="..." />
        </Row>
      </Row>

      <Row className="justify-between w-[250px] left-[238px] absolute top-[1500px] ">
        <Row className="flex-col">
          <h2 className="poppinM text-[#243054] text-[18px]">
            Khalid Al Dawsry
          </h2>
          <p className="poppinR text-[#243054] text-[14px]">Jeddah, Saudi</p>
          <hr className="mt-5 border-[#00646D]  w-[250px]" />
        </Row>

        <Row className="flex-col">
          <img src={person} alt="..." className="" />
          <hr className="mt-4 border-[#243054] border-[2px] w-[50px]" />
        </Row>

        <img
          src={sideDesign}
          alt="..."
          className="h-[50px] w-[25px] absolute left-[-80px] top-12"
        />
        <h1 className="cotoris-bold absolute left-[-37px] top-[-300px] text-[52px] text-[#243054]">
          “
        </h1>
        <img
          src={play}
          alt="..."
          className="h-[40px] w-[40px] absolute right-[-430px] top-[-140px]"
        />
      </Row>
    </>
  );
}

export default Quote;

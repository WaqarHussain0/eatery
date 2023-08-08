import React from "react";
import Row from "./common/Row";
import door from "../imgs/02.png";
import venu1 from "../imgs/05.png";
import venu2 from "../imgs/06.png";
import venu3 from "../imgs/07.png";
import design from "../imgs/design.png";
import square from "../imgs/square.png";

function Venu() {
  return (
    <Row className="justify-between mt-20">
      <Row className="ml-[90px] w-[30%]">
        <img src={door} alt="..." className="w-[380px] h-[490px]" />
      </Row>

      <Row className="flex-col justify-start w-[50%] mr-[104px]">
        <h1 className="cotoris-bold text-white text-[49px]">
          A distinctive dining destination inspired by the culture.
        </h1>
        <p className="text-white mt-2 interL">Experience Al Balad old town of Jeddah vibes. </p>
        <button className="cotoris-bold text-[#5B0017] bg-[#CC9D2F] h-[40px] w-[100px] mt-10">
          Our Venu
        </button>

        <Row className="gap-7 mt-10">
            <img className="w-[120px] h-[125px]" src={venu1} alt="..."/>
            <img className="w-[120px] h-[125px]" src={venu2} alt="..."/>
            <img className="w-[120px] h-[125px]" src={venu3} alt="..."/>
        </Row>
            <hr className="mt-8 border-[#CC9D2F] border-[2px] w-[350px]" />
      </Row>

      <img src={design} alt="..." className="z-0 opacity-50 mb-5 absolute top-[555px] right-[0px] w-[510px] h-[600px]"/>
      <img src={square} alt="..." className="z-0 opacity-50 mb-5 absolute top-[1010px] right-[100px] w-[50px] h-[50px]"/>
    </Row>
  );
}

export default Venu;

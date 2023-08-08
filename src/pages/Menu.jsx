import React from "react";
import Card from "../components/common/Card";
import Menu1 from "../imgs/01.png";
import Menu2 from "../imgs/08.png";
import Menu3 from "../imgs/09.png";
import Menu4 from "../imgs/17.png";
import Menu5 from "../imgs/13.png";
import Menu6 from "../imgs/14.png";
import Menu7 from "../imgs/15.png";
import Menu8 from "../imgs/16.png";
import Menu9 from "../imgs/10.png";
import design from "../imgs/design.png";
import design2 from "../imgs/Rectangle.png";
import Row from "../components/common/Row";
import Navbar from "../components/common/Navbar";
import Location from "../components/common/Location";

function Menu() {
  return (
    <Row className="flex-col bg-[#590017] ">
      <Navbar />
      <Row className="ml-[50px] items-center gap-1 mt-16">
        <h4 className="interR text-[14px] text-[#CC9D2F]">OUR MENU </h4>
        <hr className="w-11" />
      </Row>
      <Row className="flex-row justify-between px-12 mt-3 items-center">
        <h2 className="cotoris-bold text-white text-[62px] leading-[60px]">
          Discover Our menu{" "}
        </h2>
        <p className="interR text-[#dcdcdc] text-[16px] text-justify">
          There is a wide selection of choices served by top <br /> Saudi chefs,
          prepared using best quality local <br /> ingredients.
        </p>
      </Row>

      <Row className="items-center w-[400px] gap-5 interR ml-12 text-white mt-12 text-[14px]">
        <p className="text-[#CC9D2F] interR text-[16px]">All</p>
        <p>Feast</p>
        <p>Coffee</p>
        <p>Cocktails</p>
        <p>Dessert</p>
      </Row>
      <Row className="justify-between px-12 mt-6 flex-wrap">
        <Card imgSrc={Menu1} title={"Buhkari"} />
        <Card imgSrc={Menu2} title={"Saudi Makboos"} />
        <Card imgSrc={Menu3} title={"Zurbiam"} />
        <Card imgSrc={Menu4} title={"Buhkari"} />
        <Card imgSrc={Menu5} title={"Saudi Makboos"} />
        <Card imgSrc={Menu6} title={"Zurbiam"} />
        <Card imgSrc={Menu7} title={"Buhkari"} />
        <Card imgSrc={Menu8} title={"Saudi Makboos"} />
        <Card imgSrc={Menu9} title={"Zurbiam"} />
      </Row>

      <button className="mt-4 mb-12 cotoris-bold ml-[550px] w-28 py-2 px-3  border-white border-[3px] text-[#CC9D2F]">
        Show More
      </button>

      <Location className="bg-[#243054]" className1="mb-12"/>

      <img
        className="absolute top-0 left-28 w-[520px] h-[600px] z-0 opacity-50"
        src={design}
        alt="..."
      />

      <img
        className="absolute top-[1440px] right-0 w-[520px] h-[600px] z-0 opacity-50"
        src={design2}
        alt="..."
      />
    </Row>
  );
}

export default Menu;

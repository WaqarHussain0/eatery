import React from "react";
import Row from "../components/common/Row";
import Navbar from "../components/common/Navbar";
import Location from "../components/common/Location";
import image1 from "../imgs/11.png";
import image2 from "../imgs/12.png";
import design from "../imgs/design.png";
import design2 from "../imgs/Rectangle.png";

function OurStory() {
  return (
    <Row className="flex-col items-center">
      <Navbar />

      <img
        src={design}
        alt="..."
        className="z-0 absolute left-[110px] w-[480px] h-[500px]"
      />

      <Row className="flex-row mt-8 gap-12 w-[80%] ">
        <Row className="flex-col w-[45%]">
          <h1 className="cotoris-bold text-[#5B0017] text-[38px]">Our Story</h1>
          <p className=" text-[#5B0017] text-[12px] mt-4 interR">
            We’re an absolute leader in the Saudi cuisine-themed restaurants.
          </p>

          <img
            className=" absolute top-[320px] left-[140px] h-[300px] w-[190px]"
            src={image1}
            alt="..."
          />
          <img
            className="absolute top-[250px] left-[350px] h-[300px] w-[190px]"
            src={image2}
            alt="..."
          />
        </Row>

        <Row className="flex-col w-[55%]">
          <h2 className="cotoris-bold text-[#fff] text-[16px] mt-8">
            One of the best resturants in Saudi Arabia.
          </h2>
          <p className="tracking-wider interR text-[#5B0017] text-[12px] text-justify mt-8">
            Your one direction to high-quality Saudi feasts, since 1998 we
            served in Saudi Arabia.
          </p>

          <p className="tracking-wider interR text-[#5B0017] text-[12px] text-justify mt-4">
            Locals who are proud of the country and want to introduce it to
            visitors from around the world.
          </p>

          <p className="tracking-wider interR text-[#5B0017] text-[12px] mt-6 text-justify">
            We are perfectly positioned to provide our guests with an
            extraordinary health experience unlike any they’ve ever tasted. We
            can confidently claim that our menu is unlike anything else offered
            in the industry.
          </p>


        </Row>
      </Row>

      <Row className="bg-[#590017] w-[80%] h-[260px] mt-[280px] flex-row pt-16 px-6 gap-2">
        <div>
          <hr className="mt-4 border-[#CC9D2F] border-[2px] w-[30px]" />
          <h1 className="mt-2 text-white poppinM text-[20px]">1998</h1>
          <p className="text-[#CC9D2F] poppinM text-[16px] mt-2">Milestone One</p>
          <p className="poppinR text-white mt-2 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <hr className="mt-4 border-[#CC9D2F] border-[2px] w-[30px]" />
          <h1 className="mt-2 text-white poppinM text-[20px]">2005</h1>
          <p className="text-[#CC9D2F] poppinM text-[16px] mt-2">Milestone Two</p>
          <p className="poppinR text-white mt-2 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <hr className="mt-4 border-[#CC9D2F] border-[2px] w-[30px]" />
          <h1 className="mt-2 text-white poppinM text-[20px]">2012</h1>
          <p className="text-[#CC9D2F] poppinM text-[16px] mt-2">Milestone Three</p>
          <p className="poppinR text-white mt-2 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <hr className="mt-4 border-[#CC9D2F] border-[2px] w-[30px]" />
          <h1 className="mt-2 text-white poppinM text-[20px]">2021</h1>
          <p className="text-[#CC9D2F] poppinM text-[16px] mt-2">Milestone Four</p>
          <p className="poppinR text-white mt-2 text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="opacity-20 absolute left-[190px] top-[733px] z-0 mt-4 border-[#fff]  border-dotted border-t-2 h-0 w-[990px]" />
      </Row>

      <Row className="mt-16 w-full bg-[#243054] h-[500px] flex-col justify-center items-center">
      <Location className="bg-[#590017]" />

        <img
          src={design2}
          alt="..."
          className="z-0 absolute opacity-20 right-[0px] w-[480px] h-[500px]"
        />
      </Row>
    </Row>
  );
}

export default OurStory;

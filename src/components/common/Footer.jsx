import React from "react";
import Row from "../common/Row";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import BlackLogo from "../../svgs/BlackLogo";

function Footer() {
  return (
    <div className="h-[200px] w-full bg-[#CC9D2F] relative flex justify-center">
      <BlackLogo className="left-0 right-0 absolute top-[40px] mx-auto" />

      <Row
        className="leading-[22px] absolute top-[120px] text-[#5B0017]
        gap-[40px] text-[18px] font-normal interR justify-center"
      >
        <p>Home</p>
        <p>Menu</p>
        <p>Venu</p>
        <p>Contact Us</p>
      </Row>
      <hr className="border-[#243054] absolute left-0 right-0 top-[160px]" />

      <Row className="justify-center absolute top-[170px] items-center">
        <p className="poppinR text-[#243054]">
          Copyright © 2023, <span className="poppinM"> Waqar Hussain</span> | All rights reserved.
        </p>

        <Row className="text-[#243054] gap-5 ml-56">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </Row>
      </Row>
    </div>
  );
}

export default Footer;

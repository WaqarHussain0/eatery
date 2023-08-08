import React from "react";
import FirstBanner from "../components/FirstBanner";
import Venu from "../components/Venu";
import Quote from "../components/Quote";
import SecondBanner from "../components/SecondBanner";
import Navbar from "../components/common/Navbar";

function Home() {
  return (
    <div className="bg-[#590017] w-full">
    <Navbar/>
      <FirstBanner />
      <Venu />
      <Quote />
      <SecondBanner />
    </div>
  );
}

export default Home;

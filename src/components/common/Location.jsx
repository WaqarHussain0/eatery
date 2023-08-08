import React from 'react'
import Row from './Row';
import location from "../../imgs/Map.png";


function Location({className, className1}) {
  return (
    <Row className={` justify-center ${className1} `}>
        <div className={`w-[380px] h-[390px] ${className}`}>
          <h2 className="text-[#CC9D2F] cotoris-bold mt-6 ml-20">
            Working Hours
          </h2>
          <p className="text-white interR ml-20 mt-3 text-[14px]">
            Sunday to Saturday <br />
            09:00 AM to 11:00 PM
          </p>
          <p className="text-white interR ml-20 mt-3 text-[14px]">
            Friday <br />
            02:00 PM to 1:00 AM
          </p>
          <h2 className="text-[#CC9D2F] cotoris-bold mt-6 ml-20">Location</h2>
          <p className="text-white interR ml-20 mt-3 text-[14px]">
            Street - 127, Jeddah, <br />
            Saudi Arabia 546544
          </p>
          <h2 className="text-[#CC9D2F] cotoris-bold mt-6 ml-20">Contact Us</h2>
          <p className="text-white interR ml-20 mt-3 text-[14px]">+123456789</p>
          <p className="text-white interR ml-20 text-[14px]">
            service@maizresturant.com
          </p>
        </div>
        <div>
          <img
            className="w-[700px] h-[397px] ml-[-4px]"
            src={location}
            alt="..."
          />
        </div>
      </Row>
  )
}

export default Location;
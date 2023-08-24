import React from "react";
import Logo from "../../assets/LogoWeDesc.png";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <div className="w-screen h-[68px] px-[203px] flex justify-center">
      <div className="flex justify-between px-4 py-[14px] items-center w-screen">
        <div>
          <img className="h-7" src={Logo} alt="" />
        </div>
        <Nav />
      </div>
    </div>
  );
};

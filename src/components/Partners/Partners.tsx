import React from "react";
import Images1 from "../../assets/Frame 5.png";
import Images2 from "../../assets/Frame 5 (1).png";
import Images3 from "../../assets/Frame 4.png";

const images = [{ url: Images1 }, { url: Images3 }, { url: Images2 }];

export const Partners = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-24 mb-10">
        <div className="flex justify-center mb-2">
          <p className="h-[10px] rounded-full w-[120px] bg-black"></p>
        </div>
        <h2 className="font-bold text-xl">Empresas Parceiras</h2>
      </div>
      <div className="flex flex-col w-full m-auto px-10">
        {images.map((imgs) => (
          <img
            src={imgs.url}
            className=" max-h-[150px] object-scale-down"
            alt=""
          />
        ))}
      </div>
      <div className="pt-10" id="Contact"></div>
    </div>
  );
};

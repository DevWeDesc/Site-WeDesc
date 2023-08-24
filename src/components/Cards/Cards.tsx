import { CardsProps } from "../../interfaces/interfaces";

export const Cards = ({ cloud, image, title, description }: CardsProps) => {
  return (
    <div className="w-[266px] h-[768px] rounded-[13px] flex relative bg-[#57c2d5]">
      <img
        src={cloud}
        className="absolute w-[185px] h-[67px] rotate-180"
        alt=""
      />
      <div className=" mt-32 w-full flex flex-col items-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white">
          <img src={image} alt="" />
        </div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <img
        src={cloud}
        className="absolute w-[185px] h-[67px] bottom-[0px] right-[0px]"
        alt=""
      />
    </div>
  );
};

import React from "react";
import { ICardsPlans } from "../../interfaces/interfaces";

export const CardPlans = ({
  image,
  title,
  description,
  Bgcolor,
  color,
}: ICardsPlans) => {
  return (
    <div
      className="p-6 rounded-[25px] flex flex-col gap-10 "
      style={{ backgroundColor: Bgcolor, color: color }}
    >
      <img className="w-20" src={image} alt="" />
      <div className="flex gap-4 flex-col">
        <h1 className="text-[18px] font-bold">{title}</h1>
        <p className="pb-10">{description}</p>
      </div>
    </div>
  );
};

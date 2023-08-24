import React, { ReactNode } from "react";
import ImgButton from "../../assets/imgButtonNav.png";

interface LiProps {
  text?: string;
  children?: ReactNode;
}

const Li = ({ text, children }: LiProps) => {
  return (
    <div>
      <li className="pr-10 cursor-pointer">
        {text}
        {children}
      </li>
      {text === "Inicio" && (
        <p className="w-[38.17px] h-[2px] bg-gradient-to-r from-[#A14BD1] via-[#81D4E8]"></p>
      )}
    </div>
  );
};

export const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center">
        <Li text="Inicio" />
        <Li text="Nossos Serviços" />
        <Li text="Planos de Atendimento" />
        <Li text="Contato" />
        <Li>
          <button className="h-[40px] font-bold flex items-center gap-[4.27px] border-solid border-[1px] border-black py-[7px] px-[9px] rounded-md transition-all hover:bg-gray-100">
            WeDesc Code
            <img src={ImgButton} alt="" />
          </button>
        </Li>
      </ul>
    </nav>
  );
};

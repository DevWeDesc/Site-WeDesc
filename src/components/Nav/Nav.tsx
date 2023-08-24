import { useState } from "react";
import ImgButton from "../../assets/imgButtonNav.png";
import { LiProps } from "../../interfaces/interfaces";

const Li = ({ text, children, selected, onClick }: LiProps) => {
  return (
    <div>
      <li className="pr-10 cursor-pointer" onClick={onClick}>
        {text}
        {children}
      </li>
      {text === selected && (
        <p className="w-[38.17px] h-[2px] bg-gradient-to-r from-[#A14BD1] via-[#81D4E8]"></p>
      )}
    </div>
  );
};

export const Nav = () => {
  const [selected, setSelected] = useState("");
  return (
    <nav>
      <ul className="flex items-center">
        <Li
          text="Inicio"
          selected={selected}
          onClick={() => setSelected("Inicio")}
        />
        <Li
          text="Nossos Serviços"
          selected={selected}
          onClick={() => setSelected("Nossos Serviços")}
        />
        <Li
          text="Planos de Atendimento"
          selected={selected}
          onClick={() => setSelected("Planos de Atendimento")}
        />
        <Li
          text="Contato"
          selected={selected}
          onClick={() => setSelected("Contato")}
        />
        <Li selected={selected} onClick={() => setSelected("Inicio")}>
          <button className="h-[40px] font-bold flex items-center gap-[4.27px] border-solid border-[1px] border-black py-[7px] px-[9px] rounded-md transition-all hover:bg-gray-100">
            WeDesc Code
            <img src={ImgButton} alt="" />
          </button>
        </Li>
      </ul>
    </nav>
  );
};

import React from "react";
import ComentsImage from "../../assets/Titulo.png";
import { CardComents } from "../CardComents/CardComents";
import Image from "../../assets/Ellipse 16.png";
import Image1 from "../../assets/Ellipse 16 (1).png";
import Image2 from "../../assets/Ellipse 16 (2).png";

export const Coments = () => {
  return (
    <div className="w-full h-[722px] overflow-hidden ">
      <div className="w-full flex items-center relative gap-7 mt-[133px] mb-[233px]">
        <img src={ComentsImage} className="mr-20" alt="" />
        <CardComents
          Avaliation={5}
          Img={Image}
          Title="Hospital Veterinário Dr. Hato"
          Description="A Wedesc T.I atende todas as
          unidades do Dr Hato há 3 anos,
           sempre tivemos um excelente
          atendimento e uma rápida
          solução dos problemas"
        />
        <CardComents
          Avaliation={5}
          Img={Image1}
          Title="Big Brands"
          Description="Sabe o sonho de fornecedor?
          Que entrega o que foi
          combinado, dentro do prazo e
          de uma maneira impecável?
          Esse é o trabalho da Wedesc T.l.
          "
        />
        <div className="w-[16%]">
          <CardComents
            Avaliation={5}
            Img={Image2}
            Title="Cooper Trans"
            Description="É com muita satisfação que
            trabalhamos com a Wedesc TI.
             Encontramos profissionais comprometidos com resultados
            em segurança e padronização.            
            "
          />
        </div>
      </div>
      <div className="w-[60%] h-full bg-gradient-to-r from-white to-[#868686]  absolute top-[660vh] z-[-5] right-[0px] shadow-2xl-[#C8C8C8]"></div>
    </div>
  );
};

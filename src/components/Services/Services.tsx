import React from "react";
import Rocket from "../../assets/12 3D RENDER ROCKET ICON (2) 1.png";
export const Services = () => {
  return (
    <div className="flex flex-col gap-7 relative max-w-[1460px] px-[96px] m-auto">
      <h1 className="flex items-center justify-center text-[80px] font-bold text-white mt-16">
        Serviços <img src={Rocket} alt="" />
      </h1>
      <p className="text-white text-center w-[990px]">
        A Wedesc foi criada com base na ideologia de que podemos impactar
        significativamente o sucesso das empresas, tornando as soluções de
        tecnologia de disponíveis seguras e acessíveis. Somos um provedor de
        serviços de TI Full Service focados em entender as necessidades e
        desafios das empresas para que de forma segura e produtiva, auxiliemos
        no alcance de seus objetivos.
      </p>
      <div></div>
    </div>
  );
};

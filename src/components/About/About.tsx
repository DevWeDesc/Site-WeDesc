import BoxImage from "../../assets/caixinha.png";
import lineService from "../../assets/Vector 10.png";
import Rectangle from "../../assets/Rectangle 42.png";
import { Services } from "../Services/Services";

export const About = () => {
  return (
    <div className="w-full">
      <p className="m-auto mt-[40px] h-[1px] w-[1254px] bg-[#84CC16] mb-[40px]"></p>
      <div className="flex flex-col justify-between w-full">
        <div className="grid grid-cols-2 gap-10 relative max-w-[1460px] m-auto">
          <div className="z-[1]">
            <img src={BoxImage} alt="" />
          </div>
          <div className="flex flex-col align-rigth pr-[130px]">
            <h1 className="text-[44px] font-bold">Sobre a WeDesc</h1>
            <p>
              Na Wedesc, nossa jornada é um compromisso contínuo em moldar o
              sucesso das empresas por meio da tecnologia. Desde o início,
              acreditamos no poder transformador da inovação e do
              comprometimento. Começamos como um sonho de proporcionar soluções
              de TI excepcionais que ultrapassam as expectativas. Ao longo dos
              anos, esse sonho se transformou em realidade, à medida que
              construímos parcerias duradouras com empresas de todos os
              tamanhos. Nossa equipe apaixonada e dedicada é o coração da
              Wedesc. Com vasta experiência e um olhar atento para as
              tendências, estamos sempre prontos para enfrentar os desafios
              tecnológicos em evolução. Cada etapa da nossa história foi marcada
              por momentos de crescimento, aprendizado e inovação. Fomos
              moldados pelas histórias de sucesso das empresas que ajudamos a
              impulsionar.
            </p>
            <div id="Service"></div>
          </div>
        </div>

        <img src={lineService} className="absolute pt-[360px] w-full " alt="" />
        <img src={Rectangle} className="absolute pt-[402px] w-full " alt="" />

        <img
          src={Rectangle}
          className="absolute lg:pt-[1500px] 2xl:pt-[1002px] w-full "
          alt=""
        />

        <Services />
      </div>
    </div>
  );
};

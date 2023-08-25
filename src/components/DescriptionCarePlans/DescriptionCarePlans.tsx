import Rocket from "../../assets/Vector (4).png";
import { CardPlans } from "../CardPlans/CardPlans";

export const DescriptionCarePlans = () => {
  return (
    <div className="flex flex-col relative mt-20 max-w-[1460px] m-auto px-[95px]">
      <div className=" flex gap-5 flex-col items-center text-center text-white">
        <h1 className="flex gap-10 items-center text-[56px] font-bold">
          Planos de atendimento <img src={Rocket} alt="" />
        </h1>
        <p className="leading-9 px-[145px]">
          As soluções tecnológicas carecem de acompanhamento preventivo e
          reativo, para que o seu trabalho não esteja sujeito a falhas. Ter o
          seu parque de equipamentos atualizado não é um detalhe na vida da sua
          empresa. Em qualquer atividade e área de negócios ter as ferramentas
          adequadas e sobretudo funcionais, torna-se fundamental para agilizar
          os processos de trabalho.
        </p>
      </div>
      <CardPlans />
    </div>
  );
};

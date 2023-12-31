import Rocket from "../../assets/12 3D RENDER ROCKET ICON (2) 1.png";
import { Cards } from "../Cards/Cards";
import Img1 from "../../assets/Cloud.png";
import Img2 from "../../assets/Vector.png";
import Img3 from "../../assets/Vector (1).png";
import Img4 from "../../assets/Vector (2).png";
import CloudWhite from "../../assets/Rectangle 2.png";
import CloudBlue from "../../assets/Rectangle 2 (1).png";
import { CarePlans } from "../CarePlans/CarePlans";

export const Services = () => {
  return (
    <div className="flex flex-col gap-7 relative max-w-[1460px] px-[96px] m-auto">
      <div>
        <h1 className="flex items-center justify-center text-[80px] font-bold text-white ">
          Serviços <img src={Rocket} alt="" />
        </h1>
        <div className="flex justify-center">
          <p className="text-white text-center w-[990px]">
            A Wedesc foi criada com base na ideologia de que podemos impactar
            significativamente o sucesso das empresas, tornando as soluções de
            tecnologia de disponíveis seguras e acessíveis. Somos um provedor de
            serviços de TI Full Service focados em entender as necessidades e
            desafios das empresas para que de forma segura e produtiva,
            auxiliemos no alcance de seus objetivos.
          </p>
        </div>
      </div>
      <div className="flex w-full gap-[66px] mt-5 justify-between ">
        <Cards
          cloud={CloudWhite}
          image={Img1}
          title={"Solução em Nuvem"}
          description={
            "Colaboração e produtividade de equipes locais ou em Home Office com alta disponibilidade, mobilidade e segurança.Provedor de Soluções Cloud do Microsoft 365;Provedor de Soluções Acronis Cyber Protection;Virtualização de aplicações e hospedagem Cloud."
          }
          Bgcolor="#FECC09"
          color="#000"
        />

        <Cards
          cloud={CloudBlue}
          image={Img2}
          title={"Consultoria de tecnologia"}
          description={
            "Especialista de tecnologia apoiando seus planos estratégicos em soluções para expandir e garantir seu negócio.\n Time de sucesso do cliente acompanhando e garantindo qualidade na entrega de nossos serviços; \nConsultor especializado apoiando nossos clientes na jornada de descoberta e parceria com as mais variadas ofertas de tecnologia de mercado."
          }
          Bgcolor="#0CC0DF"
          color={"#FFF"}
        />
        <Cards
          cloud={CloudWhite}
          image={Img3}
          title={"Gestão e Suporte de TI"}
          description={
            "Atendimento especializado pronto para ajudar a sua equipe a produzir.\nGestão de Servidores e Infraestrutura;\nPrevenção a acidentes;\nAtendimento remoto e local;\nPlanos escaláveis ao seu negócio e orçamento."
          }
          Bgcolor="#FECC09"
          color="#000"
        />
        <Cards
          cloud={CloudBlue}
          image={Img4}
          title={"Soluçoes de Segurança"}
          description={
            "Cuidados com a integridade e continuidade de seu negócio.\n\nMonitoramento e proteção de Servidores e Estações;\n\nAções proativas e preventivas para infraestrutura de rede;\n\nContinuidade de negócios;\n\nBackup e criptografia de dados."
          }
          Bgcolor="#0CC0DF"
          color="#FFF"
        />
      </div>
      <CarePlans />
    </div>
  );
};

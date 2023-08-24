import Vetor from "../../assets/todos vetores.png";
import IconButton from "../../assets/image (1).png";

export const SubHeader = () => {
  return (
    <div className="relative m-auto flex justify-center w-full">
      <img className="  w-[1329px] h-[776px]" src={Vetor} alt="" />
      <div className="absolute w-full px-[193px] pt-[4rem] max-w-[1460px]">
        <div className="absolute flex items-start flex-col gap-5">
          <h1 className="text-[45px] leading-[65px] max-w-[407px] font-bold text-white">
            Nós Somos a WeDesc
          </h1>
          <div>
            <p className="text-[18px] max-w-[537px] text-gray-100 pr-20">
              Equipe especializada em TI pronta para atender às suas
              necessidades.
            </p>
            <p className="text-[18px] max-w-[577px] text-gray-100 pr-36">
              Aumente a produtividade e reduza custos com nossos serviços de TI.{" "}
            </p>
          </div>
          <button className=" px-[16px] rounded-sm flex items-center gap-[5.05px] h-[44px] text-white bg-[#FECC09] transition-colors hover:bg-[#e3b600]">
            Conhecer nossos planos
            <img src={IconButton} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

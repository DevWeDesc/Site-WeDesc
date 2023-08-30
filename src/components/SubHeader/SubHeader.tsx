// import Vetor from "../../assets/todos vetores.png";
// import IconButton from "../../assets/image (1).png";
import Video from "../../assets/titulo e servidor mp4.mp4";
//import Video2 from "../../assets/vetores 2 quicktime.mov";

export const SubHeader = () => {
  return (
    <div
      id="Init"
      className="pt-20 relative m-auto flex justify-center lg:max-w-[1460px]"
    >
      <video src={Video} autoPlay muted loop></video>
      {/* {
        <video
          src={Video2}
          autoPlay
          muted
          loop
          className="relative top-[-20px]"
        ></video>
      } */}
      {/* <img className="lg:w-[90%]  w-full" src={Vetor} alt="" /> */}
      <div className="absolute w-full px-[12%] pt-[5%] max-w-[1460px]">
        {/* <div className="absolute flex items-start flex-col lg:gap-5">
          <h1 className="lg:text-[45px] leading-[65px] lg:max-w-[407px] font-bold text-white">
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
        </div> */}
      </div>
    </div>
  );
};

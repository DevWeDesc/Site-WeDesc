import Icon from "../../assets/MapPin.png";
import Icon2 from "../../assets/Envelope.png";
import Icon3 from "../../assets/Vector (5).png";

export const Contact = () => {
  return (
    <div className="w-[80%] m-auto flex flex-col ">
      <div className="flex justify-center items-center gap-5 py-10">
        <p className="w-[25%] h-[2px] bg-[#FECC09]"></p>
        <h1 className="text-5xl font-bold text-[#FECC09]">Contato</h1>
        <p className="w-[25%] h-[2px] bg-[#FECC09]"></p>
      </div>
      <div
        className="grid grid-cols-2"
        style={{
          boxShadow: "0 0 40px rgba(123, 123, 123, 0.8)",
        }}
      >
        <div className="flex flex-col p-10 gap-5">
          <h1 className="text-4xl font-bold">Entre em contato com a gente</h1>
          <h3 className="text-[24px] w-[450px]">
            Conte com uma equipe com experiência em soluções de TI. Fale com
            nossos especialistas hoje mesmo.
          </h3>
          <div className="text-[24px] flex gap-12 mt-16">
            <img src={Icon} className="object-scale-down" alt="" />
            <p>(11) 4040-5072</p>
          </div>
          <div className="text-[24px] flex gap-12">
            <img src={Icon2} className="object-scale-down" alt="" />
            <p>comercial@wedesc.com.br</p>
          </div>
          <div className="text-[24px] flex gap-12 mb-40">
            <img src={Icon3} className="object-scale-down" alt="" />
            <p className="pl-2 pr-10">
              R. Adolfo Bastos, 598 - 71 - Vila Bastos, Santo André - SP,
              09041-000
            </p>
          </div>
        </div>
        <div className="w-[100px] h-[100px] right-[47%] mt-[80px] rotate-45 bg-[#FECC09] absolute"></div>
        <div className="bg-[#FECC09] p-20 flex flex-col pr-40 gap-2">
          <h2 className="text-2xl">Nome:</h2>
          <input
            className="bg-transparent py-2 px-2 border-[1px] border-black outline-none rounded-lg"
            type="text"
          />
          <h2 className="text-2xl">E-mail:</h2>
          <input
            className="bg-transparent py-2 px-2 border-[1px] border-black outline-none rounded-lg"
            type="text"
          />
          <h2 className="text-2xl">Sua Mensagem:</h2>
          <textarea
            name=""
            id=""
            className="bg-transparent border-[1px] border-black rounded-lg min-w-full min-h-[60%] p-2 outline-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

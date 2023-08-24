export const CarePlans = () => {
  return (
    <div className="flex flex-col mt-[100px] gap-7 relative max-w-[1460px] px-[96px] m-auto">
      <div className="grid grid-cols-2">
        <div></div>
        <div className="flex gap-10 flex-col items-center">
          <h1 className="text-white font-bold text-[40px]">
            Nossos Planos de atendimento
          </h1>
          <div>
            <p className="text-white w-[110%] leading-8">
              Nossos planos de atendimento são projetados para atender às
              necessidades exclusivas da sua empresa. Com abordagens que vão
              desde o Essencial até o Enterprise, oferecemos suporte técnico,
              gerenciamento completo, segurança robusta e atendimento VIP.
              Escolha o plano que se alinha perfeitamente com o seu negócio e
              deixe a tecnologia conosco. Conheça mais sobre nossos planos de
              atendimento personalizados para você.
            </p>
            <button className="bg-[#FECC09] px-9 py-3 rounded-full font-bold mt-5">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

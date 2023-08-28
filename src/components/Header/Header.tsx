import Logo from "../../assets/LogoWeDesc.png";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <div className="fixed z-10 bg-white w-full px-[110px] m-auto">
      <div className="w-screen h-[68px] px-[90px] flex justify-center max-w-[1460px]">
        <div className="flex justify-between px-4 py-[14px] items-center w-screen">
          <div>
            <img className="h-7" src={Logo} alt="" />
          </div>
          <Nav />
        </div>
      </div>
    </div>
  );
};

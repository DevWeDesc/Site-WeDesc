import Logo from "../../assets/LogoWeDesc.png";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <div className="fixed z-10 w-screen h-[68px] px-0 lg:px-[8%] flex justify-between bg-white">
      <div className="w-screen h-[68px] sm:w-full lg:px-[90px] flex justify-center m-auto 2xl:max-w-[1460px]">
        <div className="sm:w-full flex justify-between px-4 py-[14px] items-center w-screen">
          <div>
            <img className="lg:h-7" src={Logo} alt="" />
          </div>
          <img
            className="w-12 lg:hidden"
            src="https://cdn-icons-png.flaticon.com/128/11029/11029054.png"
            alt=""
          />
          <Nav />
        </div>
      </div>
    </div>
  );
};

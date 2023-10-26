import logoA from "./icons/logo1.svg";
import logoB from "./icons/logo2.svg";
import logoC from "./icons/logo3.svg";
import logoD from "./icons/logo4.svg";
import logoE from "./icons/logo5.svg";
import logoF from "./icons/logo6.svg";
import logoG from "./icons/logo7.svg";

const Clients = () => {
  return (
    <div className="flex flex-col text-center my-[40px] gap-4 p-10 px-36">
      <div className="text-neutral-grey ">
        <h1 className="font-semibold text-4xl">Our Clients</h1>
        <p className="leading-[55px] text-base text-light-grey">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 mt-8">
        <img src={logoA} alt="logo A" />
        <img src={logoB} alt="logo B" />
        <img src={logoC} alt="logo C" />
        <img src={logoD} alt="logo D" />
        <img src={logoE} alt="logo E" />
        <img src={logoF} alt="logo F" />
        <img src={logoG} alt="logo G" />
      </div>
    </div>
  );
};

export default Clients;

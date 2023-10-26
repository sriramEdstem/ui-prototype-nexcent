import logo from "./icons/logo.svg";
const Header = () => {
  return (
    <div className="flex bg-neutral-silver h-[84px] justify-around">
      <div className=" inline-flex items-center gap-2">
        <img src={logo} alt="logo"></img>
        <h1 className=" text-brand-secondary font-black text-2xl "></h1>
      </div>
      <div className=" inline-flex items-center gap-12 justify-center">
        <p className="text-base font-medium text-gray-900">Home</p>
        <p className="text-base font-medium text-gray-900">Service</p>
        <p className="text-base font-medium text-gray-900">Feature</p>
        <p className="text-base font-medium text-gray-900">Product</p>
        <p className="text-base font-medium text-gray-900">Testimonial</p>
        <p className="text-base font-medium text-gray-900">FAQ</p>
      </div>
      <div className="flex items-center">
        <div className=" inline-flex justify-start space-x-14">
          <button className=" px-[20px] py-[10px]  gap-4 bg-neutral-silver rounded-md text-green-500 text-base font-medium leading-5">
            Login
          </button>
          <button className=" px-[20px] py-[10px] gap-4 bg-green-primary rounded-md text-white text-base font-medium leading-5">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

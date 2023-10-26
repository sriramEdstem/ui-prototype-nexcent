import arrow from "./icons/arrow.svg";

const Footer = () => {
  return (
    <div className=" bg-neutral-silver py-8">
      <div className=" text-center flex flex-col gap-8 mx-auto w-[887px]  px-12">
        <h1 className="text-[60px] font-semibold leading-[76px] text-brand-secondary">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <div className="mx-auto">
          <button className=" text-white rounded-[4px] px-8 py-4 bg-green-primary flex items-center gap-2">
            Get a Demo
            <div>
              <img src={arrow}></img>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

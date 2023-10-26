import heroImage from "./icons/illustration.svg";
import dot from "./icons/dot.svg";

const Hero = () => {
  return (
    <>
      <div className="bg-neutral-silver flex py-24 px-36 items-center justify-center gap-28 h-full">
        <div className=" font-semibold mt-[-100px]  ">
          <h1 className=" text-6xl leading-[76px] ">
            Lessons and insights <span className=" block">from 8 years</span>
          </h1>
          <p className=" text-base mt-8 font-normal text-light-grey">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className=" font-normal mt-11 bg-green-primary text-white px-[20px] py-[10px] rounded-md">
            Register
          </button>
        </div>
        <div>
          <img src={heroImage}></img>
        </div>
      </div>
      <img className=" ml-auto mr-auto mt-[-40px]" src={dot}></img>
    </>
  );
};

export default Hero;

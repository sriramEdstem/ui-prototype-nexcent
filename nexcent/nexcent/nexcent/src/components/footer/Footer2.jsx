import logo from "./icons/logo.svg";
import instagram from "./icons/instagram.svg";
import globe from "./icons/globe.svg";
import x from "./icons/x.svg";
import youtube from "./icons/youtube.svg";
import rocket from "./icons/rocket.svg";

const Footer2 = () => {
  return (
    <div className=" justify-center flex gap-32 text-white bg-brand-secondary px-[165px] py-16">
      <div className=" w-80 flex gap-10 flex-col">
        <div>
          <img src={logo}></img>
        </div>
        <div className=" flex flex-col gap-2">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className=" flex gap-4">
          <img src={instagram}></img>
          <img src={globe}></img>
          <img src={x}></img>
          <img src={youtube}></img>
        </div>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-8 w-[160px]">
          <h1 className=" text-xl font-semibold">Company</h1>
          <ul className="flex flex-col gap-3 text-neutral-silver font-extralight">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="flex flex-col gap-8  w-[160px]">
          <h1 className="text-xl font-semibold">Support</h1>
          <ul className="flex flex-col gap-3 text-neutral-silver font-extralight">
            <li> Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>
        <div className="flex flex-col gap-8  w-[160px]">
          <h1 className="text-xl font-semibold">Stay up to date</h1>
          <div className="relative w-[300px]">
            <input
              className="w-[255px] h-10 rounded-lg bg-white px-2 placeholder:text-sm bg-opacity-20"
              placeholder="Your email address"
            ></input>
            <div className="bottom-3 left-[225px] absolute">
              <img src={rocket} className="w-[18px]"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;

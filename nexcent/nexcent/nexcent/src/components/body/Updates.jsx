import updates1 from "./icons/updates1.svg";
import updates2 from "./icons/updates2.svg";
import updates3 from "./icons/updates3.svg";
import arrow from "./icons/icon7.svg";

const Updates = () => {
  return (
    <div>
      <div className=" text-center ">
        <h1 className="text-[40px] font-semibold leading-[50px] text-neutral-grey mb-2">
          Caring is the new marketing
        </h1>
        <p className=" mx-auto text-neutral-light-grey w-[628px] leading-6">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="flex justify-between px-36 mt-5 pb-36">
        <div className="flex flex-col items-center relative">
          <img className="w-[368px]" src={updates1}></img>
          <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-72 p-4 flex flex-col gap-4 text-center bg-neutral-silver font-semibold rounded-lg absolute top-48 text-neutral-light-grey">
            <h4>Creating Streamlined Safeguarding Processes with OneRen</h4>
            <div className="flex text-center justify-center gap-2">
              <p className=" text-green-primary font-semibold text-lg">
                Readmore
              </p>
              <img src={arrow}></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          <img className="w-[368px]" src={updates2}></img>
          <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-72 p-4 flex flex-col gap-4 text-center bg-neutral-silver font-semibold rounded-lg absolute top-48 text-neutral-light-grey">
            <h4>
              What are your safeguarding responsibilities and how can you manage
              them?
            </h4>
            <div className="flex text-center justify-center gap-2">
              <p className=" text-green-primary font-semibold text-lg">
                Readmore
              </p>
              <img src={arrow}></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          <img className="w-[368px]" src={updates3}></img>
          <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-72 p-4 flex flex-col gap-4 text-center bg-neutral-silver font-semibold rounded-lg absolute top-48 text-neutral-light-grey">
            <h4 className="px-[20px]">
              Revamping the Membership Model with Triathlon Australia
            </h4>
            <div className="flex text-center justify-center gap-2">
              <p className=" text-green-primary font-semibold text-lg">
                Readmore
              </p>
              <img src={arrow}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;

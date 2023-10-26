import iconA from "./icons/iconA.svg";
import iconB from "./icons/iconB.svg";
import iconC from "./icons/iconC.svg";
import iconD from "./icons/iconD.svg";

const Achievements = () => {
  return (
    <div className=" bg-neutral-silver px-36 py-16 flex justify-center gap-9">
      <div className=" flex flex-col items-start gap-2 w-[540px]">
        <h1 className=" text-neutral-grey text-3xl font-semibold leading-[45px]">
          Helping a local
          <span className=" text-green-primary block">
            business reinvent itself
          </span>
        </h1>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-[30px]">
          <div className="flex gap-4">
            <div>
              <img src={iconA}></img>
            </div>
            <div>
              <h1 className=" text-xl w-48 font-bold leading-9 text-neutral-grey">
                2,245,341
              </h1>
              <p className=" text-light-grey text-sm leading-6">Members</p>
            </div>
          </div>
          <div className=" flex gap-4">
            <div className="">
              <img className="" src={iconA}></img>
            </div>
            <div>
              <h1 className=" text-xl w-48 font-bold leading-9 text-neutral-grey">
                46,328
              </h1>
              <p className=" text-light-grey text-sm leading-6">Clubs</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div className="flex gap-4">
            <div className="">
              <img src={iconC}></img>
            </div>
            <div>
              <h1 className=" text-xl w-48 font-bold leading-9 text-neutral-grey">
                828,867
              </h1>
              <p className=" text-light-grey text-sm leading-6">
                Event Bookings
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img src={iconD}></img>
            </div>
            <div>
              <h1 className=" text-xl w-48 font-bold leading-9 text-neutral-grey">
                1,926,436
              </h1>
              <p className=" text-light-grey text-sm leading-6">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

import iconA from "./icons/iconA.svg";
import iconB from "./icons/iconB.svg";
import iconC from "./icons/iconC.svg";

const Community = () => {
  return (
    <div className=" flex flex-col items-center px-36">
      <div className=" flex gap-2 flex-col items-center text-neutral-grey text-center w-[542px]">
        <h1 className=" text-4xl leading-[50px] ">
          Manage your entire community in a single system
        </h1>
        <p className=" text-base text-light-grey">
          Who is Nextcent suitable for?
        </p>
      </div>

      <div className=" text-neutral-grey w-screen flex justify-between py-20 px-36">
        <div className=" px-8 text-center flex flex-col items-center gap-5 w-[299px] ">
          <img src={iconA}></img>
          <p className="text-[28px] leading-9 font-bold ">
            Membership Organisations
          </p>
          <p className="text-light-grey px-2">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className=" px-8 text-center flex flex-col items-center gap-5 w-[299px] ">
          <img src={iconB}></img>
          <p className=" text-[28px] leading-9 font-bold ">
            National Associations
          </p>
          <p className="text-light-grey px-4">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className=" px-8 text-center flex flex-col items-center gap-5 w-[299px] px-2 ">
          <img src={iconC}></img>
          <p className="text-[28px] leading-9 font-bold w-56">
            Clubs And Groups
          </p>
          <p className="text-light-grey px-2">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;

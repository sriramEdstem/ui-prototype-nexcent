import phone from "./icons/phone.svg";

const Calender = () => {
  return (
    <div className="flex px-36 justify-center gap-14 items-center text-neutral-grey">
      <div className=" w-[442px]">
        <img src={phone}></img>
      </div>
      <div className="w-[661px] flex gap-8 flex-col">
        <div className="flex flex-col gap-4 self-stretch	">
          <h1 className="text-[40px] font-semibold leading-[50px] ">
            How to design your site footer like we did
          </h1>
          <p className="text-light-grey ">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
        </div>
        <div>
          <button className=" text-base leading-6 bg-green-primary text-white px-8 py-[14px] rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calender;

import authenticateIcon from "./icons/authenticate.svg";

const Body = () => {
  return (
    <div className="flex px-36 w-screen justify-center gap-14 items-center text-neutral-grey">
      <div className=" w-[442px] h-[450px] py-14">
        <img src={authenticateIcon}></img>
      </div>
      <div className=" flex gap-8 flex-col mr-10">
        <div className="flex flex-col gap-4 w-[661px]">
          <h1 className=" w-[500px] text-3xl font-semibold leading-[50px]  ">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className=" w-[560px] text-light-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
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

export default Body;

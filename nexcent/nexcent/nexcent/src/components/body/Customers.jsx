import tesla from "./icons/tesla.svg";
import icon1 from "./icons/icon1.svg";
import icon2 from "./icons/icon2.svg";
import icon3 from "./icons/icon3.svg";
import icon4 from "./icons/icon4.svg";
import icon5 from "./icons/icon5.svg";
import icon6 from "./icons/icon6.svg";
import icon7 from "./icons/icon7.svg";

const Customers = () => {
  return (
    <div className=" px-36 flex  items-center py-8 justify-center bg-neutral-silver">
      <div className="flex gap-[78px]">
        <div>
          <img alt="tesla logo" src={tesla} className=" w-[326px]"></img>
        </div>
        <div className="flex flex-col items-start gap-8 w-[790px]">
          <div className="flex flex-col gap-4">
            <p className=" text-light-grey font-medium text-lg leading-6">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div className=" flex flex-col gap-2">
              <p className=" text-green-primary text-lg font-semibold leading-7">
                Tim Smith
              </p>
              <p className=" text-neutral-light-grey leading-6 font-light">
                British Dragon Boat Racing Association
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <img src={icon1}></img>
            <img src={icon2}></img>
            <img src={icon3}></img>
            <img src={icon4}></img>
            <img src={icon5}></img>
            <img src={icon6}></img>
            <div className="flex gap-6">
              <p className=" text-lg font-semibold leading-7 text-green-primary">
                Meet all customers
              </p>
              <img src={icon7}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;

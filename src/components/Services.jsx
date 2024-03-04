import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className="flex flex-col justify-center min-h-screen px-5 pt-24  lg:px-32 lg:pt-16">
      <div className="flex flex-col items-center justify-between  lg:flex-row">
        <div>
          <h1 className="text-4xl font-semibold text-center  lg:text-start">
            Our Products
          </h1>
          <p className="mt-2 text-center  lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className="mt-4  lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="flex flex-col gap-5  lg:flex-row pt-14">
        <ServicesCard icon={icon1} title="Lab Test" />
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon3} title="Heart Health" />
      </div>
    </div>
  );
};

export default Services;

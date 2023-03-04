import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#000] py-8 px-5 md:px-40 md:py-20 text-white flex justify-center">
      <div className="w-full 2xl:w-[80vh]">
        <div className="flex flex-col md:flex md:flex-row justify-between">
          <div className="max-md:text-center max-md:w-full w-1/2">
            <h1 className="font-semibold text-xl ">NILESH KALDATE</h1>
            <p className="text-sm mt-4">
              A frontend Focused Web Developer with 1+ years of experience in
              building the Frontend of Websites and Web Applications that leads
              to the success of the overall product
            </p>
          </div>
          <div className="max-md:w-full max-md:py-12 max-md:text-center">
            <h1 className="font-semibold text-xl">SOCIALS</h1>
          </div>
        </div>
        <div className="border-[0.2px] border-white md:mt-20"></div>
        <div className="flex justify-center">
          <p className="text-xs mt-10">Thank you for visiting my profile</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

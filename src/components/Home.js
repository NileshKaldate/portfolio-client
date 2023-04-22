import React from "react";
import Button from "../common/Buttons/Button";
import Typography from "../common/Typography";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div
      className="h-[88vh] xl:h-[100vh]  2xl:h-[80vh] relative md:max-h-[1000px] max-md:max-h-[800px]"
      id="home"
    >
      <Navbar />
      <div className="relative h-full">
        <div className="bg-black h-full flex justify-center items-center bg-[url(./assets/bgImage.jpeg)] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full md:w-[86%] lg:w-[73%] xl:w-[60%] 2xl:w-[90vh] max-md:px-4 ">
          <Typography
            variant="h1"
            className="max-md:flex max-md:flex-col max-md:gap-2"
          >   
            <span>HELLO 👋 I     'M </span>
            <span className="typewriter" id="heading">
              NILESH KALDATE
            </span>
          </Typography>
          <div className="mt-10">
            <Typography className="mt-10 font-thin" variant="h4">
              A frontend Focused Web Developer with 1+ years of experience in
              building the Frontend of Websites and Web Applications that leads
              to the success of the overall product
            </Typography>
          </div>
          <div className="mt-10">
            <Button label="PROJECTS" />
          </div>
        </div>
      </div>
      <svg class="arrows">
        <path class="a1" d="M0 0 L15 16 L30 0"></path>
        <path class="a2" d="M0 15 L15 30 L30 15"></path>
        <path class="a3" d="M0 30 L15 45 L30 30"></path>
      </svg>
    </div>
  );
};

export default Home;

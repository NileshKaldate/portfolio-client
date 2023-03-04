import React, { useState } from "react";
import DownloadButton from "../common/Buttons/DownloadButton";
import Typography from "../common/Typography";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const height = "h-16 sm:h-16 md:h-20 lg:h-24 2xl:h-28";
  const listGap = "gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20";
  const padding = "px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 2xl:px-10";
  const transitions = `${
    isChecked &&
    "transition ease-in-out  before:origin-top-left before:rotate-45 before:duration-500 before:delay-300 before:absolute before:top-[22px] before:w-[25px] after:absolute after:origin-bottom-left after:-rotate-45 after:duration-500 after:delay-300 after:top-[39px] after:w-[25px] "
  }`;
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={`z-10 fixed bg-white w-full ${isChecked && "shadow-2xl"}`}>
      <nav
        className={`${
          !isChecked && "shadow-xl"
        } flex justify-between items-center w-full  ${height} font-bold text-lg ${padding}`}
      >
        <Typography variant="h3">NILESH KALDATE</Typography>
        <ul className={`flex capitalize items-center max-md:hidden ${listGap}`}>
          <li>
            <DownloadButton
              label={"CV"}
              link={"https://filetransfer.io/data-package/hJGhMxue/download"}
            />
          </li>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <button
          onClick={() => {
            document.getElementById("input")?.click();
          }}
          className="cursor-pointer md:hidden"
        >
          <label
            className={` before:bg-black flex flex-col before:h-0.5 before:w-6  after:bg-black  after:h-0.5 after:w-6 gap-1 before:rounded-full after:rounded-full md:hidden ${transitions}`}
          >
            <input
              type="checkbox"
              className="bg-black w-6 h-0.5 flex flex-col appearance-none rounded-full outline-none pointer-events-none transition-opacity checked:opacity-0 duration-500 input"
              onClick={handleChange}
            />
          </label>
        </button>
      </nav>
      {isChecked && (
        <div className=" w-full bg-white md:hidden font-bold ">
          <button
            className="flex w-full justify-end py-4 border-t  px-7 animate-left"
            onClick={() => {
              window.location.href =
                "https://filetransfer.io/data-package/hJGhMxue/download";
              isChecked(!isChecked);
            }}
          >
            <DownloadButton label="cv" link="" />
          </button>

          <button
            className="flex w-full justify-end py-4 border-t  px-7 "
            onClick={() => {
              isChecked(!isChecked);
            }}
          >
            <a href="#home">Home</a>
          </button>

          <button
            className="flex w-full justify-end py-4 border-t  px-7 "
            onClick={() => {
              isChecked(!isChecked);
            }}
          >
            <a href="#about">ABOUT</a>
          </button>

          <button
            className="flex w-full justify-end py-4 border-t  px-7 "
            onClick={() => {
              isChecked(!isChecked);
            }}
          >
            <a href="#projects">PROJECTS</a>
          </button>

          <button
            className="flex w-full justify-end py-4 border-t  px-7 "
            onClick={() => {
              isChecked(!isChecked);
            }}
          >
            <a href="#contact">CONTACT</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

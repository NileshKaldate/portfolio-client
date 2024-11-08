import { Fade as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import DownloadButton from "../common/Buttons/DownloadButton";
import Typography from "../common/Typography";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const height = "h-16 sm:h-16 md:h-20 lg:h-24 2xl:h-28";
  const listGap = "gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20";
  const padding = "px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 2xl:px-10";

  const handleNavClick = () => {
    setIsChecked(false);
  };

  const handleDownload = () => {
    fetch(
      "https://dc-sync.s3.eu-north-1.amazonaws.com/NileshKaldateCV.pdf"
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Nilesh_Kaldate_CV.pdf";
        alink.click();
      });
    });
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
            <DownloadButton label={"CV"} onClick={handleDownload} />
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
        <div className="md:hidden absolute right-0">
          <Hamburger
            toggle={setIsChecked}
            toggled={isChecked}
            size={18}
            hideOutline={false}
            rounded
            easing="ease-in"
          />
        </div>
      </nav>
      {isChecked && (
        <div className=" w-full bg-white md:hidden font-bold ">
          <button
            className="flex w-full justify-end py-4 border-t  px-7 animate-left"
            onClick={() => {
              handleDownload();
              handleNavClick();
            }}
          >
            <DownloadButton label="cv" link="" />
          </button>

          <button
            className="flex w-full justify-end py-4 border-t  px-7 "
            onClick={handleNavClick}
          >
            <a href="#home">Home</a>
          </button>

          <button
            className="flex w-full justify-end py-4 border-t  px-7 "
            onClick={handleNavClick}
          >
            <a href="#about">ABOUT</a>
          </button>

          <button
            className="flex w-full justify-end py-4 border-t  px-7 "
            onClick={handleNavClick}
          >
            <a href="#projects">PROJECTS</a>
          </button>

          <button
            className="flex w-full justify-end py-4 border-t  px-7 "
            onClick={handleNavClick}
          >
            <a href="#contact">CONTACT</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import Button from "../common/Buttons/Button";
import Typography from "../common/Typography";
import { skills } from "../data/skills";

const About = () => {
  return (
    <div
      className="bg-[#fafafa] pt-14 md:py-24 px-5  w-full md:flex md:justify-center"
      id="about"
    >
      <div className="w-full md:w-[100%] lg:w-[90%] xl:w-[80%] 2xl:w-[120vh]">
        <div className="text-center ">
          <Typography variant="h2" className="animate-character">
            ABOUT ME
          </Typography>
          <div className="w-full flex justify-center mt-6">
            <div className="md:w-[68%]">
              <Typography variant="h4" className="font-thin">
                Here you find more information about me, what i do, and my
                current skills mostly in terms of programming and technology
              </Typography>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-between mt-14 md:mt-16 xl:mt-24 md:gap-24">
          <div className="md:w-1/2  flex flex-col gap-4 ">
            <Typography variant="h3">Get to know me!</Typography>
            <div>
              <Typography
                variant="body"
                className="text-[#696969] text-md leading-7"
              >
                Im a Frontend Web Developer building the Frond-end of Websites
                and Web Applications that leads to success of the overall
                product. Check out some of my work in the Projects section.
                <br />I also like sharing content related to stuff that i have
                learned over the years in Web Development so it can help other
                people of the Dev community. Feel free to Connect or follow me
                on my Linkedin where I post useful content related to Web
                Development and Programming
                <br />
                I'm Open to Job opportunities where i can contribute, learn and
                grow. if you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </Typography>
            </div>
            <div>
              <Button label="CONTACT" className="md:px-4 md:py-2" />
            </div>
          </div>
          <div className=" md:w-1/2 max-md:py-14">
            <Typography variant="h3">My Skills</Typography>
            <div className="mt-3 flex flex-wrap ">
              {skills.map((item, index) => {
                return (
                  <p
                    className="mr-4 mt-5 bg-[#e7e7e7] py-2 px-4 rounded-lg text-sm md:text-md font-medium"
                    key={index}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Typography from "../common/Typography";

const Projects = () => {
  return (
    <div
      className="py-20 md:py-28 w-full flex justify-center items-center"
      id="projects"
    >
      <div className="w-full md:w-[86%] lg:w-[80%] xl:w-[60%] 2xl:w-[90vh] max-md:px-4 flex flex-col justify-center items-center">
        <Typography variant="h2" className="animate-character">
          PROJECTS
        </Typography>
        <div className="w-full flex justify-center mt-6">
          <div className="md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[70vh]">
            <Typography variant="h4" className="font-thin">
              Here you find more information about me, what i do, and my current
              skills mostly in terms of programming and technology
            </Typography>
          </div>
        </div>
        {/* <div className="mt-6">
          {projects.map((project) => {
            return (
              <div>
                <h1>Projects</h1>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Projects;

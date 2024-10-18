import React from "react";
import { PROJECTS } from "../constants";
import {motion} from 'framer-motion'


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      
      <motion.h1 
      while InView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="text-center my-20 text-4xl">
      PROJECTS
      </motion.h1>


      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center mb-8">
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1}}
            className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded mb-6"
              />
            </motion.div>

            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded mr-2 bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

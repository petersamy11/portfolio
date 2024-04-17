import React from "react";
import { projects } from "./ProjectsList";

export default function Projects() {
  return (
    <section id="projects" className="container-lg py-5">
      <h2 className="fs-1 text-center mb-5">Projects</h2>
      {projects.map(({ title, img, desc, tools, links }, index) => {
        return (
          <div key={index} className='proj-sec my-5 rounded-3'>
            <img className="w-100 rounded-2" src={img} alt={title} />
            <div className="proj-content p-4">
            <h5 className="mb-4">{title}</h5>
            <p>{desc}</p>
            <div className="tools">
            {tools.map((tool, index)=><p key={index} className="me-3 d-inline-block">{tool}</p>)}
            </div>
            <p>
            {/* <a href={links[0]} target='_blank' rel='noopener noreferrer' className="me-3 fs-4"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            <a href={links[1]} target='_blank' rel='noopener noreferrer' className="me-3 fs-4"><i className="fa-brands fa-github"></i></a> */}
            </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

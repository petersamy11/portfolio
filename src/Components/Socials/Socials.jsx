import React from "react";
export default function Socials({custom, size}) {
  return (
    <ul className={`list-unstyled d-flex align-items-center mb-0 ${custom}`}>
      <li className="">
        <a
          className="text-decoration-none"
          href="https://www.linkedin.com/in/peter-said-004657216/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className={`fa-brands fa-linkedin ${size}`}></i>{" "}
        </a>
      </li>
      <li className="ms-4">
        <a
          className="text-decoration-none"
          href="https://github.com/petersamy11"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className={`fa-brands fa-github ${size}`}></i>{" "}
        </a>
      </li>
      
      <li className="ms-4">
        <a
          className="text-decoration-none"
          href="mailto:petersamy2017@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="petersamy2017@gmail.com"          
        >
          {" "}
          <i className={`fa-solid fa-at ${size}`}></i>{" "}
        </a>
      </li>
    </ul>
  );
}

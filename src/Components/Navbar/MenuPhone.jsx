import React,{ useState } from "react";
import Button from "../Button/Button";

export default function MenuPhone() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <i
        onClick={() => setIsOpen(!isOpen)}
        style={{cursor:'pointer'}}
        className={`fa-solid fs-4 ${isOpen ? "fa-bars-staggered" : "fa-bars"}`}
        aria-hidden="true"
      ></i>
      <ul
        className={`list-unstyled position-absolute start-0 top-100 w-100 shadow-sm d-flex flex-column align-items-center justify-content-center ${
          !isOpen && "d-none"
        }`}
      >
        <li className="mb-3">
          <a className="text-decoration-none" href="#home">
            Home
          </a>
        </li>
        <li className="mb-3">
          <a className="text-decoration-none" href="#skills">
            Skills
          </a>
        </li>
        <li className="mb-3">
          <a className="text-decoration-none" href="#projects">
            Projects
          </a>
        </li>
        <li className="mb-3">
          <a className="text-decoration-none" href="#contact">
            Contact
          </a>
        </li>
        <li className="mb-3">
          <Button text={"Resume"} link={'https://drive.google.com/file/d/10JFvAN0O3Zuw2J_Kbhn4A2QCabK1T5PM/view'} />
        </li>
      </ul>
    </nav>
  );
}

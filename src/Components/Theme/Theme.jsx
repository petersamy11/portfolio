import React, { useState } from "react";

export default function Theme() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleToggle = () => {
    setIsLightTheme(!isLightTheme);
  };

  if (isLightTheme) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

  return (
    <div className="theme-toggler" onClick={handleToggle}>
      <i className={`fa-solid ${isLightTheme ? "fa-sun" : "fa-moon"} fs-4`}></i>
    </div>
  );
}

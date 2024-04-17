import React, { useEffect, useState } from "react";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import LoadingPage from "../LoadingPage/LoadingPage";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(()=> setLoading(false),3000)
  }, [])
  

  return (
    <div className="App">
      {loading? <LoadingPage loading={loading} />:
      <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      </>
    }
    </div>
  );
}

export default App;

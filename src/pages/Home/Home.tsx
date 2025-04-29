// import React from "react"
import { useEffect, useState } from "react";
import MainContent from "../../components/MainContent/MainContent";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [scrollMove, setScrollMove] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll(): void {
      const scroll: number = window.scrollY;
      scroll > 10 ? setScrollMove(true) : setScrollMove(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);
  return (
    <div>
      <Navbar scrollMove={scrollMove}/>
      <MainContent />
    </div>
  );
};

export default Home;

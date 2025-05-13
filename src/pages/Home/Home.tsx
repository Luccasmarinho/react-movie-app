import Navbar from "../../components/Navbar/Navbar";
import MainContent from "../../components/Home/MainContent/MainContent";
import Footer from "../../components/Home/Footer/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    function createSession() {
      sessionStorage.setItem("s", "home");
    }
    createSession();
  }, []);
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;

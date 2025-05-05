import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/filmes" element={<Movies />}></Route>
        <Route path="/*" element={<p>not found</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;

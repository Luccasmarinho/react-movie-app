import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Series from "../pages/Series/Series";
import Details from "../pages/Details/Details";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={`/filmes`} element={<Movies />}></Route>
        <Route path={`/series`} element={<Series />}></Route>
        <Route path={`/details/:id/:title`} element={<Details />}></Route>
        <Route path="/*" element={<p>not found</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;

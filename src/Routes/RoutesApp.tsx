import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import Series from "../pages/Series/Series";
import Details from "../pages/Details/Details";
import Search from "../pages/Search/Search";

const RoutesApp = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/details/:id/:title" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="/*" element={<p>not found</p>} />
      </Routes>

      {/* Modal aparece por cima se tiver backgroundLocation */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/details/:id/:title" element={<Details />} />
        </Routes>
      )}
    </>
  );
};

export default RoutesApp;

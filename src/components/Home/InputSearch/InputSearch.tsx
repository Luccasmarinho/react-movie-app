import { useContext } from "react";
import { StyledWrapper, StyledButton } from "./InputSearchStyle";
import CancelIcon from "@mui/icons-material/Cancel";
import { AnimatePresence } from "framer-motion";
import { CommonContext } from "../../../context/Common/CommonContext";
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
  const navigate = useNavigate();
  const { isClicked, setIsClicked, valueInputSearch, setValueInputSearch } =
    useContext(CommonContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValueInputSearch(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/search?q=${valueInputSearch}`);
  }

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            className="input"
            type="text"
            placeholder="Filmes, séries"
            id="search"
            required
            value={valueInputSearch}
            onChange={handleChange}
          />
          <div className="fancy-bg" />
          <div className="search">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
              </g>
            </svg>
          </div>
          <AnimatePresence>
            {isClicked && (
              <StyledButton
                key="cancel-button-unique"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                type="button"
                onClick={() => setIsClicked(false)}
              >
                <CancelIcon />
              </StyledButton>
            )}
          </AnimatePresence>
        </label>
      </form>
    </StyledWrapper>
  );
};

export default InputSearch;

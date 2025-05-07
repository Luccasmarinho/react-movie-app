import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CloseButton, ModalContent, ModalOverlay } from "./ModalDetailsStyle";
import CloseIcon from "@mui/icons-material/Close";

const ModalDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") navigate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <ModalOverlay onClick={() => navigate(-1)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => navigate(-1)}>
          <CloseIcon />
        </CloseButton>
        <h2>Detalhes do Filme</h2>
        <p>Conteúdo do filme aqui...</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalDetails;

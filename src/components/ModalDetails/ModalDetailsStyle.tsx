import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000000000000000000;
`;

export const ModalContent = styled.div`
  background: #121212;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 950px;
  max-height: 90vh;
  overflow-y: auto;
  color: white;
  position: relative;

  h2 {
    margin-bottom: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

export const ContainerOverview = styled.div`
  display: flex;
  margin-bottom: 20px;

  p,
  strong {
    font-family: var(--font-subtitle);
    font-size: 13.5px;
  }
`;

export const Box = styled.div`
  width: 50%;
  margin-top: 10px;
`;

export const Age = styled.div`
  display: flex;
  gap: 5px;
`;
export const Overview = styled.div``;

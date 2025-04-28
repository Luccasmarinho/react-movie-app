import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute", // Ou fixed, dependendo da sua necessidade
        top: "50%",
        left: "50%",
        zIndex: 9999, // Garantir que o Loading fique acima de outros elementos
      }}
    >
      <CircularProgress />
    </Box>
  );
}

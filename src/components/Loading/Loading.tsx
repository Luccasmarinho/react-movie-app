import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


export default function Loading() {
  return (
    <Box
      sx={{
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: 9999999,
      }}
    >
      <CircularProgress />
    </Box>
  );
}

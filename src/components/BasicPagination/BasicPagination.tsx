import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationProps {
  OnChange: (event: React.ChangeEvent<unknown>, newValue: number) => void;
  page: number;
}

export default function BasicPagination({ OnChange, page }: PaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        page={page}
        count={500}
        color="standard"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "black",
            color: "white",
          },
        }}
        onChange={OnChange}
      />
    </Stack>
  );
}

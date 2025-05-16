import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {PaginationProps} from "../../types/common/common"

export default function BasicPagination({ OnChange, page, total_pages }: PaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        page={page}
        count={!total_pages ? 500 : total_pages}
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

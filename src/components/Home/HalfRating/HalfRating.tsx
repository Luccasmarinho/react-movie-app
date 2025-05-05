import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { VoteProps } from "../../../types/common/common";

export default function HalfRating({ vote }: VoteProps) {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={vote}
        precision={0.5}
        readOnly
        sx={{
          "& .MuiRating-iconFilled": {
            color: "gold",
          },
          "& .MuiRating-iconEmpty": {
            color: "gold",
          },
        }}
      />
    </Stack>
  );
}

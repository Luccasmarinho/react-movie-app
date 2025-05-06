import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonCards() {
  return (
    <Stack spacing={1}>
           <Skeleton variant="rectangular" width={280} height={380} />
    </Stack>
  );
}

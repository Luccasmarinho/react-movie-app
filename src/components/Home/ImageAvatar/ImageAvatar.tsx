// import * as React from 'react';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import image from "../../../assets/face-man.jpg";

export default function ImageAvatar() {
  return (
    <Stack direction="row" spacing={0}>
      <Avatar alt="Remy Sharp" src={image} />
    </Stack>
  );
}

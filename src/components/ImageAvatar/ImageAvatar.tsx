// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import image from "../../../public/desenho-de-rosto-de-homem-bonito-700-148564000.jpg";

export default function ImageAvatar() {
  return (
    <Stack direction="row" spacing={0}>
      <Avatar alt="Remy Sharp" src={image} />
    </Stack>
  );
}
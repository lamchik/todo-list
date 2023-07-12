import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {MouseEventHandler} from "react";

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const IconButtonSizes = (props: Props) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton aria-label="delete" size="small" onClick={props.onClick}>
        <DeleteIcon fontSize="inherit"/>
      </IconButton>
    </Stack>
  );
}

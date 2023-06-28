import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import {ReactComponent as SetUp} from '../../../assets/images/setup.svg';

export const IconButtons = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton color="secondary" aria-label="add an alarm">
        <SetUp/>
      </IconButton>
    </Stack>
  );
}

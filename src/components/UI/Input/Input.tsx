import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './Input.module.css'
import {ChangeEventHandler} from "react";


interface Props {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}


export default function FormPropsTextFields(props: Props) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, },
      }}
      noValidate
      autoComplete="off"
    >
      <div className={styles.input}>
        <
          TextField
          color='info'
          id="outlined-search"
          label="Title"
          type="search"
          fullWidth
          value={props.value}
          onChange={props.onChange}
        />
      </div>

    </Box>
  );
}

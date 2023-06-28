import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface Props {
  label: string
  checked?: boolean
  onClick?: () => void
}

export default function CheckboxLabels(props: Props) {
  return (
    <FormGroup onClick={props.onClick}>
      <FormControlLabel checked={props.checked} control={<Checkbox  sx={{
        color: '#F4F4F4',
        '&.Mui-checked': {
          color: '#F4F4F4',
        },
      }}/>} label={props.label} sx={{
        color: '#F4F4F4',
        marginBottom: '17px',
        fontFamily: 'Actor',
        fontWeight: 600,
        fontSize: 24,
        lineHeight: 28
      }}/>
    </FormGroup>
  );
}

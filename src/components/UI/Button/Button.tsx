import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {OverridableStringUnion} from "@mui/types";
import {ButtonPropsVariantOverrides} from "@mui/material/Button/Button";
import {MouseEventHandler} from "react";
// import {createTheme, PaletteColorOptions} from "@mui/material";

// declare module '@mui/material/styles' {
//   interface CustomPalette {
//     anger: PaletteColorOptions;
//   }
//   interface Palette extends CustomPalette {}
//   interface PaletteOptions extends CustomPalette {}
// }
//
// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     anger: true;
//   }
// }
//
// const { palette } = createTheme();
// const { augmentColor } = palette;
// const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
// createTheme({
//   palette: {
//     anger: createColor('#8C5A6C'),
//     // apple: createColor('#5DBA40'),
//     // steelBlue: createColor('#5C76B7'),
//     // violet: createColor('#BC00A3'),
//   },
// });

interface Props {
  onClick: MouseEventHandler
  title: string
  variant?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides
    >;
}

export default function ButtonSizes(props: Props) {

  return (
    <Box sx={{ '& button': { m: 2, padding: '10px', borderRadius: '10px'} }}>
      <div>
        <Button size="medium" onClick={props.onClick} variant={props.variant} style={{color: '#DB8976', borderColor: '#DB8976'}}>
          {props.title}
        </Button>
      </div>
    </Box>
  );
}

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {ReactNode} from "react";
import {ReactComponent as Arrow} from '../../../assets/images/accordion.svg';
import styles from './Accordion.module.css'
import {MarkLine} from "../MarkLine/MarkLine";

interface Props {
  title: string,
  details: ReactNode
}

export default function SimpleAccordion(props: Props) {
  return (
    <div>
      <Accordion sx={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: 'none',
        boxShadow: 'none'
      }}>
        <AccordionSummary
          expandIcon={<Arrow />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: '#756E71',
            borderRadius: '25px',
            boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
            marginBottom: '15px',
            paddingRight: '37px',
          }}
        >
          <MarkLine color='grey'/>
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: 600,
              fontFamily: 'Abhaya Libre'
          }} className={styles.title}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding: 0, marginBottom: '15px'}}>
          {props.details}
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

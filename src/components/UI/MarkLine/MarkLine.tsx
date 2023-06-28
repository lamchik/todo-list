import React from "react";
import cn from "clsx";
import styles from "./MarkLine.module.css";

interface Props {
  color?: string
}

export const MarkLine = (props: Props) => {

  return (
    <div className={cn(styles.colorLine, {
        [styles.colorLine__yellow]: props.color === 'yellow',
        [styles.colorLine__blue]: props.color === 'blue',
        [styles.colorLine__red]: props.color === 'red',
        [styles.colorLine__grey]: props.color === 'grey'
      }
    )}></div>
  )
}

import React from "react"
import styles from './Header.module.css'
import {IconButtons} from "../UI/IconButton/IconButton";

export const Header = () => {

  return (
    <div className={styles.header}>
      <h5 className={styles.title}>To Do</h5>
      <IconButtons/>
    </div>
  )
}

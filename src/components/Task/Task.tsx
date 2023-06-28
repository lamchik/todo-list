import React, {useCallback, useState} from 'react'
import cn from "classnames";

import styles from './Task.module.css'
import '../../assets/fonts/Abhaya_Libre/Abhaya_Libre.css'
import CustomizedSwitch from "../UI/Switch/Switch";
import {TaskType} from "../../typings";
import {MarkLine} from "../UI/MarkLine/MarkLine";
import {Popup} from "../UI/Popup/Popup";


export const Task = (task: TaskType) => {

  const [isVisiblePopup, setIsVisiblePopup] = useState(false)
  const [isCheckedTask, setIsCheckedTask] = useState(false)


  const openPopup = useCallback(() => {
    setIsVisiblePopup(!isVisiblePopup)
  },[isVisiblePopup])

  const check = useCallback(() => {
    setIsCheckedTask(!isCheckedTask)
  }, [isCheckedTask])


  return (
    <div>

      <div className={styles.container}>
        <MarkLine color={task.lineColor}/>

        <div className={styles.taskContainer} onClick={openPopup}>
          <h6 className={cn(styles.taskHeader, {[styles.taskHeader_type_strikethrough]: isCheckedTask})}>
            {task.title}
          </h6>
          <p className={styles.taskDescription}>{task.text}</p>
        </div>

        <CustomizedSwitch checked={isCheckedTask} onClick={check}/>

      </div>

      <Popup isVisible={isVisiblePopup} setIsVisiblePopup={setIsVisiblePopup}>
        <div className={styles.openedTask}>
          <p className={styles.fullTaskHeader}>
            {task.title}
          </p>
          <p className={styles.fullDescription}>
            {task.text}
          </p>
        </div>

      </Popup>
    </div>
  )
}



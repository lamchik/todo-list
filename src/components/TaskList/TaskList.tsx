import React from "react";
import {Task} from "../Task/Task";
import styles from './TaskList.module.css'
import ButtonSizes from "../UI/Button/Button";
import {TaskType} from "../../typings";

interface Props {
  onClickToOpenPopup: () => void
  tasks: Array<TaskType>
}

export const TaskList = (props: Props) => {

  return (
    <section className={styles.container}>
      {props.tasks.map(task  =>
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          text={task.text}
          lineColor={task.lineColor}/>
      )}
      <ButtonSizes onClick={props.onClickToOpenPopup} title='Add new task' variant='text'/>
    </section>
  )
}

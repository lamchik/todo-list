import React, {useCallback, useState} from 'react'
import {useDispatch} from "react-redux";
import styles from './TodoList.module.css'
import {TaskList} from "../TaskList/TaskList";
import {Header} from "../Header/Header";
import SimpleAccordion from "../UI/Accordion/Accordion";
import {Popup} from "../UI/Popup/Popup";
import FormPropsTextFields from "../UI/Input/Input";
import MultilineTextFields from "../UI/MultilineInput/MultilineInput";
import {tasks} from "../../data/tasks";
import ButtonSizes from "../UI/Button/Button";
import {ActionAddTask} from "../../store/tasks";


export const TodoList = () => {

  const [isVisiblePopup, setIsVisiblePopup] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  const dispatch = useDispatch();

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }


  const todayDate = new Date()

  const openPopup = useCallback(() => {
    setIsVisiblePopup(!isVisiblePopup)
  },[isVisiblePopup])

  const dispatchAction = useCallback(
    (action: ActionAddTask) => {
      dispatch(action);
    },
    [dispatch]
  );

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }


  const submit = useCallback(() => {
    dispatchAction({
      type: "addTask",
      value: {
      id: getRandomInt(134),
        title: title,
        text: description,
        lineColor: 'red'}
    })
    setIsVisiblePopup(false)
    setTitle('')
    setDescription('')
  }, [isVisiblePopup, title, description, dispatchAction])


  return (
    <div className={styles.container}>
      <Header/>
      <SimpleAccordion
        title={todayDate.toDateString()}
        details={
        <TaskList onClickToOpenPopup={openPopup} tasks={tasks}/>
      }/>
      <Popup
        isVisible={isVisiblePopup}
        setIsVisiblePopup={setIsVisiblePopup}>
        <FormPropsTextFields onChange={handleChangeTitle} value={title}/>
        <MultilineTextFields onChange={handleChangeDescription} value={description}/>
        <ButtonSizes onClick={submit} title='Add' variant='outlined'/>
      </Popup>

    </div>
  )
}

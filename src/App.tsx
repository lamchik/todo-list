import * as React from "react";
import './assets/fonts/Abhaya_Libre/Abhaya_Libre.css'
import './assets/fonts/Actor/Actor.css'
import styles from './App.module.css'

import {TodoList} from "./components/TodoList/TodoList";

function App() {
  return (
    <div className={styles.container}>
      <TodoList/>
    </div>
  );
}

export default App;

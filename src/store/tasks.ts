import {TaskType} from "../typings";
import {tasks} from "../data/tasks";

interface State {
  tasks: TaskType[]
}

const initialState: State = {
  tasks: tasks,
};

export type ActionAddTask = {
  type: "addTask";
  value: TaskType;
};

export type ActionDeleteTask = {
  type: "deleteTask";
  value: TaskType
}

type Actions = ActionAddTask | ActionDeleteTask

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'addTask':
      state.tasks.push(action.value)
      return {...state, tasks: state.tasks};

    case 'deleteTask':
      state.tasks.filter((task) => task.id !== action.value.id)
      return {...state, tasks: state.tasks}

    default:
        return state
  }

}

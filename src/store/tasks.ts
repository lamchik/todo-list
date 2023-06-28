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
console.log(initialState, 'initialState')

export const reducer = (state = initialState, action: ActionAddTask) => {
  switch (action.type) {
    case 'addTask':
      console.log('state', state)
      state.tasks.push(action.value)
      return {...state, tasks: state.tasks}
    default:
        return state
  }

}

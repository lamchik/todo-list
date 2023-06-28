import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {reducer} from "./store/tasks";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root')!);
const store = createStore(reducer)

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);


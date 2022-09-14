import {createStore} from "redux";
import {rootReducers} from "./reducers";

/** Store = { taskList: [{id: 1, title: "Init task", isCompleted: false}] }
Store : attached to React - accessible from all components */
export const store = createStore(rootReducers)

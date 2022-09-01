import {createStore} from "redux";
import {rootReducers} from "./reducers";

// Store = {
// taskList: [{id: 1, title: "Init task", isCompleted: false}]
// }
// Store : attaché à React - accessible depuis tous les composants
export const store = createStore(rootReducers)
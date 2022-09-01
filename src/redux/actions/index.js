import {ADD_TASK, DELETE_TASK, TOGGLE_TASK} from "./actionsType";

// Actions : fonctions qui renvoient un objet - {type: MON_ACTION, payload: {DATA}}

// ADD_TASK
export function addTask(title) {
    return {
        type: ADD_TASK,
        payload: {
            title
        }
    }
}

// TOGGLE_TASK
export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: {id}
});

// DELETE_TASK
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {id}
});

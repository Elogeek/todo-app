// Selectors : Sélectionner une partie de notre store

export const getTasks = store => store.tasksList;

// export function getTasks(store) {
//     return store.tasksList;
// }
export const getCompletedTasks = store => store.tasksList.filter(task => task.isCompleted);
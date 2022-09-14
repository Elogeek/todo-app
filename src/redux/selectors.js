// Selectors : Select a part of our store
export const getTasks = store => store.tasksList;

// export function getTasks(store) {
//     return store.tasksList;
// }
export const getCompletedTasks = store => store.tasksList.filter(task => task.isCompleted);

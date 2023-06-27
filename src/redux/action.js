import { nanoid } from 'nanoid';
export const addTask = text => {
  return {
    type: 'task/addTask',
    payload: { id: nanoid(), toDo: text, checked: false },
  };
};
export const deleteTask = taskId => {
  return {
    type: 'task/deleteTask',
    payload: taskId,
  };
};
export const toggleCompleted = taskId => {
  return {
    type: 'task/toggleCompleted',
    payload: taskId,
  };
};
export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};

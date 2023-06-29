import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('task/addTask', text => {
  return {
    payload: { id: nanoid(), toDo: text, checked: false },
  };
});
export const deleteTask = createAction('task/deleteTask');
export const toggleCompleted = createAction('task/toggleCompleted');
export const setStatusFilter = createAction('filters/setStatusFilter');

// export const addTask = text => {
//   return {
//     type: 'task/addTask',
//     payload: { id: nanoid(), toDo: text, checked: false },
//   };
// };
// export const deleteTask = taskId => {
//   return {
//     type: 'task/deleteTask',
//     payload: taskId,
//   };
// };
// export const toggleCompleted = taskId => {
//   return {
//     type: 'task/toggleCompleted',
//     payload: taskId,
//   };
// };
// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };

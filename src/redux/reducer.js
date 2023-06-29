// import { createReducer } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
// import { addTask, deleteTask, setStatusFilter, toggleCompleted } from './action';
// import { statusFilters } from './constants';

// перед createSlice
// const taskInitialState = [
//   { id: 0, toDo: 'Learn HTML and CSS', checked: true },
//   { id: 1, toDo: 'Get good at JavaScript', checked: true },
//   { id: 2, toDo: 'Master React', checked: false },
//   { id: 3, toDo: 'Discover Redux', checked: false },
//   { id: 4, toDo: 'Build amazing apps', checked: false },
// ];

// const taskSlice = createSlice({
//   name: 'tasks',
//   initialState: taskInitialState,
//   reducers: {
//     addTask(state, action) {
//       state.push(action.payload);
//     },
// addTask: { // замість функції аддТаск передаємо об'єкт, з двома ключами:
// //редюсер, який буде функцією, змінювати стан. І пріпейр, який повертає об'єкт,
// // пейлоад, який піде в той стан.
// reducer(state, action) {
// state.push(action.payload);
// }
// prepare(toDo) {
// return {
// payload: {
// id: nanoid(),
// toDo: toDo
// checked: false,
// }
// }
// }
// }
//     deleteTask(state, action) {
//       const indx = state.findIndex(task => task.id === action.payload);
//       state.slice(indx, 1);
//     },
//     toggleCompleted(state, action) {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.checked = !task.checked;
//           break;
//         }
//       }
//     },
//   },
// });

// export const { addTask, deleteTask, toggleCompleted } = taskSlice.actions;
// const tasksReducer = taskSlice.reducers;

// export const taskReducer = createReducer(taskInitialState, {
//   [addTask]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteTask]: (state, action) => {
//     return state.filter(task => task.id !== action.payload);
//   },
//   [toggleCompleted]: (state, action) => {
//     return state.map(task => {
//       if (task.id !== action.payload) {
//         return task;
//       }
//       return { ...task, checked: !task.checked };
//     });
//   },
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     return {
//       ...state,
//       status: action.payload,
//     };
//   },
// });

// перед createACtion
// const taskInitialState = [
//   { id: 0, toDo: 'Learn HTML and CSS', checked: true },
//   { id: 1, toDo: 'Get good at JavaScript', checked: true },
//   { id: 2, toDo: 'Master React', checked: false },
//   { id: 3, toDo: 'Discover Redux', checked: false },
//   { id: 4, toDo: 'Build amazing apps', checked: false },
// ];

// export const taskReducer = (state = taskInitialState, action) => {
//   switch (action.type) {
//     case addTask.type: {
//       return [...state, action.payload];
//     }
//     case deleteTask.type: {
//       return state.filter(task => task.id !== action.payload);
//     }
//     case toggleCompleted.type: {
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, checked: !task.checked };
//       });
//     }
//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type: {
//       return {
//         ...state,
//         status: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

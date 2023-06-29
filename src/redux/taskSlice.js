import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksInitialState = [
  { id: 0, toDo: 'Learn HTML and CSS', checked: true },
  { id: 1, toDo: 'Get good at JavaScript', checked: true },
  { id: 2, toDo: 'Master React', checked: false },
  { id: 3, toDo: 'Discover Redux', checked: false },
  { id: 4, toDo: 'Build amazing apps', checked: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      // замість функції аддТаск передаємо об'єкт, з двома ключами:
      //редюсер, який буде функцією, змінювати стан. І пріпейр, який повертає об'єкт,
      // пейлоад, який піде в той стан.
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(toDo) {
        return {
          payload: {
            id: nanoid(),
            toDo: toDo,
            checked: false,
          },
        };
      },
    },
    // addTask(state, action) {
    //   state.push(action.payload);
    // },

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
    deleteTask(state, action) {
      const indx = state.findIndex(task => task.id === action.payload);
      state.slice(indx, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.checked = !task.checked;
          break;
        }
      }
    },
  },
});
console.log(tasksSlice);

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

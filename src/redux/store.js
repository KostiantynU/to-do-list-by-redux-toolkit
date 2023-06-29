import { configureStore } from '@reduxjs/toolkit';

import { tasksReducer } from './taskSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
// before Slice
// import { taskReducer, filtersReducer } from './reducer';

// export const store = configureStore({
//   reducer: {
//     tasks: taskReducer,
//     filters: filtersReducer,
//   },
// });

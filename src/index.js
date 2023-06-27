import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { TasksProvider } from 'components/myContext';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="to-do-list-by-redux">
      <Provider store={store}>
        <TasksProvider>
          <App />
        </TasksProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

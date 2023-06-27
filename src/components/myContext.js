import { createContext, useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { loadData, saveData } from 'service/API';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

const initialState = [
  { id: nanoid(), toDo: 'learn java' },
  { id: nanoid(), toDo: 'learn react' },
];

export const TasksProvider = ({ children }) => {
  const [taskArray, setTaskArray] = useState(() => loadData('toDosArray') ?? [...initialState]);
  const [inputValue, setInputValue] = useState('');
  const [completedTasks, setCompletedTasks] = useState(0);
  const [activeTasks, setActiveTasks] = useState(0);
  const [filteredStateArray, setFilteredStateArray] = useState(taskArray);

  useEffect(() => {
    saveData('toDosArray', taskArray);
    const completedTaskArray = taskArray.filter(el => el.checked);
    setCompletedTasks(completedTaskArray.length);
    const activeTasksArray = taskArray.filter(el => !el.checked);
    setActiveTasks(activeTasksArray.length);
    setFilteredStateArray(taskArray);
  }, [taskArray]);

  const addTask = taskObj => {
    setTaskArray(prevState => {
      if (prevState.find(el => el.id === taskObj.id)) {
        return alert('This task is already in list!');
      }
      return [...prevState, taskObj];
    });
  };

  const deleteTask = evt => {
    const filteredArr = taskArray.filter(el => el.id !== evt.target.dataset.id);
    setTaskArray([...filteredArr]);
  };

  const changeInputValue = evt => setInputValue(evt.target.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!evt.target.toDo.value.trim()) return alert('Enter something!');
    const newToDoObj = { id: nanoid(), toDo: evt.target.toDo.value.trim(), checked: false };
    addTask(newToDoObj);
    setInputValue('');
  };

  const handleChecked = ({ target }) => {
    const taskObj = taskArray.find(el => el.id === target.dataset.id);
    if (target.checked) {
      target.parentNode.classList.add('checked');
      taskObj.checked = true;
    } else {
      target.parentNode.classList.remove('checked');
      taskObj.checked = false;
    }
    const tempArray = [...taskArray];
    const indx = tempArray.indexOf(taskObj);
    tempArray.splice(indx, 1, taskObj);
    setTaskArray([...tempArray]);
  };

  const refs = {
    allBtn: document.getElementById('all'),
    activeBtn: document.getElementById('active'),
    completedBtn: document.getElementById('completed'),
  };

  const clickOnBtn = ({ target }) => {
    if (target.id === 'all') {
      target.classList.add('active');
      refs.activeBtn.classList.remove('active');
      refs.completedBtn.classList.remove('active');
      filterAll();
    } else if (target.id === 'active') {
      target.classList.add('active');
      refs.completedBtn.classList.remove('active');
      refs.allBtn.classList.remove('active');
      filterActive();
    } else if (target.id === 'completed') {
      target.classList.add('active');
      refs.allBtn.classList.remove('active');
      refs.activeBtn.classList.remove('active');
      filterCompleted();
    }
  };

  const filterAll = () => {
    // target.classList.toggle('active');
    const filteredAllArray = taskArray.map(el => el);
    setFilteredStateArray([...filteredAllArray]);
  };

  const filterActive = () => {
    const filteredActiveArray = taskArray.filter(el => !el.checked);
    setFilteredStateArray(filteredActiveArray);
  };

  const filterCompleted = () => {
    const filteredCompletedTask = taskArray.filter(el => el.checked);
    setFilteredStateArray(filteredCompletedTask);
  };

  return (
    <MyContext.Provider
      value={{
        taskArray,
        addTask,
        inputValue,
        changeInputValue,
        handleSubmit,
        deleteTask,
        handleChecked,
        activeTasks,
        completedTasks,
        filteredStateArray,
        clickOnBtn,
        filterAll,
        filterActive,
        filterCompleted,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

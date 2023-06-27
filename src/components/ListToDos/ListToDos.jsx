import { ListToDosStyled } from './ListToDos.styled';
import ListToDosItem from 'components/ListToDosItem/ListToDosItem';
// import { useMyContext } from 'components/myContext';
import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.checked);
    case statusFilters.completed:
      return tasks.filter(task => task.checked);
    default:
      return tasks;
  }
};

function ListToDos() {
  // const { filteredStateArray } = useMyContext();
  const tasks = useSelector(state => state.tasks);
  const statusFilter = useSelector(state => state.filters.status);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ListToDosStyled>
      {visibleTasks.map(({ id, toDo, checked }) => (
        <ListToDosItem key={id} id={id} toDo={toDo} checked={checked} />
      ))}
    </ListToDosStyled>
  );
}
export default ListToDos;

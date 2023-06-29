import { TaskInformationParagraph } from './TaskCounter.styled';
import { useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';

function TaskCounter() {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.checked) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <>
      <TaskInformationParagraph>Active: {count.active}</TaskInformationParagraph>
      <TaskInformationParagraph>Completed: {count.completed}</TaskInformationParagraph>
    </>
  );
}
export default TaskCounter;

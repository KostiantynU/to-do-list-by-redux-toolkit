// import { useMyContext } from 'components/myContext';
import { HeaderStyled, FilterButtonsNavigation } from './Header.styled';
import StatusFilter from 'components/StatusFilter/StatusFilter';
import TaskCounter from 'components/TaskCounter/TaskCounter';

function Header() {
  // const { activeTasks, completedTasks, clickOnBtn } = useMyContext();

  return (
    <HeaderStyled>
      <section>
        <h2>Tasks</h2>
        <TaskCounter />
      </section>
      <section>
        <h2>Filter by status</h2>
        <FilterButtonsNavigation>
          <StatusFilter />
        </FilterButtonsNavigation>
      </section>
    </HeaderStyled>
  );
}
export default Header;

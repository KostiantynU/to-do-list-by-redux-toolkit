// import { AllBtn, ActiveBtn, CompletedBtn } from './StatusFilter.styled';
import { Button } from 'components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/action';
import { statusFilters } from 'redux/constants';
import { getStatusFilter } from 'redux/selectors';

function StatusFilter() {
  const filter = useSelector(getStatusFilter);
  console.log(filter);
  console.log(statusFilters.all);
  console.log(filter === statusFilters.all);
  const dispatch = useDispatch();

  const handleFilter = filter => dispatch(setStatusFilter(filter));
  return (
    <>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilter(statusFilters.all)}
        allBtn="AllBtn"
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilter(statusFilters.active)}
        activeBtn="ActiveBtn"
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilter(statusFilters.completed)}
        completedBtn="CompletedBtn"
      >
        Completed
      </Button>
    </>
    // <>
    //   <AllBtn id={'all'} type="button" selected={filter === statusFilters.all} allBtn={'AllBtn'}>
    //     All
    //   </AllBtn>
    //   <ActiveBtn
    //     id="active"
    //     type="button"
    //     selected={filter === statusFilters.active}
    //     activeBtn={'ActiveBtn'}
    //   >
    //     Active
    //   </ActiveBtn>
    //   <CompletedBtn
    //     id={'completed'}
    //     type="button"
    //     selected={filter === statusFilters.completed}
    //     completed={'CompletedBtn'}
    //   >
    //     Completed
    //   </CompletedBtn>
    // </>
  );
}

export default StatusFilter;

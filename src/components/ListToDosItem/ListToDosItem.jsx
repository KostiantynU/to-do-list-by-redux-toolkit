// import { useMyContext } from 'components/myContext';
import PropTypes from 'prop-types';
import { ListToDosItemStyled, CheckboxStyled, LabelStyled } from './ListToDosItem.styled';
import { SubmitBtnStyled } from 'components/FilterForm/FilterForm.styled';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/action';

function ListToDosItem({ toDo, id, checked }) {
  // const { deleteTask, handleChecked } = useMyContext();

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));
  const handleToggle = () => dispatch(toggleCompleted(id));

  return (
    <ListToDosItemStyled>
      <LabelStyled className={checked ? 'checked' : ''}>
        <CheckboxStyled type="checkbox" onChange={handleToggle} data-id={id} checked={checked} />
        <p>{toDo} </p>
      </LabelStyled>
      <SubmitBtnStyled type="button" delete={'delete'} data-id={id} onClick={handleDelete}>
        Delete
      </SubmitBtnStyled>
    </ListToDosItemStyled>
  );
}
export default ListToDosItem;

ListToDosItem.propTypes = {
  toDo: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

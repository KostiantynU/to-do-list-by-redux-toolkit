import { FormStyled, InputStyled, SubmitBtnStyled } from './FilterForm.styled';
// import { useMyContext } from 'components/myContext';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/action';
function FilterForm() {
  // const { inputValue, changeInputValue, handleSubmit } = useMyContext();
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!evt.target.toDo.value.trim()) return alert('Enter something!');
    dispatch(addTask(evt.target.toDo.value.trim()));
    // const newToDoObj = { id: nanoid(), toDo: evt.target.toDo.value.trim(), checked: false };
    // addTask(newToDoObj);
    // setInputValue('');
    evt.target.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        name="toDo"
        type="text"
        placeholder="Enter a text..."
        // value={inputValue}
        // onChange={changeInputValue}
      />
      <SubmitBtnStyled type="submit">Add</SubmitBtnStyled>
    </FormStyled>
  );
}
export default FilterForm;

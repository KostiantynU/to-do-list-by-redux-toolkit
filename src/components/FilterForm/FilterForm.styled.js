import styled from '@emotion/styled';
export const FormStyled = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 1.5rem;
`;
export const InputStyled = styled.input`
  padding: 5px 10px;
  outline: none;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
`;

export const SubmitBtnStyled = styled.button`
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background: rgb(227, 227, 227);
  &:hover {
    background: ${props => (props.delete ? 'rgb(253, 67, 67)' : 'rgb(70, 230, 46)')};
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.6) inset;
    -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.6) inset;
    -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.6) inset;
  }
`;

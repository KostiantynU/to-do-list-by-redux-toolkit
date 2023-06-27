import { Container } from './Header/Header.styled';
import Header from './Header/Header';
import FilterForm from './FilterForm/FilterForm';
import ListToDos from './ListToDos/ListToDos';

export const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <FilterForm />
        <ListToDos />
      </main>
    </Container>
  );
};

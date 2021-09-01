import { render, screen, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Todo from './Todo';

describe('Todo', () => {
  beforeEach(() => {
    window.localStorage.removeItem('todoList');
  });

  it('Should have 0 list items when starting first time', () => {
    render(<Todo />);
    const cards = screen.queryAllByText('Item');
    expect(cards.length).toEqual(0);
  });
  it('Should add item', () => {
    render(<Todo />);
    fireEvent.change(screen.getByLabelText(/todo title/i), { target: { value: 'a' } });
    fireEvent.change(screen.getByLabelText(/describe your todo/i), { target: { value: 'b' } });
    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    const allTodoTitles = screen.queryAllByText('a');
    expect(allTodoTitles.length).toEqual(1);
  });
  it('Should remove item', () => {
    render(<Todo />);
    fireEvent.change(screen.getByLabelText(/todo title/i), { target: { value: 'a' } });
    fireEvent.change(screen.getByLabelText(/describe your todo/i), { target: { value: 'b' } });
    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    fireEvent.click(screen.getByRole('button', { name: /delete/i }));
    const allTodoTitles = screen.queryAllByText('a');
    expect(allTodoTitles.length).toEqual(0);
  });
  it('Should not add item if no title', () => {
    render(<Todo />);
    fireEvent.change(screen.getByLabelText(/describe your todo/i), { target: { value: 'b' } });
    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    const allTodoDescriptions = screen.queryAllByText('b');
    expect(allTodoDescriptions.length).toEqual(0);
  });
});

describe('Form', () => {
  it('Renders Form without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Form should have 2 input fields', () => {
    render(<Form />);
    const inputFields = screen.getAllByRole('textbox');
    expect(inputFields.length).toEqual(2);
  });
});

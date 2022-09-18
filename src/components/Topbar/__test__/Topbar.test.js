import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Topbar from '../index';

const mockedSetTodo = jest.fn();

describe('Topbar', () => {
  it('should render Topbar', () => {
    render(
      <Provider store={store}>
        <Topbar handleSidebar={mockedSetTodo} showSidebar={true} />
      </Provider>,
    );
    const Username = screen.getByText(/John Doe/i);
    expect(Username).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import SingleCardPerformance from '../SingleCardPerformance';

import store from '../../../redux/store';

describe('Performance', () => {
  it('should render single card performance', () => {
    const data = {
      id: 1,
      title: 'Sales',
      price: '1M €',
      picture: '/static/images/cards-icons/shopping-bag.png',
      background: '#FFEDED',
    };

    render(
      <Provider store={store}>
        <SingleCardPerformance
          id={data.id}
          background={data.background}
          picture={data.picture}
          price={data.price}
          title={data.title}
        />
      </Provider>,
    );
    const divElement = screen.getByText(/Sales/i);
    expect(divElement).toBeInTheDocument();
  });
});

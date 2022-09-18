import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import SingleInsight from '../Leftside/SingleInsight';

import store from '../../../redux/store';

describe('Insights', () => {
  it('should render single card Insight', () => {
    const data = {
      id: 1,
      title: 'Mobile',
      description: 'Most used device',
      picture: '/static/images/cards-icons/smartphone.png',
      background: '#FFEDED',
    };

    render(
      <Provider store={store}>
        <SingleInsight
          id={data.id}
          title={data.title}
          description={data.description}
          background={data.background}
          picture={data.picture}
        />
      </Provider>,
    );
    const divElement = screen.getByText(/Mobile/i);
    expect(divElement).toBeInTheDocument();
  });
});

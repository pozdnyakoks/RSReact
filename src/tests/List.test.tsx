import { render, screen } from '@testing-library/react';

import List from '../components/List/List';
import { BrowserRouter } from 'react-router-dom';
import { mockData } from '../utils/mockData';
import store from '../store/store';
import { Provider } from 'react-redux';

describe('List Component', () => {
  it('displays an appropriate message if no cards are present', () => {
    render(
      <BrowserRouter>
        <List data={[]} isLoading={false} isError={undefined} />
      </BrowserRouter>
    );
    const emptyElement = screen.getByText('Sorry, nothing is here :(');
    expect(emptyElement).toBeInTheDocument();
  });
  it('renders the specified number of cards', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <List data={mockData} isLoading={false} isError={undefined} />
        </Provider>
      </BrowserRouter>
    );
    const items = container.getElementsByClassName('list-item');

    expect(items).toHaveLength(mockData.length);
  });
});

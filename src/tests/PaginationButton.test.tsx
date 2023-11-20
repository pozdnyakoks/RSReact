import { BrowserRouter } from 'react-router-dom';
import PaginationButtonMock from '../utils/PaginationButtonMock';

import { render, fireEvent, screen } from '@testing-library/react';
import store from '../store/store';
import { Provider } from 'react-redux';

describe('Pagination component', () => {
  it('component updates URL query parameter when page changes', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PaginationButtonMock />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('2'));
    const searchParams = new URLSearchParams(window.location.search);
    expect(searchParams.get('page') === '2');
  });
});

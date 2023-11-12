import { BrowserRouter } from 'react-router-dom';
import PaginationButtonMock from '../utils/PaginationButtonMock';

import { render, fireEvent, screen } from '@testing-library/react';

describe('Pagination component', () => {
  it('component updates URL query parameter when page changes', () => {
    render(
      <BrowserRouter>
        <PaginationButtonMock />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('2'));
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.get('page') === '2';
  });
});

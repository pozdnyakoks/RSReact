import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ModalItemMock from '../utils/ModalItemMock';
import store from '../store/store';
import { Provider } from 'react-redux';

describe('Card component', () => {
  it('loading indicator is displayed while fetching data', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ModalItemMock />
        </Provider>
      </BrowserRouter>
    );
    const loader = screen.getByAltText('loader');
    expect(loader).toHaveClass('loader');
  });
});

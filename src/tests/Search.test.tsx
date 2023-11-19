import { render, fireEvent, screen } from '@testing-library/react';
import store from '../store/store';
import { Provider } from 'react-redux';
import Search from '../components/Search/Search';

const getValue = () => localStorage.getItem('searchValue') || '';

describe('Search component', () => {
  it('saves the entered value to local storage when the Search button is clicked', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Enter product name');
    const searchButton = screen.getByText('Search');
    fireEvent.change(inputElement, { target: { value: 'Test Product' } });
    fireEvent.click(searchButton);
    expect(localStorage.getItem('searchItem') === 'Test Product');
  });

  it('retrieves the value from the local storage upon mounting', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input: HTMLInputElement =
      screen.getByPlaceholderText('Enter product name');
    expect(getValue()).toStrictEqual(input.value);
  });
});

// import { render, fireEvent, screen } from '@testing-library/react';

// import SearchMock from '../utils/SearchMock';

// const getValue = () => localStorage.getItem('searchItem') || '';

// describe('Search component', () => {
//   it('saves the entered value to local storage when the Search button is clicked', () => {
//     render(<SearchMock />);
//     const inputElement = screen.getByPlaceholderText('Enter product name');
//     const searchButton = screen.getByText('Search');
//     fireEvent.change(inputElement, { target: { value: 'Test Product' } });
//     fireEvent.click(searchButton);
//     expect(localStorage.getItem('searchItem') === 'Test Product');
//   });

//   it('retrieves the value from the local storage upon mounting', () => {
//     render(<SearchMock />);
//     const input: HTMLInputElement =
//       screen.getByPlaceholderText('Enter product name');
//     expect(getValue()).toStrictEqual(input.value);
//   });
// });

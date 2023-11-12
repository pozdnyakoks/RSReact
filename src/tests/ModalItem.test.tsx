import { render } from '@testing-library/react';

// import SearchItem from '../components/SearchItem/SearchItem';
// import { BrowserRouter } from 'react-router-dom';
import ModalItem from '../components/ModalItem/ModalItem';

describe('Card component', () => {
  it('enders the relevant card data', () => {
    render(<ModalItem />);
    // const titleElement = screen.getByText('Card 1');
    // expect(titleElement).toBeInTheDocument();
    // const descElement = screen.getByText('Description 1');
    // expect(descElement).toBeInTheDocument();
  });
});

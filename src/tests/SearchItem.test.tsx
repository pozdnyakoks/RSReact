// import { render, screen, fireEvent } from '@testing-library/react';

// import SearchItem from '../components/SearchItem/SearchItem';
// import { BrowserRouter } from 'react-router-dom';
// import { mockData } from '../utils/mockData';
// import ModalItemMock from '../utils/ModalItemMock';

// const cardInfo = mockData[0];

// describe('Search Item', () => {
//   it('enders the relevant card data', () => {
//     render(
//       <BrowserRouter>
//         <SearchItem
//           title={cardInfo.title}
//           description={cardInfo.description}
//           thumbnail={cardInfo.thumbnail}
//           id={cardInfo.id}
//         />
//       </BrowserRouter>
//     );
//     const titleElement = screen.getByText('Card 1');
//     expect(titleElement).toBeInTheDocument();
//     const descElement = screen.getByText('Description 1');
//     expect(descElement).toBeInTheDocument();
//   });
//   it('clicking on a card opens a detailed card component', () => {
//     const { container } = render(
//       <BrowserRouter>
//         <ModalItemMock />
//         <SearchItem
//           title={cardInfo.title}
//           description={cardInfo.description}
//           thumbnail={cardInfo.thumbnail}
//           id={cardInfo.id}
//         />
//       </BrowserRouter>
//     );
//     const modal = container.getElementsByClassName('modal')[0];
//     fireEvent.click(screen.getByText(cardInfo.title));

//     expect(modal).not.toHaveClass('none');
//   });
// });

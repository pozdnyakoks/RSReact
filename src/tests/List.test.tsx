import { render } from '@testing-library/react';

import List from '../components/List/List';
import { BrowserRouter } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Description 1',
    thumbnail: 'thumbnail1.jpg',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Description 2',
    thumbnail: 'thumbnail2.jpg',
  },
];

describe('List Component', () => {
  it('renders the specified number of cards', () => {
    const { container } = render(
      <BrowserRouter>
        <List data={mockData} isLoading={false} isError={false} />
      </BrowserRouter>
    );
    const items = container.getElementsByClassName('list-item');

    expect(items).toHaveLength(mockData.length);
  });
});

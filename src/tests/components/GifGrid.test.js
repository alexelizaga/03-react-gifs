import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test <GifGrid />', () => {

  const category = 'One punch';

  test('should render <GifGrid /> correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const tree = renderer
      .create(<GifGrid category={category} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should show items when its load images', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://www.test1.com',
        title: 'Title1'
      },
      {
        id: '123',
        url: 'https://www.test2.com',
        title: 'Title2'
      },
    ]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    render(<GifGrid category={category} />);

    const p = screen.queryByTestId('GifGridLoading');
    expect(p).not.toBeInTheDocument();

    const GifGridItems = screen.getAllByTestId('GifGridItem');
    expect(GifGridItems.length).toBe(gifs.length);
  });

});
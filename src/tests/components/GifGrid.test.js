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
    const gifs = [{
      id: 'ABC',
      url: 'https://www.test.com',
      title: 'Title'
    }]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    // render(<GifGrid category={category} />);
    const tree = renderer
      .create(<GifGrid category={category} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
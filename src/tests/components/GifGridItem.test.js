import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import { GifGridItem } from '../../components/GifGridItem';

describe('Test <GifGridItem />', () => {

  const props = {
    title: 'title',
    url: 'https://www.example.com'
  }

  test('should render <GifGridItem /> correctly', () => {
    const tree = renderer
      .create(<GifGridItem {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have a parragraph with the title', () => {
    render(<GifGridItem {...props} />);

    expect(screen.getByTestId('GifGridItemTitle').textContent.trim()).toBe(props.title);
  });

  test('should have img with src and alt', () => {
    render(<GifGridItem {...props} />);

    const img = screen.getByTestId('GifGridItemImg');
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toBe(props.url);
    expect(img.getAttribute('alt')).toBe(props.title);
  });

  test('should have animate__fadeIn', () => {
    render(<GifGridItem {...props} />);

    const div = screen.getByTestId('GifGridItem');
    expect(div.className.includes('animate__fadeIn')).toBeTruthy();
  });

});
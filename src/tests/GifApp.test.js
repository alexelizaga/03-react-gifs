import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import { GifApp } from '../GifApp';

describe('Test <GifApp />', () => {

  test('should render <GifApp /> correctly', () => {
    const tree = renderer
      .create(<GifApp />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should show a categories list', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    render( <GifApp defaultCategories={categories} /> );

    const GifGridsTitle = screen.getAllByTestId('GifGridTitle');
    expect(GifGridsTitle.length).toBe(categories.length);

    const GifGrids = screen.getAllByTestId('GifGrid');
    expect(GifGrids.length).toBe(categories.length);
  });

});
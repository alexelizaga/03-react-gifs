import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import { AddCategory } from '../../components/AddCategory';

describe('Test <AddCategory />', () => {

  test('should render <AddCategory /> correctly', () => {
    const tree = renderer
      .create(<AddCategory setCategories={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddCategory } from '../../components/AddCategory';

describe('Test <AddCategory />', () => {

  test('should render <AddCategory /> correctly', () => {
    const tree = renderer
      .create(<AddCategory setCategories={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should change text input', () => {
    render(<AddCategory setCategories={() => {}} />);

    const input = screen.getByTestId('AddCategoryInput');
    const value = 'One Punch';
    fireEvent.change(input, {target: {value: value}});
  
    expect(input.value).toBe(value);
  });

  test('should not post information on submit', () => {
    const setCategories = jest.fn();
    render(<AddCategory setCategories={setCategories} />);

    const form = screen.getByTestId('AddCategoryForm');
    fireEvent.submit(form);

    expect(setCategories).not.toBeCalled();
  });

  test('should post information on submit', () => {
    const setCategories = jest.fn();
    render(<AddCategory setCategories={setCategories} />);

    const input = screen.getByTestId('AddCategoryInput');
    const value = 'One Punch';
    fireEvent.change(input, {target: {value: value}});

    const form = screen.getByTestId('AddCategoryForm');
    fireEvent.submit(form);

    expect(setCategories).toBeCalledTimes(1);
  });

  test('should call setCategories and clean text box', () => {
    const setCategories = jest.fn();
    render(<AddCategory setCategories={setCategories} />);

    const input = screen.getByTestId('AddCategoryInput');
    const value = 'One Punch';
    fireEvent.change(input, {target: {value: value}});

    const form = screen.getByTestId('AddCategoryForm');
    fireEvent.submit(form);

    expect(setCategories).toBeCalledTimes(1);
    expect(setCategories).toBeCalledWith(expect.any(Function));
    expect(input.value).toBe('');
  });

});
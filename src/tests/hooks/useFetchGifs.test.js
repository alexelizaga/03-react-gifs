import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';


import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test useFetchGifs', () => {

  test('should return initial state', () => {
    const { result } = renderHook( () => useFetchGifs('One Punch') );
    const { data, loading } = result.current;

    expect( data ).toEqual([]);
    expect( loading ).toBeTruthy();
  });

  test('should return update state', async () => {
    
  });

});

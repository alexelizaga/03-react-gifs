import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';


import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test useFetchGifs', () => {

  test('should return initial state', () => {
    const { result } = renderHook( () => useFetchGifs('One Punch') );
    const { data, loading } = result.current;

    expect( data ).toEqual([]);
    expect( loading ).toBeTruthy();
  });

  test('should return new state', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
    await waitForNextUpdate();
    
    const { data, loading } = result.current;
    expect( data.length ).toBe(10);
    expect( loading ).toBeFalsy();
  });

});

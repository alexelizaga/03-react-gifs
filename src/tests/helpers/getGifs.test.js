import { getGifs } from "../../helpers/getGifs";

describe('Test getGifs', () => {

  test('should get 10 elements', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBe(10);
  });

  test('should not get elements', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });

});
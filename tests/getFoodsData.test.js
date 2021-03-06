import { mockFoodData } from './fixtures/mockFoodData.js';
import { getFoodsData } from '../js/getFoodsData.js';

describe('testing api', () => {
  const ENDPOINT = '../js/service/foodData.json';

  beforeEach(() => {
    fetch.resetMocks();
  });

  test('it calls foodData.json with the rigth url', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockFoodData));

    // assert on the response
    await getFoodsData(ENDPOINT);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(ENDPOINT);

    // Other expects: assert on the times called and arguments given to fetch
    // expect(fetch.mock.calls.length).toEqual(1);
    // expect(fetch.mock.calls[0][0]).toEqual(ENDPOINTGOOD);
  });

  test('it returns null when fetch fails', async () => {
    const error = new Error('error');
    fetch.mockReject(error);

    const result = await getFoodsData(ENDPOINT);

    expect(result).toEqual(error);
  });

  test('it calls foodData and returns data', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockFoodData));

    const result = await getFoodsData(ENDPOINT);

    expect(result).toEqual(mockFoodData);
  });
});

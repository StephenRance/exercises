import fetchMock from 'jest-fetch-mock';
import getExercises from './getExercises';

beforeAll(() => {
  fetchMock.enableMocks();
});

beforeEach(() => {
  fetch.resetMocks();
});

const response = {
  exercises: [
    {
      bodyAreas: ['Back', 'Biceps'],
      name: 'Pull Up',
    },
  ],
};

describe('getExercises', () => {
  it('calls the api endpoint once', async () => {
    fetch.mockResponseOnce(JSON.stringify(response));

    await getExercises();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/',
      { next: { revalidate: 3600 } }
    );
  });

  describe('when the api call succeeds', () => {
    it('should return an array of exercises', async () => {
      fetch.mockResponseOnce(JSON.stringify(response));

      const exercises = await getExercises();

      expect(exercises).toEqual(response.exercises);
    });
  });

  describe('when the api call fails', () => {
    it('should return an empty array', async () => {
      fetch.mockReject(() => Promise.reject('Rejected.'));

      const exercises = await getExercises();

      expect(exercises).toEqual([]);
    });
  });
});

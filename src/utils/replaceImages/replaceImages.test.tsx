import fetchMock from 'jest-fetch-mock';
import replaceImages from './replaceImages';

beforeAll(() => {
  fetchMock.enableMocks();
});

beforeEach(() => {
  fetch.resetMocks();
});

const femaleImg =
  'https://cdni.gs.lightning-e.com/media/5c0e6814ee0147fd16ef61d2-femalebbcurlsthumbnail.jpg';
const maleImg =
  'https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malebbcurlthumbnail.jpg';
const name = 'Barbell Bicep Curl';

describe('replaceImages', () => {
  describe('when both the female images are provided', () => {
    it('should fetch once', async () => {
      await replaceImages([
        {
          female: {
            image: femaleImg,
          },
          male: {
            image: maleImg,
          },
          name,
        },
      ]);

      expect(fetch).toHaveBeenCalledTimes(2);
    });
  });

  describe('when only the female image is provided', () => {
    it('should fetch once', async () => {
      await replaceImages([
        {
          female: {
            image: femaleImg,
          },
          name,
        },
      ]);

      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('when only the male image is provided', () => {
    it('should fetch once', async () => {
      await replaceImages([
        {
          male: {
            image: maleImg,
          },
          name,
        },
      ]);

      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('when neither male or female images are provided', () => {
    it('should not fetch', async () => {
      await replaceImages([
        {
          name,
        },
      ]);

      expect(fetch).toHaveBeenCalledTimes(0);
    });
  });
});

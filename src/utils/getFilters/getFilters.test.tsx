import getFilters from './getFilters';

describe('getFilters', () => {
  describe('when an array of exercises is provided', () => {
    it('should return a formatted array of filters', () => {
      const filters = getFilters([
        {
          bodyAreas: ['Back', 'Biceps'],
          name: 'Pull Up',
        },
        {
          bodyAreas: ['Arms', 'Biceps'],
          name: 'Barbell Bicep Curl',
        },
        {
          bodyAreas: ['Arms', 'Triceps'],
          name: 'Dumbbell Skullcrushers',
        },
      ]);

      expect(filters).toEqual(['Arms', 'Back', 'Biceps', 'Triceps']);
    });
  });

  describe('when an incomplete array of exercises is provided', () => {
    describe('and at least one of the exercises contain body areas', () => {
      it('should return a partial array', () => {
        const filters = getFilters([
          {
            bodyAreas: ['Back', 'Biceps'],
            name: 'Pull Up',
          },
          {
            name: 'Barbell Bicep Curl',
          },
          {
            name: 'Dumbbell Skullcrushers',
          },
        ]);

        expect(filters).toEqual(['Back', 'Biceps']);
      });
    });

    describe('and none of the exercises contain body areas', () => {
      it('should return an empty array', () => {
        const filters = getFilters([
          {
            name: 'Pull Up',
          },
          {
            name: 'Barbell Bicep Curl',
          },
          {
            name: 'Dumbbell Skullcrushers',
          },
        ]);

        expect(filters).toEqual([]);
      });
    });
  });

  describe('when an array of exercises is not provided', () => {
    it('should return an empty array', () => {
      const filters = getFilters();

      expect(filters).toEqual([]);
    });
  });
});

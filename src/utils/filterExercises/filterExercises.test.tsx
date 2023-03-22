import filterExercises from './filterExercises';

const exercises = [
  {
    name: 'Pull Up',
    bodyAreas: ['Back', 'Biceps'],
  },
  {
    name: 'Barbell Bicep Curl',
    bodyAreas: ['Arms', 'Biceps'],
  },
  {
    name: 'Dumbbell Skullcrushers',
    bodyAreas: ['Arms', 'Triceps'],
  },
  {
    name: 'Tricep Pushdown',
    bodyAreas: ['Arms', 'Triceps'],
  },
  {
    name: 'Hammer Curls',
    bodyAreas: ['Arms', 'Biceps'],
  },
];

describe('filterExercises', () => {
  describe('when both of the queries and exercises arguments are populated arrays', () => {
    describe('and there is a single query', () => {
      it('should return the correct array of exercises', () => {
        const results = filterExercises(['Triceps'], exercises);

        expect(results).toEqual([
          {
            name: 'Dumbbell Skullcrushers',
            bodyAreas: ['Arms', 'Triceps'],
          },
          {
            name: 'Tricep Pushdown',
            bodyAreas: ['Arms', 'Triceps'],
          },
        ]);
      });
    });

    describe('and there are multiple queries', () => {
      it('should return the correct array of exercises', () => {
        const results = filterExercises(['Back', 'Biceps'], exercises);

        expect(results).toEqual([
          {
            bodyAreas: ['Back', 'Biceps'],
            name: 'Pull Up',
          },
        ]);
      });
    });
  });

  describe('when the queries argument is the only populated array', () => {
    it('should return an empty array', () => {
      const results = filterExercises(['Triceps'], []);

      expect(results).toEqual([]);
    });
  });

  describe('when the queries argument is not provided', () => {
    it('should return an empty array', () => {
      const results = filterExercises(null, []);

      expect(results).toEqual([]);
    });
  });

  describe('when the exercises argument is the only populated array', () => {
    it('should return the original array of exercises', () => {
      const results = filterExercises([], exercises);

      expect(results).toEqual(exercises);
    });
  });

  describe('when the exercises argument is not provided', () => {
    it('should return an empty array', () => {
      const results = filterExercises([], null);

      expect(results).toEqual([]);
    });
  });

  describe('when both of the queries and exercises arguments are an empty array', () => {
    it('should return an empty array', () => {
      const results = filterExercises([], []);

      expect(results).toEqual([]);
    });
  });

  describe('when neither of the queries or exercises arguments are provided', () => {
    it('should return an empty array', () => {
      const results = filterExercises();

      expect(results).toEqual([]);
    });
  });
});

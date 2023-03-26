import { BodyArea, Exercise } from '@/types';

const getFilters = (exercises: Exercise[]): BodyArea[] => {
  let filters: BodyArea[] = [];

  try {
    exercises.map((exercise) => {
      exercise.bodyAreas.map((bodyAreas) => {
        filters.push(bodyAreas);
      });
    });
  } catch (err: any) {
    console.log('Cannot get filters.');
    console.log(err?.message);
  }

  const uniqueFilters: any = new Set(filters);
  const sortedFilters = [...uniqueFilters].sort();

  return sortedFilters;
};

export default getFilters;

import { BodyArea, Exercise } from '@/types';

const filterExercises = (
  filters: BodyArea[],
  exercises: Exercise[]
): Exercise[] => {
  try {
    const data = exercises.filter((exercise) =>
      filters.every((filter) => exercise.bodyAreas.includes(filter))
    );

    return data;
  } catch (err: any) {
    console.log('Cannot filter exercises');
    console.log(err?.message);

    return [];
  }
};

export default filterExercises;

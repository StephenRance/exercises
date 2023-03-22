import { Exercise } from '@/types';

const getExercises = async (): Promise<Exercise[]> => {
  try {
    const res = await fetch(
      'https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/',
      { next: { revalidate: 3600 } }
    );
    const { exercises } = await res.json();

    return exercises;
  } catch (err: any) {
    console.log('Cannot get exercises.');
    console.log(err?.message);

    return [];
  }
};

export default getExercises;

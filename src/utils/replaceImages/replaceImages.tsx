import { Exercise } from '@/types';

const replaceImages = async (exercises: Exercise[]): Promise<Exercise[]> => {
  exercises.map((exercise) => {
    const { female, male, name } = exercise;

    const placeholder = 'https://placehold.co/365';
    const placeholderFemale = '/dc679c/fff?font=roboto';
    const placeholderMale = '/007db5/fff?font=roboto';
    const placeholderName = name ? `&text=${name.replace(/ /g, '+')}` : '';

    if (female?.image) {
      try {
        const res: any = fetch(female.image);

        if (!res.ok) {
          exercise.female.image = `${
            placeholder + placeholderFemale + placeholderName
          }`;
        }
      } catch (err: any) {
        console.log('Cannot replace female image.');
        console.log(err?.message);
      }
    }

    if (male?.image) {
      try {
        const res: any = fetch(male.image);

        if (!res.ok) {
          exercise.male.image = `${
            placeholder + placeholderMale + placeholderName
          }`;
        }
      } catch (err: any) {
        console.log('Cannot replace male image.');
        console.log(err?.message);
      }
    }
  });

  return exercises;
};

export default replaceImages;

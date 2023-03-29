import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Card from './Card';

const exercise = {
  female: {
    image:
      'https://cdni.gs.lightning-e.com/media/5c0e6814ee0147fd16ef61d2-femalebbcurlsthumbnail.jpg',
  },
  male: {
    image:
      'https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malebbcurlthumbnail.jpg',
  },
  name: 'Barbell Bicep Curl',
};

describe('Card', () => {
  describe('when there are additional props provided', () => {
    it('should render the component with them applied', () => {
      const { container } = render(
        <Card
          className="test"
          female={exercise.female.image}
          male={exercise.male.image}
          name={name}
        />
      );

      expect(container.querySelector('.card')).toHaveClass('test');
    });
  });
});

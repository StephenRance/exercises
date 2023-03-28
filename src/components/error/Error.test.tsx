import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Error from './Error';

describe('Error', () => {
  describe('when there are additional props provided', () => {
    it('should render the component with them applied', () => {
      const { container } = render(<Error className="test" />);

      expect(container.querySelector('.error')).toHaveClass('test');
    });
  });
});

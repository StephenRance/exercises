import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  describe('when there are additional props provided', () => {
    it('should render the component with them applied', () => {
      const { container } = render(<Header className="test" />);

      expect(container.querySelector('.header')).toHaveClass('test');
    });
  });
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Filter from './Filter';

describe('Filter', () => {
  describe('when there are children provided', () => {
    it('should render the component with a single child', () => {
      const { container } = render(
        <Filter>
          <span></span>
        </Filter>
      );

      expect(container.querySelectorAll('span')).toHaveLength(1);
    });

    it('should render the component with multiple children', () => {
      const { container } = render(
        <Filter>
          <span></span>
          <span></span>
          <span></span>
        </Filter>
      );

      expect(container.querySelectorAll('span')).toHaveLength(3);
    });
  });

  describe('when there are no children provided', () => {
    it('should not render the component', () => {
      const { container } = render(<Filter />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('when there are additional props provided', () => {
    it('should render the component with them applied', () => {
      const { container } = render(
        <Filter className="test">
          <span></span>
        </Filter>
      );

      expect(container.querySelector('.filter')).toHaveClass('test');
    });
  });
});

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Filters from './Filters';

describe('Filters', () => {
  describe('when there are children provided', () => {
    it('should render the component with a single child', () => {
      const { container } = render(
        <Filters>
          <li></li>
        </Filters>
      );

      expect(container.querySelectorAll('li')).toHaveLength(1);
    });

    it('should render the component with multiple children', () => {
      const { container } = render(
        <Filters>
          <li></li>
          <li></li>
          <li></li>
        </Filters>
      );

      expect(container.querySelectorAll('li')).toHaveLength(3);
    });
  });

  describe('when there are no children provided', () => {
    it('should not render the component', () => {
      const { container } = render(<Filters />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('when there are additional props provided', () => {
    it('should render the component with them applied', () => {
      const { container } = render(
        <Filters className="test">
          <li></li>
        </Filters>
      );

      expect(container.querySelector('.filters')).toHaveClass('test');
    });
  });
});

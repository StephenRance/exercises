import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Exercises from './Exercises';

describe('Exercises', () => {
  describe('when there are children provided', () => {
    it('should render the component with a single child', () => {
      const { container } = render(
        <Exercises>
          <article></article>
        </Exercises>
      );

      expect(container.querySelectorAll('article')).toHaveLength(1);
    });

    it('should render the component with multiple children', () => {
      const { container } = render(
        <Exercises>
          <article></article>
          <article></article>
          <article></article>
        </Exercises>
      );

      expect(container.querySelectorAll('article')).toHaveLength(3);
    });
  });

  describe('when there are no children provided', () => {
    it('should not render the component', () => {
      const { container } = render(<Exercises />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('when there are additional props provided', () => {
    it('should render the component with them applied', () => {
      const { container } = render(
        <Exercises className="test">
          <article></article>
        </Exercises>
      );

      expect(container.querySelector('.exercises')).toHaveClass('test');
    });
  });
});

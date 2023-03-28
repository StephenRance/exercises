import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Main from './Main';

describe('Main', () => {
  describe('when there are children provided', () => {
    it('should render the component with a single child', () => {
      const { container } = render(
        <Main>
          <div></div>
        </Main>
      );

      expect(container.querySelectorAll('div')).toHaveLength(1);
    });

    it('should render the component with multiple children', () => {
      const { container } = render(
        <Main>
          <div></div>
          <div></div>
          <div></div>
        </Main>
      );

      expect(container.querySelectorAll('div')).toHaveLength(3);
    });
  });

  describe('when there are no children provided', () => {
    it('should not render the component', () => {
      const { container } = render(<Main />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('when there are additional props provided', () => {
    it('should render the component with them applied', () => {
      const { container } = render(
        <Main className="test">
          <li></li>
        </Main>
      );

      expect(container.querySelector('.main')).toHaveClass('test');
    });
  });
});

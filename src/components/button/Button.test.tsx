import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  describe('when the label prop is provided', () => {
    it('should render the component with the correct text', () => {
      const { container } = render(<Button label="Test" />);

      expect(container.querySelector('.btn')).toHaveTextContent('Test');
    });
  });

  describe('when the label prop is not provided', () => {
    it('should not render', () => {
      const { container } = render(<Button />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('when there are additional props provided', () => {
    it('should render the component with them applied', () => {
      const onClick = jest.fn();
      const { container } = render(<Button label="Test" onClick={onClick} />);

      fireEvent.click(container.querySelector('.btn'));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the active prop is provided', () => {
    it('should render the component with the correct class', () => {
      const { container } = render(<Button isActive label="Test" />);

      expect(container.querySelector('.btn')).toHaveClass('is-active');
    });
  });

  describe('when the active prop is not provided', () => {
    it('should not render the component with the correct class', () => {
      const { container } = render(<Button label="Test" />);

      expect(container.querySelector('.btn')).not.toHaveClass('is-active');
    });
  });

  describe('when the theme prop is provided', () => {
    it('should render the component with the correct theme', () => {
      const { container } = render(<Button label="Test" theme="secondary" />);

      expect(container.querySelector('.btn')).not.toHaveClass('btn--primary');
      expect(container.querySelector('.btn')).toHaveClass('btn--secondary');
    });
  });

  describe('when the theme prop is not provided', () => {
    it('should render the component with the default theme', () => {
      const { container } = render(<Button label="Test" />);

      expect(container.querySelector('.btn')).toHaveClass('btn--primary');
      expect(container.querySelector('.btn')).not.toHaveClass('btn--secondary');
    });
  });

  describe('when the variant prop is provided', () => {
    it('should render the component with the correct variant', () => {
      const { container } = render(<Button label="Test" variant="thin" />);

      expect(container.querySelector('.btn')).not.toHaveClass('btn--thick');
      expect(container.querySelector('.btn')).toHaveClass('btn--thin');
    });
  });

  describe('when the variant prop is not provided', () => {
    it('should render the component with the default variant', () => {
      const { container } = render(<Button label="Test" />);

      expect(container.querySelector('.btn')).toHaveClass('btn--thick');
      expect(container.querySelector('.btn')).not.toHaveClass('btn--thin');
    });
  });
});

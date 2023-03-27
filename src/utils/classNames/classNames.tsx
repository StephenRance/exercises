type ClassList = (string | undefined)[];

const classNames = (classList: ClassList): string => {
  if (!Array.isArray(classList)) {
    return classList;
  }

  return classList.join(' ').trim();
};

export default classNames;

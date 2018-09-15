import customComponentTheme from './CustomComponent';

export default () => {
  const theme = {
    'MyTheme.CustomComponent': {
      ...customComponentTheme()
    },
  }
  return theme;
};

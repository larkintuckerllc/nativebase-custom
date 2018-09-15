import customComponentTheme from './CustomComponent';

export default () => {
  const theme = {
    'My.CustomComponent': {
      ...customComponentTheme()
    },
  }
  return theme;
};

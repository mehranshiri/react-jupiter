export const getColorFromName = (theme, color) => {
  switch (color) {
    case 'red':
      return theme.colors.red600;
    case 'green':
      return theme.colors.green600;
    case 'blue':
      return theme.colors.blue600;
    case 'yellow':
      return theme.colors.yellow600;
    case 'darkBlue':
      return theme.colors.darkBlue600;
    case 'white':
      return theme.colors.white;
    case 'light':
      return theme.colors.riverBed;
    default:
    case 'default':
      return theme.defaultColor;
  }
};

export const getHoverColorFromName = (theme, color) => {
  switch (color) {
    case 'red':
      return theme.colors.red400;
    case 'green':
      return theme.colors.green400;
    case 'blue':
      return theme.colors.blue400;
    case 'yellow':
      return theme.colors.yellow400;
    case 'darkBlue':
      return theme.colors.darkBlue400;
    default:
    case 'default':
      return theme.defaultColor;
  }
};

export const getFocusColorFromName = (theme, color) => {
  switch (color) {
    case 'red':
      return theme.colors.red800;
    case 'green':
      return theme.colors.green800;
    case 'blue':
      return theme.colors.blue800;
    case 'yellow':
      return theme.colors.yellow800;
    case 'darkBlue':
      return theme.colors.darkBlue800;
    default:
    case 'default':
      return theme.defaultColor;
  }
};

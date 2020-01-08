export function setFontColor(styleType, backgroundColor) {
  switch (styleType) {
    case 'secondary':
      return backgroundColor;
    case 'tertiary':
      return 'darkBlue';
    default:
      return 'white';
  }
}

export function getRGBFromName(colorName) {
  switch (colorName) {
    case 'red':
      return '255, 93, 93';
    case 'green':
      return '66, 212, 115';
    case 'yellow':
      return '255, 211, 36';
    case 'blue':
      return '0, 149, 219';
    case 'darkBlue':
    default:
      return '19, 42, 62';
  }
}

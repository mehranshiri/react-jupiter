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

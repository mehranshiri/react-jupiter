function setFontColor(styleType, mainColor) {
  switch (styleType) {
    case 'secondary':
      return mainColor;
    case 'tertiary':
      return 'darkBlue';
    default:
      return 'white';
  }
}

export default setFontColor;

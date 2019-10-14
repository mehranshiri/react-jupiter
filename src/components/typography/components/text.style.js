import styled from 'styled-components';

const getColorFromName = (theme, color) => {
  switch (color) {
    case 'danger':
      return 'red';
    case 'success':
      return 'green';
    default:
    case 'default':
      return 'black';
  }
};

export const Emphasized = styled.em`
  font-family: 'IranSharp';
  font-size: ${({ size }) => (`${size}px`)};
  ${({ underline }) => (underline ? 'text-decoration: underline' : '')}
  ${({ lineThrough }) => (lineThrough ? 'text-decoration: line-through' : '')}
  ${({ strong }) => (strong ? 'font-weight: bold' : '')}
  color: ${({ theme, color }) => getColorFromName(theme, color)};
  ${({ theme, marked }) => (marked ? `background-color: ${theme.colors.blue200}` : '')}
`;

export const Strong = styled.strong`
  font-family: 'IranSharp';
  font-size: ${({ size }) => (`${size}px`)};
  font-weight: bold;
  ${({ underline }) => (underline ? 'text-decoration: underline' : '')}
  ${({ lineThrough }) => (lineThrough ? 'text-decoration: line-through' : '')}
  ${({ emphasized }) => (emphasized ? 'font-style: italic' : '')}
  color: ${({ theme, color }) => getColorFromName(theme, color)};
  ${({ theme, marked }) => (marked ? `background-color: ${theme.colors.blue200}` : '')}
`;

export const String = styled.span`
  font-family: 'IranSharp';
  font-size: ${({ size }) => (`${size}px`)};
  ${({ underline }) => (underline ? 'text-decoration: underline' : '')}
  ${({ lineThrough }) => (lineThrough ? 'text-decoration: line-through' : '')}
  color: ${({ theme, color }) => getColorFromName(theme, color)};
  ${({ theme, marked }) => (marked ? `background-color: ${theme.colors.blue200}` : '')}
`;

export const SubScript = styled.sub`
  font-family: 'IranSharp';
  font-size: 8px;
  color: ${({ theme, color }) => getColorFromName(theme, color)};
`;

export const SupScript = styled.sup`
  font-family: 'IranSharp';
  font-size: 8px;
  color: ${({ theme, color }) => getColorFromName(theme, color)};
`;

export const getSizeOfHeading = (theme, size, level) => {
  switch (size) {
    case theme.sizes.small:
      if (level === 1) return theme.h1SizeSmall;
      if (level === 2) return theme.h2SizeSmall;
      if (level === 3) return theme.h3SizeSmall;
      if (level === 4) return theme.h4SizeSmall;
      if (level === 5) return theme.h5SizeSmall;
      return theme.h6SizeMedium;
    case theme.sizes.medium:
      if (level === 1) return theme.h1SizeMedium;
      if (level === 2) return theme.h2SizeMedium;
      if (level === 3) return theme.h3SizeMedium;
      if (level === 4) return theme.h4SizeMedium;
      if (level === 5) return theme.h5SizeMedium;
      return theme.h6SizeMedium;
    case theme.sizes.large:
    default:
      if (level === 1) return theme.h1SizeLarge;
      if (level === 2) return theme.h2SizeLarge;
      if (level === 3) return theme.h3SizeLarge;
      if (level === 4) return theme.h4SizeLarge;
      if (level === 5) return theme.h5SizeLarge;
      return theme.h6SizeLarge;
  }
};

export const getMarginOfHeading = (theme, size, level) => {
  switch (size) {
    case theme.sizes.small:
      if (level === 1) return `${theme.h1SizeSmallMarginTop}px 0 ${theme.h1SizeSmallMarginBottom}px`;
      if (level === 2) return `${theme.h2SizeSmallMarginTop}px 0 ${theme.h2SizeSmallMarginBottom}px`;
      if (level === 3) return `${theme.h3SizeSmallMarginTop}px 0 ${theme.h3SizeSmallMarginBottom}px`;
      if (level === 4) return `${theme.h4SizeSmallMarginTop}px 0 ${theme.h4SizeSmallMarginBottom}px`;
      if (level === 5) return `${theme.h5SizeSmallMarginTop}px 0 ${theme.h5SizeSmallMarginBottom}px`;
      return `${theme.h6SizeSmallMarginTop}px 0 ${theme.h6SizeSmallMarginBottom}px`;
    case theme.sizes.medium:
      if (level === 1) return `${theme.h1SizeMediumMarginTop}px 0 ${theme.h1SizeMediumMarginBottom}px`;
      if (level === 2) return `${theme.h2SizeMediumMarginTop}px 0 ${theme.h2SizeMediumMarginBottom}px`;
      if (level === 3) return `${theme.h3SizeMediumMarginTop}px 0 ${theme.h3SizeMediumMarginBottom}px`;
      if (level === 4) return `${theme.h4SizeMediumMarginTop}px 0 ${theme.h4SizeMediumMarginBottom}px`;
      if (level === 5) return `${theme.h5SizeMediumMarginTop}px 0 ${theme.h5SizeMediumMarginBottom}px`;
      return `${theme.h6SizeMediumMarginTop}px 0 ${theme.h6SizeMediumMarginBottom}px`;
    case theme.sizes.large:
    default:
      if (level === 1) return `${theme.h1SizeLargeMarginTop}px 0 ${theme.h1SizeLargeMarginBottom}px`;
      if (level === 2) return `${theme.h2SizeLargeMarginTop}px 0 ${theme.h2SizeLargeMarginBottom}px`;
      if (level === 3) return `${theme.h3SizeLargeMarginTop}px 0 ${theme.h3SizeLargeMarginBottom}px`;
      if (level === 4) return `${theme.h4SizeLargeMarginTop}px 0 ${theme.h4SizeLargeMarginBottom}px`;
      if (level === 5) return `${theme.h5SizeLargeMarginTop}px 0 ${theme.h5SizeLargeMarginBottom}px`;
      return `${theme.h6SizeLargeMarginTop}px 0 ${theme.h6SizeLargeMarginBottom}px`;
  }
};

export const getSizeOfHeading = (theme, size, level) => {
  switch (size) {
    case theme.sizes.small:
      if (level === 1) return theme.typography.h1SizeSmall;
      if (level === 2) return theme.typography.h2SizeSmall;
      if (level === 3) return theme.typography.h3SizeSmall;
      if (level === 4) return theme.typography.h4SizeSmall;
      if (level === 5) return theme.typography.h5SizeSmall;
      return theme.typography.h6SizeMedium;
    case theme.sizes.medium:
      if (level === 1) return theme.typography.h1SizeMedium;
      if (level === 2) return theme.typography.h2SizeMedium;
      if (level === 3) return theme.typography.h3SizeMedium;
      if (level === 4) return theme.typography.h4SizeMedium;
      if (level === 5) return theme.typography.h5SizeMedium;
      return theme.typography.h6SizeMedium;
    case theme.sizes.large:
    default:
      if (level === 1) return theme.typography.h1SizeLarge;
      if (level === 2) return theme.typography.h2SizeLarge;
      if (level === 3) return theme.typography.h3SizeLarge;
      if (level === 4) return theme.typography.h4SizeLarge;
      if (level === 5) return theme.typography.h5SizeLarge;
      return theme.typography.h6SizeLarge;
  }
};

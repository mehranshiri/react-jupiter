export default function getIconFileName(type, isLightIcon) {
  return `icon-${type}${isLightIcon ? '-light' : ''}`;
}

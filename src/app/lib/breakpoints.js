export const size = {
  mobileS: 320,
  mobile: 576,
  navflip: 700,
  tabletS: 767,
  tablet: 900,
  desktop: 1200,
  desktopL: 1520,
};

export const breakpoints = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobile: `(max-width: ${size.mobile}px)`,
  tabletS: `(max-width: ${size.tabletS}px)`,
  navFlip: `(max-width: ${size.navflip}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  minTablet: `(min-width: ${size.tablet + 1}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
  desktopL: `(max-width: ${size.desktopL}px)`,
};
const MIN_WIDTHS = Object.freeze({
  XLarge: 1600,
  large: 1200,
  expanded: 840,
  medium: 600,
});

// ( x < medium ) = phone in portrait
// ( medium <= x < expanded ) = tablets and foldables in portrait
// ( x >= expanded ) any device in landscape mode

export default MIN_WIDTHS;

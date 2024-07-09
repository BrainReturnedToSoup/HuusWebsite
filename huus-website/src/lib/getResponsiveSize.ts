//As per the standards outlined in material design v3 for device widths

function getReponsiveSizeWidth(currWidth: number): string {
  if (currWidth < 600) {
    //portait mobile

    return "portraitMobile";
  } else if (currWidth < 840) {
    //portrait tablet

    return "portaitTablet";
  } else if (currWidth < 1200) {
    //landscape

    return "landscape";
  } else if (currWidth < 1600) {
    //landscape L

    return "landscape-l";
  } else {
    //landscape XL

    return "landscape-xl";
  }
}

export default getReponsiveSizeWidth;

const convertToTransparentLight = (color: string): string => {
  const colorWithoutHash = color.slice(1);
  const red = parseInt(colorWithoutHash.slice(0, 2), 16);
  const green = parseInt(colorWithoutHash.slice(2, 4), 16);
  const blue = parseInt(colorWithoutHash.slice(4, 6), 16);
  const transparentColorLight = `rgba(${red}, ${green}, ${blue}, 0.04)`;
  return transparentColorLight;
};

const convertToTransparentMedium = (color: string): string => {
  const colorWithoutHash = color.slice(1);
  const red = parseInt(colorWithoutHash.slice(0, 2), 16);
  const green = parseInt(colorWithoutHash.slice(2, 4), 16);
  const blue = parseInt(colorWithoutHash.slice(4, 6), 16);
  const transparentColorMedium = `rgba(${red}, ${green}, ${blue}, 0.5)`;
  return transparentColorMedium;
};

const convertToTransparentStrong = (color: string): string => {
  const colorWithoutHash = color.slice(1);
  const red = parseInt(colorWithoutHash.slice(0, 2), 16);
  const green = parseInt(colorWithoutHash.slice(2, 4), 16);
  const blue = parseInt(colorWithoutHash.slice(4, 6), 16);
  const transparentColorStrong = `rgba(${red}, ${green}, ${blue}, 0.8)`;
  return transparentColorStrong;
};

const primary = {
  main: "#2F4CA5",
  light: "#D1D7EB",
};
const secondary = {
  main: "#8C8C8C;",
  light: "#BABABA",
};

const baseColorsTheme = {
  branco: "#ffffff",
  cinza: "#444",
  amarelo: {
    100: "#FDC300",
    80: "#FDCF33",
    60: "#FEDB66",
    40: "#FEE799",
    20: "#FFF3CC",
    10: "#FFF9E5",
    5: "#FFFCF2",
  },
  verde: {
    100: "#009D3D",
    90: "#1AA750",
    80: "#33B164",
    60: "#66C48B",
    40: "#99D8B1",
    20: "#CCEBD8",
    5: "#F2FAF5",
  },
  preto: {
    100: "#1A1A1A",
    90: "#484848",
    80: "#5F5F5F",
    70: "#5F5F5F",
    60: "#767676",
    50: "#8C8C8C",
    40: "#A3A3A3",
    30: "#BABABA",
    20: "#D1D1D1",
    10: "#E8E8E8",
    5: "#F4F4F4",
  },
  azul: {
    100: "#18389B",
    90: "#2F4CA5",
    80: "#4660AF",
    70: "#4660AF",
    60: "#7488C3",
    50: "#8B9BCD",
    40: "#A3AFD7",
    30: "#BAC3E1",
    20: "#D1D7EB",
    10: "#E8EBF5",
    5: "#F3F5FA",
  },
  laranja: {
    100: "#F37021",
    90: "#F47E37",
    80: "#F58D4D",
    70: "#F79B64",
    60: "#F8A97A",
    50: "#F9B790",
    40: "#FAC6A6",
    30: "#FBD4BC",
    20: "#FDE2D3",
    10: "#FEF1E9",
    5: "#FEF8F4",
  },
  verdeLogo: {
    100: "#59AA11",
    90: "#6AB229",
    70: "#8BC358",
    50: "#ACD488",
    30: "#CDE6B8",
    10: "#EEF7E7",
    5: "#F7FBF3",
  },
  primary: {
    ...primary,
    transparent: {
      strong: convertToTransparentStrong(primary.main),
      medium: convertToTransparentMedium(primary.main),
      light: convertToTransparentLight(primary.light),
    },
  },
  secondary: {
    ...secondary,
    transparent: {
      strong: convertToTransparentStrong(secondary.main),
      medium: convertToTransparentMedium(secondary.main),
      light: convertToTransparentLight(secondary.light),
    },
  },
};

export const colorsTheme = {
  ...baseColorsTheme,
};

const commonColor = {
  commonWhite: '#FFFFFF',
  commonBlack: '#000000',
  activeColor: '#1565C0', //'#00695C',
  deactiveColor: '#BBDEFB', //'#B2DFDB',
  boxActiveColor: '#90CAF9', //'#80CBC4',
};

const light = {
  themeColor: '#FFFFFF',
  white: '#000000',
  sky: '#039BE5',
  gray: 'gray',
  ...commonColor,
};

const dark = {
  themeColor: '#000000',
  white: '#FFFFFF',
  sky: '#01579B',
  gray: 'white',
  ...commonColor,
};

export default { light, dark };

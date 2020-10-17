export const themes = {
  light: {
    background: '#FFF',
    primary: '#FEFEFE',
    text: '#0A0F0D',
    textLighter: '#C4CBCA',
    chartBar: '#EE4266',
    chartInfo: '#3CBBB1',
  },
  dark: {
    background: '#000',
    primary: '#0A0F0D',
    text: '#C4CBCA',
    textLighter: '#FEFEFE',
    chartBar: '#EE4266',
    chartInfo: '#3CBBB1',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;

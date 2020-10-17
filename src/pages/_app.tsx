import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import GlobalStyle from '../styles/global';
import { ThemeName, themes } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [themeName, setThemeName] = useState<ThemeName>('dark');
  const currentTheme = themes[themeName];
  return (
    <ThemeProvider theme={currentTheme}>
      <Header themeName={themeName} setThemeName={setThemeName} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;

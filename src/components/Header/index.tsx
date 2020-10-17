import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { ThemeName } from '../../styles/theme';

import { Container, Title } from './styles';

type HeaderProps = {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
};

const Header = ({ themeName, setThemeName }: HeaderProps) => {
  function toggleTheme() {
    setThemeName(themeName === 'dark' ? 'light' : 'dark');
  }
  return (
    <Container>
      <Title>Bem vindo a D1</Title>
      <DarkModeToggle
        onChange={toggleTheme}
        checked={themeName === 'dark' ? true : false}
        size={50}
      />
    </Container>
  );
};

export default Header;

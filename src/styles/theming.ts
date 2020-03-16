import React, { Context } from 'react';
import { Theme } from '@emotion/react';

const baseTheme = {
  headingFont: '',
  defaultFont: `'Cooper Hewitt', san-serif`,
  padding: [],
  colors: {
    grey100: '',
    grey200: '',
  },
};

const darkTheme: Theme = {
  ...baseTheme,
  textColor: '#A9B7C6',
  bg: '#2B2B2B',
  accentColor: '#389fff',
};

const lightTheme: Theme = {
  ...baseTheme,
  textColor: '#586e75',
  bg: '#fdf6e3',
  accentColor: '#389fff',
};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export interface IThemeContext {
  //theme: ITheme;
  changeColorsTheme: (name: keyof typeof themes) => void;
}

const themeCtx: IThemeContext = {
  changeColorsTheme: (_name: keyof typeof themes) => {},
  //theme: themes.dark,
};

export const ThemeChangerContext: Context<IThemeContext> = React.createContext<
  IThemeContext
>(themeCtx);

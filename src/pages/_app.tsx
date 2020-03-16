/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
require('typeface-cooper-hewitt');
import { themes, ThemeChangerContext } from '../styles/theming';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { DefaultSeo } from 'next-seo';

import { nextSEOConfig } from '../next-seo.config';
import { globalStyles } from '../styles/global-styles';

export default ({ Component, pageProps }: any) => {
  const [theme, setTheme] = React.useState(themes.dark);
  const changeColorsTheme = React.useCallback(
    (name: keyof typeof themes) => {
      setTheme(themes[name]);
    },
    [theme]
  );
  return (
    <ThemeChangerContext.Provider value={{ changeColorsTheme }}>
      <ThemeProvider theme={theme}>
        {globalStyles(theme)}
        <DefaultSeo {...nextSEOConfig} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeChangerContext.Provider>
  );
};

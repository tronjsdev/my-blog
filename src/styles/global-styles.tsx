import { css, Global } from '@emotion/react';

export const globalStyles = (theme: any) => (
  <Global
    styles={css`
      html {
        font-size: 10px;
      }
      body {
        font-size: 1.8rem;
        font-family: ${theme.defaultFont};
        font-weight: normal;
        word-wrap: break-word;
        font-kerning: normal;
        -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        background-color: ${theme.bg};
        color: ${theme.textColor};
        line-height: 1.5;
        .solarized {
          --bg: #fdf6e3;
          --bg2: #fffaef;
          --bg3: #fcf9ef;
          --bg4: #fffaed;
          --code: #d33682;
          --code-text: #586e75;
          --code-comment: #93a1a1;
          --text-color: #586e75;
          --info-box-text: #073642;
          --gs0: rgba(181, 137, 0, 0.3);
          --green1: #657b83;
          --green2: #2aa198;
          --yellow1: #dbab15;
          --yellow2: #b58900;
          --yellow3: #b58900;
          --top1: #afaa9a;
          --top2: #d6d0be;
          --subtle-green1: rgba(147, 161, 161, 0.5);
          --subtle-green2: #eee8d5;
          --subtle-yellow3: rgba(181, 137, 0, 0.3);
          --fb: #657b83;
          --reddit: #657b83;
          --h-news: #657b83;
          --twitter: #657b83;
          --cat-head: rgba(175, 170, 154, 0.1);
          --front-text-color: #93a791;
          --info-box-bg: #eee8d5;
        }

        .solarized-dark {
          --bg: #002b36;
          --bg2: #073642;
          --bg3: #073642;
          --bg4: #021e25;
          --code: #d33682;
          --code-text: #839496;
          --code-comment: #93a1a1;
          --text-color: #93a1a1;
          --info-box-text: var(--text-color);
          --gs0: rgba(181, 137, 0, 0.3);
          --green1: #7d99a3;
          --green2: #268bd2;
          --yellow1: #b58900;
          --yellow2: #2aa198;
          --yellow3: #b58900;
          --top1: #013948;
          --top2: #011c23;
          --subtle-green1: rgba(147, 161, 161, 0.5);
          --subtle-green2: #073642;
          --subtle-yellow1: rgba(32, 104, 130, 0.6);
          --subtle-yellow2: #003d4c;
          --subtle-yellow3: #005368;
          --fb: #657b83;
          --reddit: #657b83;
          --h-news: #657b83;
          --twitter: #657b83;
          --cat-head: rgba(175, 170, 154, 0.1);
          --front-text-color: #93a791;
          --info-box-bg: #011c23;
        }
      }
    `}
  />
);

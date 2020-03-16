import facepaint from 'facepaint';

export { default as styled } from '@emotion/styled';
export { cache } from '@emotion/css';
export * from '@emotion/react';

export const mq = facepaint([
  '@media(min-width: 375px)',
  '@media(min-width: 425px)',
  '@media(min-width: 576px)',
  '@media(min-width: 768px)',
  '@media(min-width: 992px)',
  '@media(min-width: 1200px)',
  '@media(min-width: 1440px)',
  '@media(min-width: 2560px)',
]);

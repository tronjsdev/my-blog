
// eslint-disable-next-line import/order
import { NextPage } from 'next';
import { ApolloClient } from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

declare module 'next' {
  interface NextPageContext {
    apolloClient: ApolloClient<NormalizedCacheObject>,
  }
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<any>
  }
  
}

declare module '@emotion/react' {
  export interface Theme {
    headingFont: string;
    defaultFont: string;
    padding: Array<number>;
    colors: {
      grey100: string;
      grey200: string;
    };
    textColor: string;
    accentColor: string;
    bg: string;
  }
}


//declare global {}

import * as React from 'react';
import Head from 'next/head';
import { Container } from '..';

type Props = {
  title?: string;
};

export const DefaultLayout: React.FunctionComponent<Props> = ({
  children,
  title = 'Welcome to my blog',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
        crossOrigin="anonymous"
      />
    </Head>
    <Container>{children}</Container>
  </div>
);

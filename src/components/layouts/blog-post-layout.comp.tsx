import * as React from 'react';

import { DefaultLayout } from './default-layout.comp';
import { NextSeo } from 'next-seo';
import { Container } from '..';

export const BlogPostLayout: React.FunctionComponent<any> = ({
  children,
  title,
  seoConfig,
}) => (
  <DefaultLayout title={title}>
    <NextSeo {...seoConfig} />
    <article>
      <header>[header]</header>
      <Container>{children}</Container>
      <footer>[footer]</footer>
    </article>
  </DefaultLayout>
);

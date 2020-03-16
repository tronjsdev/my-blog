import * as React from 'react';
import Link from 'next/link';
import { DefaultLayout } from '../components';

const AboutPage: React.FunctionComponent = () => (
  <DefaultLayout>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </DefaultLayout>
);

export default AboutPage;

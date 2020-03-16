import * as React from 'react';
import {DefaultLayout, Header} from '../components';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const IndexPage: NextPage = () => {
  const seoConfig = {
    title: 'Welcome to my blog',
    description: 'This will be the page meta description',
    canonical: 'https://www.canonicalurl.ie/',
    openGraph: {
      url: 'https://www.canonicalurl.ie/',
      title: 'Welcome to my blog',
      description: 'Open Graph Description',
      images: [
        {
          url: 'https://www.example.ie/og-image-01.jpg',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
        {
          url: 'https://www.example.ie/og-image-02.jpg',
          width: 900,
          height: 800,
          alt: 'Og Image Alt Second',
        },
        { url: 'https://www.example.ie/og-image-03.jpg' },
        { url: 'https://www.example.ie/og-image-04.jpg' },
      ],
    },
  };
  return (
    <DefaultLayout>
      <NextSeo {...seoConfig} />
      <Header />
      <h1 style={{ fontFamily: 'Cooper Hewitt' }}>Welcome to my blog</h1>
    </DefaultLayout>
  );
};

export default IndexPage;

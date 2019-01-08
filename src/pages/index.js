import React from 'react';
import Layout from '../components/layout';
import First from '../components/firstImpression';
import Content from '../components/content';
import FormSection from '../components/form';
import { ParallaxProvider } from 'react-scroll-parallax';

const IndexPage = () => (
  <Layout>
  <ParallaxProvider>
  <First/>
  <Content/>
  <FormSection/>
  </ParallaxProvider>
  </Layout>
)

export default IndexPage

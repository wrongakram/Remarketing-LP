import React from 'react'
import Layout from '../components/layout'
import First from '../components/firstImpression'
import Content from '../components/content'
import Benefits from '../components/benefits'
import BenefitsCont from '../components/benefits-continued'
import { ParallaxProvider } from 'react-scroll-parallax'



const IndexPage = () => (
  <Layout>
  <ParallaxProvider>
  <First/>
  <Content/>
  <Benefits/>
  <BenefitsCont/>
  </ParallaxProvider>
  </Layout>
)

export default IndexPage

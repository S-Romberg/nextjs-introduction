import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/Layout'

class MyApp extends App {
  state = {
    name: 'Spencer'
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} name='Spencer' />
        </Layout>
      </Container>
    );
  }
}

MyApp.getInitialProps =  async ({ Component, ctx }) =>  {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
export default MyApp;

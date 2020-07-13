import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import Layout from '../components/layout';

const Intro = styled.div`
  min-height: 50vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  max-width: 1000px;
  padding: 32px;
  width: 100%;
  background-size: contain;
  background-image: url(${require('../assets/404.svg')});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 70% 70%;
`;

export const NotFoundPage = () => {
  return (
    <Layout>
      <Header />

      <main>
        <Intro />
      </main>

      <Footer />
    </Layout>
  );
};

export default NotFoundPage;

import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectShow } from '../components/ProjectShow';
import Layout from '../components/layout';
import { Intro } from '../components/Styled';
import { HeadLine } from '../components/HeadLine';

const Sub = styled.p`
  font-size: 1.1rem;
`;

export const HomePage = () => {
  return (
    <Layout>
      <Header />

      <main>
        <Intro>
          <HeadLine />
        </Intro>

        <ProjectShow />

        <Intro>
          <Sub>
            I'm developing cross platform mobile apps since 2016. My main focus
            is React Native, with expertise on testability (unit, End-to-End)
            and native performance (low level system).
          </Sub>

          <Sub>
            Additionally, I use techniques like Docker to provide Continuous
            Integration. For developing backend software I like to take Node.JS
            / Rust.
          </Sub>

          <div>
            <a href="/about">Read More</a>
          </div>
        </Intro>
      </main>

      <Footer />
    </Layout>
  );
};

export default HomePage;

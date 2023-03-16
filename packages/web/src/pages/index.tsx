import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectShow } from '../components/ProjectShow';
import Layout from '../components/layout';
import { Intro } from '../components/Styled';
import { HeadLine } from '../components/HeadLine';
import { graphql } from 'gatsby';

const Sub = styled.p`
  font-size: 1.1rem;
`;

export const HomePage = (props: any) => {
  return (
    <Layout>
      <Header />

      <main>
        <Intro>
          <HeadLine />
        </Intro>

        <ProjectShow {...props} />

        <Intro>
          <Sub>
            I'm developing cross platform mobile apps since 2016. My main focus
            is React Native, with expertise on testability (unit, End-to-End)
            and native performance (low level system).
          </Sub>

          <Sub>
            Additionally, I use systems like Docker to provide Continuous
            Integration. For developing backend software I like to use Node.JS /
            Rust.
          </Sub>

          <div>
            <a href="/about" aria-label="About" style={{ fontWeight: 'bold' }}>
              More About Me
            </a>
          </div>
        </Intro>
      </main>

      <Footer />
    </Layout>
  );
};

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 700, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    image_0: file(relativePath: { eq: "project-tonies.png" }) {
      ...fluidImage
    }
    image_1: file(relativePath: { eq: "project-codyo.png" }) {
      ...fluidImage
    }
    image_2: file(relativePath: { eq: "project-nect.jpg" }) {
      ...fluidImage
    }
    image_3: file(relativePath: { eq: "project-space-apps.png" }) {
      ...fluidImage
    }
    image_4: file(relativePath: { eq: "project-games.png" }) {
      ...fluidImage
    }
  }
`;

export default HomePage;

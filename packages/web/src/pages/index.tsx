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
            Additionally, I use techniques like Docker to provide Continuous
            Integration. For developing backend software I like to take Node.JS
            / Rust.
          </Sub>

          <div>
            <a href="/about" aria-label="About" style={{ fontWeight: 'bold' }}>
              Read More About Me
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
      fluid(maxWidth: 800, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    image_0: file(relativePath: { eq: "project_spaceseek_hq.png" }) {
      ...fluidImage
    }
    image_1: file(relativePath: { eq: "project_spaceviewer.png" }) {
      ...fluidImage
    }
    image_2: file(relativePath: { eq: "project_flutter.png" }) {
      ...fluidImage
    }
    image_3: file(relativePath: { eq: "project-react.png" }) {
      ...fluidImage
    }
    image_4: file(relativePath: { eq: "project_splintersweets.png" }) {
      ...fluidImage
    }
    image_5: file(relativePath: { eq: "project_bubblefling.png" }) {
      ...fluidImage
    }
    image_6: file(relativePath: { eq: "project_hammerize.png" }) {
      ...fluidImage
    }
  }
`;

export default HomePage;

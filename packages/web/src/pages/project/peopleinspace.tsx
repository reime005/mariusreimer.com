import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Layout from '../../components/layout';

const Intro = styled.div`
  min-height: 50vh;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1000px;
  padding: 32px;
  font-size: 20px;
  line-height: 1.55em;
  width: 100%;

  h1 {
    margin-bottom: 1em;
  }

  h2 {
    margin-bottom: 1em;
  }

  ul {
    margin-top: 0;
    margin-bottom: 0.75em;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  max-width: 650px;
`;

export const PeopleInSpaceProjectPage = () => {
  return (
    <Layout>
      <Header />

      <main>
        <Intro>
          <Title>How many people are in space right now?</Title>

          <img
            src={require('../../assets/project_flutter.png')}
            style={{ maxWidth: 600, width: '100%', alignSelf: 'center' }}
          />

          <p>
            'How many people are in space right now?' is an iOS and Android app,
            built with Flutter. In collaboration with&nbsp;
            <a rel="noopener noreferrer" href="https://berger-apps/">
              berger-apps.de
            </a>
            , this app has similar functionality to&nbsp;
            <a rel="noopener noreferrer" href="/project/spaceviewer">
              Space Viewer
            </a>
            . Additionally, the app's main screen shows the number of people,
            that are in space right now.
          </p>

          <p>
            Flutter is a framework to build cross platform native apps in the
            Dart programming language. It has similar goals as React Native
            (fully native applications, not based on web views). I have
            documened my experience and made a comparison
            <a
              rel="noopener noreferrer"
              href="/blog/id/my-points-on-flutter-as-a-react-native-developer"
            >
              here
            </a>
            .
          </p>
        </Intro>
      </main>

      <Footer />
    </Layout>
  );
};

export default PeopleInSpaceProjectPage;

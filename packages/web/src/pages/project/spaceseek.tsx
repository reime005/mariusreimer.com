import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Layout from '../../components/layout';
import { Intro } from '../../components/Styled';

import '../../style/devices.css';

const Title = styled.h1`
  font-size: 3em;
  max-width: 650px;
`;

export const SpaceSeekProjectPage = () => {
  return (
    <Layout>
      <Header />

      <main>
        <Intro>
          <Title>Space Seek - Space Data</Title>

          <img
            src={require('../../assets/project_spaceseek_hq.png')}
            style={{
              maxWidth: 800,
              width: '100%',
              alignSelf: 'center',
              marginBottom: 32,
            }}
          />

          <p>
            Space Seek is an iOS and Android app, built with React Native. You
            can view information about upcoming and previous rocket launches
            worldwide, thanks to&nbsp;
            <a
              rel="noopener noreferrer"
              href="https://thespacedevs.com/"
              aria-label="The Space Devs API"
            >
              The Space Devs API
            </a>
            .
          </p>

          <p>
            This app is a follow up of my "Space Viewer", due to a breaking API
            change. The source code for Space Seek can be found&nbsp;
            <a
              rel="noopener noreferrer"
              href="https://github.com/reime005/SpaceSeek"
              aria-label="Github SpaceSeek Project"
            >
              here
            </a>
            , the code for Space Viewer can be found &nbsp;
            <a
              rel="noopener noreferrer"
              href="https://github.com/reime005/react-native-spaceviewer"
              aria-label="Github SpaceViewer Project"
            >
              here
            </a>
            .
          </p>

          <h1>Rocket Launches</h1>

          <p>
            The app's main screen consists of a list of upcoming and already
            happened rocket launches. On tablets, the list has two columns to
            take advantage of the space.
          </p>

          <p>
            On the top right, you can press a button to open a search input
            field. Pressing one of the items in the list leads the user to a
            details page.
          </p>

          <img
            aria-label="Space Seek upcoming rocket launches screen shots"
            src={require('../../assets/project_spaceseek_1.jpg')}
            style={{
              maxWidth: 800,
              width: '100%',
              alignSelf: 'center',
              marginBottom: 32,
            }}
          />

          <h1>Rocket Details</h1>

          <p>
            When opening the details screen for a specific rocket, the app
            fetches all data to be displayed. On the top, a counter or past
            launch date is displayed.
          </p>

          <p>
            All other content related to the mission, rocket details and further
            links are displayed below. Additionally, you may jump to the rocket
            pad launch location (map screen) directly. Links to video streams
            are also displayed.
          </p>

          <img
            aria-label="Space Seek details and rocket pad location search screen shots"
            src={require('../../assets/project_spaceseek_2.jpg')}
            style={{
              maxWidth: 800,
              width: '100%',
              alignSelf: 'center',
              marginBottom: 32,
            }}
          />

          <h1>Settings</h1>

          <p>
            The settings page allows the user to open certain links. They can
            also toggle between the dark and light mode. By default, the app
            takes the user's preferred color mode, or defaults to the dark
            theme.
          </p>

          <img
            aria-label="Space Seek dark and light mode screen shots"
            src={require('../../assets/project_spaceseek_3.jpg')}
            style={{
              maxWidth: 800,
              width: '100%',
              alignSelf: 'center',
              marginBottom: 32,
            }}
          />
        </Intro>
      </main>

      <Footer />
    </Layout>
  );
};

export default SpaceSeekProjectPage;

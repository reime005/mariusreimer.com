import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Layout from '../../components/layout';

import '../../style/devices.css';
import { Intro } from '../../components/Styled';

const Title = styled.h1`
  font-size: 3em;
  max-width: 650px;
`;

export const SpaceViewerProjectPage = () => {
  return (
    <Layout>
      <Header />

      <main>
        <Intro>
          <Title>Space Viewer - Rocket Infos</Title>

          <img
            src={require('../../assets/project_spaceviewer.png')}
            style={{
              maxWidth: 600,
              width: '100%',
              alignSelf: 'center',
              marginBottom: 32,
            }}
          />

          <p>
            Space Viewer is an iOS and Android app, built with React Native. You
            can view information about upcoming and previous rocket launches
            worldwide, thanks to&nbsp;
            <a
              rel="noopener noreferrer"
              href="https://launchlibrary.net/"
              aria-label="Launch Library API"
            >
              launchlibrary.net
            </a>
            .
          </p>

          <p>
            The app has several lists, that lead the user to a screen, where
            they can see more detailed information about the rocket launch.
            These could be:
          </p>

          <ul>
            <li>Location (where it launches)</li>
            <li>Date (when it launches)</li>
            <li>Details about the mission</li>
            <li>Links to the video stream, to watch the launch live</li>
          </ul>

          <p>
            The technology stack has changed since I initially developed the
            app. When I initially started buiding it in 2018, Redux/Saga, React
            Navigation and React component classes were used.
          </p>

          <h2>End-to-End Tests</h2>

          <p>
            After some months of the initial release, I've added End-to-End
            (E2E) tests, based on Detox and Appium. The reason I did both is
            because I wanted to compare both. I've documented my
            experience&nbsp;
            <a
              href="/blog/id/react-native-end-to-end-testing"
              aria-label="Blog Post React Native End To End Testing"
            >
              here
            </a>
            .
          </p>

          <h2>Continuous Integration and Delivery</h2>

          <p>
            The next iteration of the project was the addition of a test and
            build automation, or CI/CD. I've configured Github Actions, Fastlane
            and Detox to run E2E test after each commit and before each
            automatic release to the app stores. This dramatically simplified
            the release process, once configured correctly.
          </p>

          <p>Next, I've enabled the app to be used for React Native Web.</p>

          <h2>React Native Web</h2>

          <p>
            React Native Web is a tool (library) to reuse your React Native
            components for the Web. This means, writing code once and using it
            across Android, iOS and Web. The idea behind it is not (in my
            opinion), to write your whole code to be used on the web. Rather,
            you could share critically, complicated or just same looking
            components across these platforms.
          </p>

          <p>
            Sharing code in a (large) codebase can be tricky. Especially in
            JavaScript/TypeScript projects, where different code conventions and
            file structures can really quickly lead to a mess.
            <br />A common way to solve this problem is by having a monorepo.
            This is basically a collection of multiple repositories to be used
            as a single one. This can improve code browsing, code reusing and
            version management (invidual versions for sub-packages for example).
          </p>

          <p>
            I've decided to go with <em>yarn workspaces</em>, since I've been
            using yarn anyways. The configuration was a bit tricky, especially
            due to the usage of TypeScript and JavaScript together (bundler), as
            well as the native project configurations (require files from the
            node_modules).
          </p>

          <p>
            Below you may see a "lite" version rendered of the app to web using
            React Native Web. Please note that this rather a beta-version and
            should show the practibility of React Native Web:
          </p>

          <div style={{ width: '100%' }} id="mup-container">
            <div id="iphone-x" className="container grid-xl text-center">
              <div className="columns">
                <div className="column col-12">
                  <div className="device device-iphone-x animate">
                    <div className="device-frame">
                      <div className="device-content animate-bg">
                        <iframe
                          src="https://spaceviewer.mariusreimer.com"
                          width="405"
                          height="638"
                          style={{ border: 'none', marginTop: 32 }}
                        />
                      </div>
                    </div>
                    <div className="device-stripe" />
                    <div className="device-header" />
                    <div className="device-sensors" />
                    <div className="device-btns" />
                    <div className="device-power" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Intro>
      </main>

      <Footer />
    </Layout>
  );
};

export default SpaceViewerProjectPage;

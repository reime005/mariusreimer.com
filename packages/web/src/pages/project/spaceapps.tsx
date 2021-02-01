import React from 'react';
import styled from 'styled-components';
import Img, { FluidObject } from 'gatsby-image';
import { graphql } from 'gatsby';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Layout from '../../components/layout';
import { Intro } from '../../components/Styled';

const Title = styled.h1`
  margin-top: 4em;
  font-size: 3rem;
  max-width: 650px;
`;

const imgStyle = {
  maxWidth: 700,
  width: '100%',
  alignSelf: 'center',
  marginBottom: '2rem',
};

export const SpaceSeekProjectPage = (props: any) => {
  return (
    <Layout>
      <Header />

      <main>
        <Intro style={{ alignItems: 'flex-start' }}>
          <Title>Space Seek - Space Data</Title>

          <Img
            alt="Space Seek - App Function Preview"
            fluid={props.data.image_0.childImageSharp.fluid}
            style={imgStyle}
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

          <Img
            alt="Space Seek upcoming rocket launches screen shots"
            fluid={props.data.image_1.childImageSharp.fluid}
            style={imgStyle}
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

          <Img
            alt="Space Seek details and rocket pad location search screen shots"
            fluid={props.data.image_2.childImageSharp.fluid}
            style={imgStyle}
          />

          <h1>Settings</h1>

          <p>
            The settings page allows the user to open certain links. They can
            also toggle between the dark and light mode. By default, the app
            takes the user's preferred color mode, or defaults to the dark
            theme.
          </p>

          <Img
            alt="Space Seek dark and light mode screen shots"
            fluid={props.data.image_3.childImageSharp.fluid}
            style={imgStyle}
          />

          <Title>How many people are in space right now?</Title>

          <Img
            alt="How many people are in space right now? - App Preview"
            fluid={props.data.image_4.childImageSharp.fluid}
            style={{
              maxWidth: 800,
              width: '100%',
              alignSelf: 'center',
              marginBottom: 32,
            }}
          />

          <p>
            'How many people are in space right now?' is an iOS and Android app,
            built with Flutter. In collaboration with&nbsp;
            <a
              rel="noopener noreferrer"
              href="https://berger-apps/"
              aria-label="Berger Apps"
            >
              berger-apps.de
            </a>
            , this app has similar functionality to&nbsp;
            <a
              rel="noopener noreferrer"
              href="/project/spaceviewer"
              aria-label="Project Space Viewer"
            >
              Space Viewer
            </a>
            . Additionally, the app's main screen shows the number of people,
            that are in space right now.
          </p>

          <p>
            Flutter is a framework to build cross platform native apps in the
            Dart programming language. It has similar goals as React Native
            (fully native applications, not based on web views). I have
            documented my experience and made a comparison
            <a
              rel="noopener noreferrer"
              href="/blog/id/my-points-on-flutter-as-a-react-native-developer"
              aria-label="Blog Post About Flutter Experience"
            >
              here
            </a>
            .
          </p>

          <Title>Space Viewer - Rocket Infos</Title>

          <Img
            alt="Space Viewer - App Preview"
            fluid={props.data.image_5.childImageSharp.fluid}
            style={imgStyle}
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
            app. When I initially started building it in 2018, Redux/Saga, React
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
            version management (individual versions for sub-packages for
            example).
          </p>

          <p>
            I've decided to go with <em>yarn workspaces</em>, since I've been
            using yarn anyways. The configuration was a bit tricky, especially
            due to the usage of TypeScript and JavaScript together (bundler), as
            well as the native project configurations (require files from the
            node_modules).
          </p>

          <p>
            <strike>
              Below you may see a "lite" version rendered of the app to web
              using React Native Web. Please note that this rather a
              beta-version and should show the practicability of React Native
              Web:
            </strike>
            &nbsp;*Update 20201: Due to API deprecation the web version is not
            shown anymore
          </p>
        </Intro>
      </main>

      <Footer />
    </Layout>
  );
};

export const fluidImageProjects = graphql`
  fragment fluidImageProjects on File {
    childImageSharp {
      fluid(maxWidth: 900, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    image_0: file(relativePath: { eq: "project_spaceseek_hq.png" }) {
      ...fluidImageProjects
    }
    image_1: file(relativePath: { eq: "project_spaceseek_1.jpg" }) {
      ...fluidImageProjects
    }
    image_2: file(relativePath: { eq: "project_spaceseek_2.jpg" }) {
      ...fluidImageProjects
    }
    image_3: file(relativePath: { eq: "project_spaceseek_3.jpg" }) {
      ...fluidImageProjects
    }
    image_4: file(relativePath: { eq: "project_flutter.png" }) {
      ...fluidImageProjects
    }
    image_5: file(relativePath: { eq: "project_spaceviewer.png" }) {
      ...fluidImageProjects
    }
  }
`;

export default SpaceSeekProjectPage;

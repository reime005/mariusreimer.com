import React from 'react';
import styled from 'styled-components';
import { ProjectShowHeader, ProjectShowHeaderProps } from './ProjectShowHeader';
import { BGThird } from '../assets/BGThird';
import { BGFirst } from '../assets/BGFirst';
import { BGSecond } from '../assets/BGSecond';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 42px;
  padding-bottom: 42px;
  padding-left: 32px;
  padding-right: 32px;
  align-items: center;
  box-sizing: border-box;
  min-height: 300px;
  background-color: ${({ theme }) => theme.color.backgroundColor2};
`;

const Line = styled.div`
  display: flex;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 40px;
  border-bottom: 3px solid ${({ theme }) => theme.color.stroke};
`;

const Box = styled.div`
  font-weight: 900;
  align-self: center;
  font-size: 24px;
  padding-left: 32px;
  padding-right: 32px;
  padding: 16px;
  border: 3px solid ${({ theme }) => theme.color.stroke};
  border-bottom: none;
  color: ${({ theme }) => theme.color.listItemHeadline};
`;

const data: ProjectShowHeaderProps[] = [
  {
    title: 'Space Seek',
    subTitle: 'React Native App',
    description: `
      Rewrite of the 'Space Viewer' app
      <ul>
        <li>See information about live streams, launch time or mission description!</li>
        <li>The data is fetched from the <a rel="noopener noreferrer" href="https://thespacedevs.com/">The Space Devs API</a></li>
        <li>Github Actions, Fastlane and Detox E2E Tests</li>
        <li><a rel="noopener noreferrer" href="https://github.com/reime005/spaceseek">Open Source</a></li>
      </ul>
      `,
    backgroundColor: '#7a2c1a',
    tags: ['TypeScript', 'React Native', 'iOS', 'Android'],
    // link: {
    //   text: 'More',
    //   to: '/project/spaceviewer/',
    // },
    imageSource: require('../assets/project_spaceseek.png'),
    bgComponent: <BGFirst fill="rgba(21, 92, 172, 1)" />,
  },
  {
    title: 'Space Viewer',
    subTitle: 'React Native App',
    description: `
      Get to know all about upcoming and previous rocket space launches!
      <ul>
        <li>See information about live streams, launch time or mission description!</li>
        <li>The data is fetched from the <a rel="noopener noreferrer" href="https://launchlibrary.net/">LaunchLibrary.net API</a></li>
        <li>Code sharing via React Native Web</li>
        <li>Github Actions, Fastlane and Detox E2E Tests</li>
        <li><a rel="noopener noreferrer" href="https://github.com/reime005/react-native-spaceviewer">Open Source</a></li>
      </ul>
      `,
    backgroundColor: 'rgba(21, 92, 172, 1)',
    tags: ['TypeScript', 'React Native', 'iOS', 'Android'],
    link: {
      text: 'More',
      to: '/project/spaceviewer/',
    },
    imageSource: require('../assets/project_spaceviewer.png'),
    bgComponent: <BGFirst fill="#e45858" />,
  },
  {
    title: 'People in Space',
    subTitle: 'Flutter App',
    description: `
    Check how many people are in space right now!
    <ul>
      <li>Built in collaboration with <a rel="noopener noreferrer" href="https://berger-apps.de/">Berger</a></li>
      <li>Experience documented <a rel="noopener noreferrer" href="/blog/id/my-points-on-flutter-as-a-react-native-developer">here</a></li>
      <li><a rel="noopener noreferrer" href="https://github.com/berger89/hmpaisrn">Open Source</a></li>
    </ul>
      `,
    backgroundColor: 'rgb(30, 30, 30)',
    tags: ['Dart', 'Flutter', 'iOS', 'Android'],
    link: {
      text: 'More',
      to: '/project/peopleinspace/',
    },
    imageSource: require('../assets/project_flutter.png'),
    bgComponent: <BGSecond fill="#e45858" />,
  },
  {
    title: 'Open Source Contributions',
    subTitle: 'Maintainer and Core Contributor',
    description: `
      I'm participating in several different projects in the React and React Native ecosystem. Some of them are:
      <ul>
        <li>react-native-camera</li>
        <!-- <li><a rel="noopener noreferrer" href="https://github.com/reime005/react-native-camera-hooks">react-native-camera-hooks</li> --!>
        <li>react-native-video</li>
        <li>react-native (core)</li>
      </ul>
      `,
    backgroundColor: '#63578f',
    tags: ['React', 'React Native', 'Github'],
    link: {
      text: 'More',
      to: 'https://github.com/reime005',
    },
    imageSource: require('../assets/project-react.png'),
    bgComponent: <BGFirst fill="#e45858" />,
  },
  {
    title: 'Splinter Sweets',
    subTitle: 'Cross Platform Mobile Game App',
    description: `
    You have to smash as many sweets as possible within 50 seconds.
    <ul>
      <li><a rel="noopener noreferrer" href="https://github.com/reime005/splintersweets">Open Source</a></li>
      <li>Self-created tutorials can be found <a rel="noopener noreferrer" href="/blog/5">here</a></li>
    </ul>
    `,
    backgroundColor: '#1b2061',
    tags: ['Kotlin', 'libGDX', 'iOS', 'Android'],
    link: {
      text: 'More',
      to: 'https://github.com/reime005/splintersweets',
    },
    imageSource: require('../assets/project_splintersweets.png'),
    bgComponent: <BGThird fill="#e45858" />,
  },
  {
    title: 'Bubble Fling',
    subTitle: 'Cross Platform Mobile Game App',
    description: `
    Use your finger to drag and fling bubbles and destroy those with the same color`,
    backgroundColor: '#2c6f7a',
    tags: ['Kotlin', 'libGDX', 'iOS', 'Android'],
    // link: {
    //   text: 'More',
    //   to: '/project/bubblefling/',
    // },
    imageSource: require('../assets/project_bubblefling.png'),
    bgComponent: <BGFirst fill="#e45858" />,
  },
  {
    title: 'Hammerize - Zombie Defense',
    subTitle: 'Cross Platform Mobile Game App',
    description: `
    Hit zombies with a hammer, and they will move faster and fast over time! Built in collaboration with Umur Coskun`,
    backgroundColor: '#15631b',
    tags: ['Java', 'libGDX', 'iOS', 'Android'],
    link: {
      text: 'More (careful, game may load with a sound)',
      to: 'https://reime005.itch.io/hammerize',
    },
    imageSource: require('../assets/project_hammerize.png'),
    bgComponent: <BGSecond fill="#e45858" />,
  },
];

export const ProjectShow = () => {
  return (
    <Wrapper>
      <div style={{ width: '100%', maxWidth: 1000 }}>
        {/* <Line>
          <Box>Projects & Work</Box>
        </Line> */}

        {data.map((d, i) => {
          return <ProjectShowHeader {...d} right={i % 2 === 0} key={d.title} />;
        })}
      </div>
    </Wrapper>
  );
};

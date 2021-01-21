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
  background-color: var(--backgroundColor2);
`;

const data: ProjectShowHeaderProps[] = [
  {
    title: 'Space Seek',
    subTitle: 'React Native App',
    description: `Rewrite of the 'Space Viewer' app`,
    items: [
      'See information about live streams, launch time or mission description!',
      'The data is fetched from the <a rel="noopener noreferrer" href="https://thespacedevs.com/">The Space Devs API</a>',
      'CI/CD via Github Actions, Fastlane and Detox E2E Tests',
      '<a rel="noopener noreferrer" href="https://github.com/reime005/spaceseek" aria-label="Github SpaceSeek Project">Open Source</a>',
    ],
    backgroundColor: '#7a2c1a',
    tags: ['TypeScript', 'React Native', 'iOS', 'Android'],
    link: {
      text: 'More',
      to: '/project/spaceseek/',
    },
    imageSource: require('../assets/project_spaceseek.png'),
    bgComponent: <BGFirst fill="rgba(21, 92, 172, 1)" />,
  },
  {
    title: 'Space Viewer',
    subTitle: 'React Native App',
    description:
      'Get to know all about upcoming and previous rocket space launches!',
    items: [
      'See information about live streams, launch time or mission description!',
      'The data is fetched from the <a rel="noopener noreferrer" href="https://launchlibrary.net/">LaunchLibrary.net API</a>',
      'Code sharing via React Native Web',
      'CI/CD via Github Actions, Fastlane and Detox E2E Tests',
      '<a rel="noopener noreferrer" href="https://github.com/reime005/react-native-spaceviewer" aria-label="Github SpaceViewer Project">Open Source</a>',
    ],
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
    description: 'Check how many people are in space right now!',
    items: [
      'Built in collaboration with <a rel="noopener noreferrer" href="https://berger-apps.de/">Berger</a>',
      'Experience documented <a rel="noopener noreferrer" href="/blog/id/my-points-on-flutter-as-a-react-native-developer" aria-label="Blog Post About Flutter Experience">here</a>',
      '<a rel="noopener noreferrer" href="https://github.com/berger89/hmpaisrn" aria-label="Github How Many People Are In Space Right Now Project">Open Source</a>',
    ],
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
    description:
      "I'm participating in several different projects in the React and React Native ecosystem. Some of them are:",
    items: ['react-native-camera', 'react-native-video', 'react-native (core)'],
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
    description:
      'You have to smash as many sweets as possible within 50 seconds.',
    items: [
      '<a rel="noopener noreferrer" href="https://github.com/reime005/splintersweets" aria-label="Github Splinter Sweets Project">Open Source</a>',
    ],
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
    description:
      'Use your finger to drag and fling bubbles and destroy those with the same color',
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
    description:
      'Hit zombies with a hammer, and they will move faster and fast over time! Built in collaboration with Umur Coskun',
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

interface IProjectShowProps {
  data: {
    [key: string]: {
      childImageSharp: any;
    };
  };
}

export const ProjectShow = (props: IProjectShowProps) => {
  return (
    <Wrapper>
      <div style={{ width: '100%', maxWidth: 1000 }}>
        {data.map((d, i) => {
          let fluid;

          if (props.data[`image_${i}`]) {
            fluid = props.data[`image_${i}`].childImageSharp.fluid;
          }

          return (
            <ProjectShowHeader
              {...d}
              fluid={fluid}
              right={i % 2 === 0}
              key={d.title}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

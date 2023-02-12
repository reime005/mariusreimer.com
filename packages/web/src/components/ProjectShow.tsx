import React from 'react';
import styled from 'styled-components';
import { ProjectShowHeader, ProjectShowHeaderProps } from './ProjectShowHeader';
import { BGFirst } from '../assets/BGFirst';
import { BGSecond } from '../assets/BGSecond';
import { MobileGamesTitle } from '../assets/MobileGamesTitle';
import { SpaceAppsTitle } from '../assets/SpaceAppsTitle';
import { SelfieIdentTitle } from '../assets/SelfieIdentTitle';
import { ToniesTitle } from '../assets/ToniesTitle';

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

  img {
    margin: 0;
  }
`;

const data: ProjectShowHeaderProps[] = [
  {
    title: <ToniesTitle />,
    alt: 'mytonies® App',
    description: `I was leading the development of the mytonies® app for <a rel="noopener noreferrer" aria-label="tonies GmbH" href="https://tonies.com/">tonies®</a> at <a rel="noopener noreferrer" aria-label="Frozen Donkey GmbH" href="https://frozendonkey.com/">Frozen Donkey</a>.`,
    backgroundColor: '#d2000f',
    tags: ['React Native', 'iOS', 'Android'],
    link: {
      text: 'More',
      to: '/about',
    },
    bgComponent: <BGSecond fill="#000" />,
  },
  {
    title: <SelfieIdentTitle />,
    alt: 'Nect Selfie Ident',
    description: `I have worked on Germany's first, fully automated biometric self identification app at <a rel="noopener noreferrer" aria-label="Nect GmbH" href="https://nect.com/">Nect.</a> High performance, good user experience, strong security and data privacy were key features of the application.`,
    backgroundColor: '#59c2b1',
    tags: ['React Native', 'iOS', 'Android'],
    link: {
      text: 'More',
      to: '/about',
    },
    bgComponent: <BGFirst fill="#000" />,
  },
  {
    title: <SpaceAppsTitle />,
    alt: 'Space Devs Apps',
    description:
      'Check how many people are in space right now! I have worked on three different apps that leverage space data via the Space Devs API. The projects are open source with full CI/CD setup.',
    backgroundColor: 'rgb(125, 55, 55)',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    link: {
      text: 'More',
      to: '/project/spaceapps/',
    },
    bgComponent: <BGSecond fill="white" />,
  },
  {
    title: <MobileGamesTitle />,
    alt: 'Cross Platform Mobile Games',
    description:
      'In 2016-2017 I worked on different mobile apps using the cross platform framework libGDX. They were developed for both iOS / Android and some put open source. You may find a web version <a rel="noopener noreferrer" aria-label="Game web version of Hammerize" href="https://reime005.itch.io/hammerize">here.</a>',
    backgroundColor: '#2c6f7a',
    tags: ['Kotlin', 'libGDX', 'Java', 'iOS', 'Android'],
    link: {
      text: 'More',
      to: 'https://github.com/reime005/splintersweets',
    },
    bgComponent: <BGFirst fill="#e45858" />,
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
              key={d.alt}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

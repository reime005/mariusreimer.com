import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import Layout from '../components/layout';
import { Intro } from '../components/Styled';
import { HeadLine } from '../components/HeadLine';

interface Data {
  title: string;
  desc: string;
  date: string;
  orga: string;
  href: string;
  location?: string;
  imgSource?: string;
}

const data: Data[] = [
  {
    title: 'Computer Science Student (Bachelor)',
    orga: 'Ostfalia University',
    desc: '<p>Studies focused on Systems Engineering.</p>',
    location: 'Wolfenbuettel, Germany',
    date: '2011-2014',
    imgSource: require('../assets/ostfalialogo.png'),
    href: 'https://ostfalia.de',
  },
  {
    title: 'Bachelor Thesis',
    orga: 'Bertrandt',
    desc:
      '<p>Developed an embedded system that detects different car infotainment system.</p><ul><li>C/C++</li><li>Linux Shell Script</li></ul>',
    location: 'Wolfsburg, Germany',
    date: '2014',
    imgSource: require('../assets/bertrandtlogo.png'),
    href: 'https://bertrandt.com',
  },
  {
    title: 'Computer Science Student (Master)',
    orga: 'Ostfalia University',
    desc:
      '<p>Studies focused on Mobile and Systems Engineering (in-depth theory, complexity and algorithms).</p>',
    location: 'Wolfenbuettel, Germany',
    date: '2014-2017',
    imgSource: require('../assets/ostfalialogo.png'),
    href: 'https://ostfalia.de',
  },
  {
    title: 'Student Employee',
    orga: 'Bertrandt',
    desc:
      '<p>Worked as an engineer on automotive projects.</p><ul><li>C/C++</li><li>Python, MySQL</li><li>JavaScript, D3.js</li></ul>',
    location: 'Wolfsburg, Germany',
    date: '2014-2015',
    imgSource: require('../assets/bertrandtlogo.png'),
    href: 'https://bertrandt.com',
  },
  {
    title: 'Study Abroad',
    orga: 'University of Wisconsin-Parkside',
    desc: '<p>Semester abroad as a computer science masters student.</p>',
    location: 'Kenosha, WI, US',
    date: '2015',
    imgSource: require('../assets/uwplogo.png'),
    href: 'https://uwp.edu',
  },
  {
    title: 'Research Member',
    orga: 'Ostfalia University (Faculty Software Engineering)',
    desc:
      "<p>Supporting my professor`s work. Worked on my master theses on 'controlling a cyber physical system with Virtual Reality'.<ul><li>Java, Java EE</li><li>C#, Unity, Virtual Reality</li><li>Software Defined Networking</li></ul>",
    location: 'Wolfenbuettel, Germany',
    date: '2016-2017',
    imgSource: require('../assets/ostfalialogo.png'),
    href: 'https://siemens.com',
  },
  {
    title: 'Internship',
    orga: 'Siemens Corporate Technology',
    desc:
      '<p>Worked at Siemens Corporate Technology in a team on a robotics project.</p><ul><li>C#</li><li>Angular 2</li></ul>',
    location: 'Princeton, NJ, US',
    date: '2017',
    imgSource: require('../assets/siemenslogo.png'),
    href: 'https://siemens.com',
  },
  {
    title: 'Frontend/Mobile Engineer',
    orga: 'Nect GmbH',
    desc:
      "<p>Responsible for the React Native and React applications in a 5 to 60 people startup.</p><p>Apps had a rating of ~4.7 and more than 300k downloads.</p><p>Germany's first fully-automated biometric self-identification app.</p><ul><li>React, React Native and many Custom Native Modules</li><li>Strong focus on camera use cases (OpenCV and Tesseract OCR)</li><li>TypeScript, JavaScript</li><li>Objective C, Swift</li><li>Kotlin, Java</li><li>Docker, CI/CD, E2E Tests</li></ul>",
    location: 'Hamburg, Germany',
    date: '2018-2020',
    imgSource: require('../assets/nectlogo.png'),
    href: 'https://nect.com',
  },
  {
    title: 'React Native Developer (Freelancer)',
    orga: 'EWE AG',
    desc:
      "<p>Responsible for the React Native application in its full lifecycle.</p><p>Climate change and CO2 awareness are the challenges, that were solved by an intelligent tracking and social system.</p><ul><li>React Native</li><li>JavaScript</li><li>AWS</li><li>Bitrise, Fastlane</li></ul>",
    location: 'Oldenburg, Germany (remote)',
    date: '2021-2022',
    imgSource: require('../assets/codyo.webp'),
    href: 'https://codyo.app/',
  },
].reverse();

export const AboutPage = () => {
  return (
    <Layout>
      <Header />

      <main>
        <Intro style={{ flexDirection: 'row' }}>
          <HeadLine />

          <img
            src={require('../assets/marius-portrait.jpg')}
            width={150}
            height={154}
            style={{ borderRadius: 200 }}
          />
        </Intro>

        <TimeLine>
          {data.map((d, i) => {
            let className = i % 2 === 0 ? 'left' : 'right';

            return (
              <ContentContainer key={d.title} className={className}>
                <Content>
                  <ContentHeader>
                    <div style={{ display: 'block', flex: '0 auto' }}>
                      <a href={d.href} aria-label={d.title}>
                        <img src={d.imgSource} alt={d.title} />
                      </a>
                    </div>

                    <div>
                      <h2>{d.title}</h2>
                      <h3>{d.orga}</h3>
                      <h4>{d.date}</h4>
                      <h5
                        className="lighter"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          fontWeight: 600,
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faLocationArrow}
                          style={{
                            marginRight: 8,
                            color: 'var(--lighter)',
                          }}
                        />
                        {d.location}
                      </h5>
                    </div>
                  </ContentHeader>

                  <div dangerouslySetInnerHTML={{ __html: d.desc }} />
                </Content>
              </ContentContainer>
            );
          })}
        </TimeLine>
      </main>

      <Footer />
    </Layout>
  );
};

const ContentHeader = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
  }

  h2, h3, h4 {
    margin-bottom: 0.2em;
  }

  img {
    width: 115px;
    height: 115px;
    border-radius: 1rem;
    padding: 0.5rem;
    margin: 0;
    margin-right: 1.25rem;
    object-fit: cover;
  }

  @media screen and (max-width: 770px) {
    flex-direction: column;

    img {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

const TimeLine = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding-bottom: 50px;
  box-sizing: border-box;
  width: 100%;

  @media screen and (max-width: 570px) {
    margin-bottom: 24px;
    padding-bottom: 16px;
    padding-top: 16px;
  }

  :after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: var(--primaryLight);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -4px;

    @media screen and (max-width: 570px) {
      left: 28px;
    }
  }
`;

const Content = styled.article`
  padding: 24px;
  box-sizing: border-box;
  background-color: white;
  position: relative;
  border-radius: 2px;
  border-width: 2px;
  border-color: var(--primaryLight);
  border-style: solid;
  background-color: var(--listBG);
  box-shadow: 0px 0px 2px 1px var(--primaryLight);

  p {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  ul {
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

const ContentContainer = styled.div`
  padding: 15px 30px;
  position: relative;
  background-color: inherit;
  width: 50%;
  margin-bottom: -40px;

  @media screen and (max-width: 570px) {
    margin: auto;
  }

  &.left {
    left: 0;
  }

  &.right {
    left: 50%;

    :after {
      left: -13px;
    }
  }

  @media screen and (max-width: 570px) {
    width: 100%;
    padding-left: 50px;
    padding-right: 25px;

    &.left {
      :after {
        left: 15px;
      }
    }

    &.right {
      left: 0;

      :after {
        left: 15px;
      }
    }
  }
`;

export default AboutPage;

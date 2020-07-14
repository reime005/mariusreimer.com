import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import Layout from '../components/layout';
import { Intro } from '../components/Styled';
import { HeadLine } from '../components/HeadLine';

interface Data {
  title: string;
  desc: string;
  date: string;
  location?: string;
  imgSource?: string;
}

const data: Data[] = [
  {
    title: 'Computer Science Student (Bachelor)',
    desc: '<p>Studies focused on Systems Engineering.</p>',
    location: 'Wolfenbüttel, Germany',
    date: '2011-2014',
    imgSource: require('../assets/ostfalialogo.png'),
  },
  {
    title: 'Bachelor Thesis',
    desc:
      '<p>Developed an embedded system that detects different car infotainment system.</p><ul><li>C/C++</li><li>Linux Shell Script</li></ul>',
    location: 'Wolfsburg, Germany',
    date: '2014',
    imgSource: require('../assets/bertrandtlogo.png'),
  },
  {
    title: 'Computer Science Student (Master)',
    desc:
      '<p>Studies focused on Mobile and Systems Engineering (in-depth theory, complexity and algorithms).</p>',
    location: 'Wolfenbüttel, Germany',
    date: '2014-2017',
    imgSource: require('../assets/ostfalialogo.png'),
  },
  {
    title: 'Student Employee',
    desc:
      '<p>Worked as an engineer on automotive projects.</p><ul><li>C/C++</li><li>Python, MySQL</li><li>JavaScript, D3.js</li></ul>',
    location: 'Wolfsburg, Germany',
    date: '2014-2015',
    imgSource: require('../assets/bertrandtlogo.png'),
  },
  {
    title: 'Study Abroad',
    desc: '<p>Semester abroad as a computer science masters student.</p>',
    location: 'Kenosha, WI, US',
    date: '2015',
    imgSource: require('../assets/uwplogo.png'),
  },
  {
    title: 'Research Member',
    desc:
      "<p>Supporting my professor`s work. Worked on my master theses on 'controlling a cyber physical system with Virtual Reality'.<ul><li>Java, Java EE</li><li>C#, Unity, Virtual Reality</li><li>Software Defined Networking</li></ul>",
    location: 'Wolfenbüttel, Germany',
    date: '2016-2017',
    imgSource: require('../assets/ostfalialogo.png'),
  },
  {
    title: 'Internship',
    desc:
      '<p>Worked at Siemens Corporate Technology in a team on a robotics project.</p><ul><li>C#</li><li>Angular 2</li></ul>',
    location: 'Princeton, NJ, US',
    date: '2017',
    imgSource: require('../assets/siemenslogo.png'),
  },
  {
    title: 'Mobile Engineer',
    desc:
      "<p>Responsible for the React Native and React applications in a 5 to 60 people startup.</p><p>Apps had a rating of ~4.7 and more than 300k downloads.</p><p>Germany's first fully-automated biometric self-identification app.</p><ul><li>React, React Native and many Custom Native Modules</li><li>Strong focus on camera use cases (OpenCV and Tesseract OCR)</li><li>TypeScript, JavaScript</li><li>Objective C</li><li>Kotlin, Java</li><li>Docker, CI/CD, E2E Tests</li></ul>",
    location: 'Hamburg, Germany',
    date: '2018-now',
    imgSource: require('../assets/nectlogo.png'),
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
                    <img src={d.imgSource} />

                    <div>
                      <h2>{d.title}</h2>
                      <h4>{d.date}</h4>
                      <h5 className="lighter">{d.location}</h5>
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
    justify-content: space-between;
  }

  h5 {
    margin-bottom: 0;

    :before {
      font-family: 'Font Awesome 5 Free';
      font-weight: 700;
      content: '\f124';
      margin-right: 4px;
    }
  }

  h2 {
    margin-bottom: 16px;
  }

  h4 {
    margin-bottom: 8px;
  }

  img {
    width: 95px;
    height: 95px;
    border-radius: 8px;
    margin-right: 24px;
    margin-bottom: 0;
    object-fit: cover;
  }

  @media screen and (max-width: 770px) {
    flex-direction: column;

    img {
      margin-right: 0;
      margin-bottom: 24px;
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
    background-color: ${({ theme }) => theme.color.primaryLight};
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
  border-color: ${({ theme }) => theme.color.primaryLight};
  border-style: solid;
  background-color: ${({ theme }) => theme.color.listBG};
  box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.color.primaryLight};

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

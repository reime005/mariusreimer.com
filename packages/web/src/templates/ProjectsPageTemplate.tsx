import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import { BlogList, IconSwitch } from '@reime005/common';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { Pagination } from '../components/Pagination';
import Layout from '../components/layout';
import {
  Wordpress__PostConnection,
  Wordpress__Post,
} from '../../graphql-types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface Props {
  pageContext: {
    slug: string;
    title: string;
    featuredImagePath: string;
    description: string;
    mobileButtons?: {
      android: string;
      ios: string;
    };
    githubLink?: string;
    tags?: string;
  };
}

const ProjectsPageTemplate = (props: Props) => {
  return (
    <Layout>
      <Header />

      <main>
        <Container>
          <h1>{props.pageContext.title}</h1>
          <p>{props.pageContext.description}</p>
          <img
            src={require(props.pageContext.featuredImagePath)}
            style={{ width: 100, height: 75 }}
          />
        </Container>
      </main>

      <Footer />
    </Layout>
  );
};

const Container = styled.div`
  min-height: 50vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  max-width: 1000px;
  padding: 32px;
  font-size: 16px;
  line-height: 1.55em;
  width: 100%;
`;

export default ProjectsPageTemplate;

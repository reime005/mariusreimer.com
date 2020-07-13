import React from 'react';

import { graphql } from 'gatsby';
import { BlogContent } from '@reime005/common';
import Layout from '../components/layout';
import styled from 'styled-components';
import { DarkThemeSwitch } from '../components/DarkThemeSwitch';
import { Socials } from '../components/Socials';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Link = styled.a`
  cursor: pointer;
  margin: 32px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.25em;

  :before {
    content: '← ';
  }

  :hover {
    text-decoration: none;
    box-shadow: 0 2px 0 0 ${({ theme }) => theme.color.primary};
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 32px;
  padding-right: 32px;
`;

interface Props {
  scrollPercentage: number;
}

const BackLink = ({ blogIndex = 1 }) => {
  return (
    <Link
      style={{ marginLeft: 0, marginRight: 0, marginBottom: 8, marginTop: 8 }}
      href={`/blog/${blogIndex}`}
    >
      Back
    </Link>
  );
};

const PostTemplate = (props: any) => {
  return (
    <Layout>
      <Header />

      <main>
        <Wrapper>
          <BackLink blogIndex={props.pageContext.currentPage} />
          {/* <DarkThemeSwitch /> */}
        </Wrapper>

        <BlogContent item={props.data.wordpressPost} />

        <Wrapper>
          <BackLink blogIndex={props.pageContext.currentPage} />
          {/* <div style={{ display: 'flex' }}>
            <Socials />
          </div> */}
        </Wrapper>

        <Footer />
      </main>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      slug
      id
      content
      title
      excerpt
      date
      featured_media {
        source_url
      }
    }
  }
`;

import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
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

const MarkdownPostTemplate = (props: any) => {
  return (
    <Layout>
      <Header />

      <main>
        <Wrapper>
          <BackLink blogIndex={props.pageContext.currentPage} />
          {/* <DarkThemeSwitch /> */}
        </Wrapper>

        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <h2>{props.data.markdownRemark.frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
        {/* <BlogContent item={props.data.wordpressPost} /> */}

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

export default MarkdownPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

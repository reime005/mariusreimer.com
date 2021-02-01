import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import dateFormat from 'date-fns/format';

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
    box-shadow: 0 2px 0 0 var(--primary);
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  max-width: 50rem;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
`;

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

const Sub = styled.h2`
  margin-top: 0.5em;
  font-size: 1.125rem;
  color: var(--grey);
`;

const MarkdownPostTemplate = (props: any) => {
  return (
    <Layout>
      <Header />

      <main>
        <Wrapper>
          <BackLink blogIndex={props.pageContext.currentPage} />
        </Wrapper>

        <Wrapper style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <h1 data-testid="blog-title">
            {props.data.markdownRemark.frontmatter.title}
          </h1>

          <Sub>
            {dateFormat(
              new Date(props.data.markdownRemark.frontmatter.date),
              'MMMM d, yyyy',
            )}
            &nbsp;-&nbsp;
            {Math.ceil(
              props?.data?.markdownRemark?.fields?.readingTime?.minutes,
            ) || 0}
            &nbsp;min read
          </Sub>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        </Wrapper>

        <Wrapper>
          <BackLink blogIndex={props.pageContext.currentPage} />
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
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`;

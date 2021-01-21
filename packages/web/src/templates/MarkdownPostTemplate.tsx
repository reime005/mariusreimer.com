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
  align-items: center;
  align-self: center;
  justify-content: space-between;
  max-width: 900px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 32px;
  padding-right: 32px;
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

const SubH1 = styled.h2`
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 32px;
  line-height: 32px;
  color: var(--listItemFont);
`;

const MarkdownPostTemplate = (props: any) => {
  return (
    <Layout>
      <Header />

      <main>
        <Wrapper>
          <BackLink blogIndex={props.pageContext.currentPage} />
        </Wrapper>

        <div
          style={{
            padding: 0,
            paddingLeft: 24,
            paddingRight: 24,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 800,
            marginTop: 24,
            width: '100%',
          }}
        >
          <h1 data-testid="blog-title">
            {props.data.markdownRemark.frontmatter.title}
          </h1>

          <SubH1>
            {dateFormat(
              new Date(props.data.markdownRemark.frontmatter.date),
              'MMMM d, yyyy',
            )}
            &nbsp;-&nbsp;
            {Math.ceil(
              props?.data?.markdownRemark?.fields?.readingTime?.minutes,
            ) || 0}
            &nbsp;min read
          </SubH1>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          />
        </div>

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

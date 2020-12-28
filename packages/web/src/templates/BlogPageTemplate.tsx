import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import { BlogList, IconSwitch } from '@reime005/common';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { navigate } from 'gatsby';
import { Pagination } from '../components/Pagination';
import Layout from '../components/layout';
import {
  Wordpress__PostConnection,
  Wordpress__Post,
} from '../../graphql-types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Wordpress__PostEdge } from '@reime005/common/dist/src/types/graphql-types';

interface Props {
  pageContext: {
    pageCount: number;
    currentPage: number;
  };
  data: {
    allWordpressPost: Wordpress__PostConnection;
    allMarkdownRemark: any;
  };
}

const onClickItem = (item: Wordpress__Post) => {
  navigate(`/blog/id/${item.slug}`);
};

interface State {
  data: Array<Wordpress__PostEdge>;
}

class BlogPageTemplate extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const data: Wordpress__PostEdge[] = props.data.allMarkdownRemark.edges.map(
      ({ node }: any) => ({
        node: {
          title: node.frontmatter.title,
          excerpt: node.frontmatter.description,
          slug: node.frontmatter.slug,
          id: node.frontmatter.slug,
          date: node.frontmatter.date,
          featured_media: { source_url: node.frontmatter.cover_image },
          minRead: Math.ceil(node.fields.readingTime.minutes),
        },
      }),
    );

    this.state = {
      data,
    };
  }

  render() {
    return (
      <Layout>
        <Header />

        <main>
          <div style={{ width: '100%' }}>
            <BlogList onClickItem={onClickItem} data={this.state.data} />
          </div>

          <Pagination
            pageCount={this.props.pageContext.pageCount}
            currentPage={this.props.pageContext.currentPage}
          />
        </main>

        <Footer />
      </Layout>
    );
  }
}

export default BlogPageTemplate;

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
            cover_image
          }
          fields {
            readingTime {
              minutes
            }
          }
        }
      }
    }
  }
`;

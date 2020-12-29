import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { BlogList } from '@reime005/common';
import { navigate } from 'gatsby';
import { Pagination } from '../components/Pagination';
import Layout from '../components/layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Item } from '@reime005/common/dist/src/components/BlogListItem';

interface Props {
  pageContext: {
    pageCount: number;
    currentPage: number;
  };
  data: {
    allMarkdownRemark: { edges: unknown[] };
  };
}

const onClickItem = (item?: Item) => {
  navigate(`/blog/id/${item?.slug || ''}`);
};

interface State {
  data: {
    node: Item;
  }[];
}

class BlogPageTemplate extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const data = this.props.data.allMarkdownRemark.edges.map(
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

    this.setState({ data });
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

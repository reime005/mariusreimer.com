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
    limited: { edges: unknown[] };
    all: { edges: unknown[] };
  };
}

const onClickItem = (item?: Item) => {
  navigate(`/blog/id/${item?.slug || ''}`);
};

interface State {
  data: {
    node: Item;
  }[];
  allData: {
    node: Item;
  }[];
  searchResult: {
    node: Item;
  }[];
  searchValue: string;
}

class BlogPageTemplate extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      allData: [],
      searchResult: [],
      searchValue: '',
    };
  }

  componentDidMount() {
    const data = this.props.data.limited.edges.map(mapNode);
    const allData = this.props.data.all.edges.map(mapNode);

    this.setState({ data, allData });
  }

  render() {
    const { searchResult, searchValue, data } = this.state;

    return (
      <Layout>
        <Header />

        <main>
          <div
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <input
              type="text"
              placeholder="Search Blog"
              value={this.state.searchValue}
              onChange={e => {
                this.setState({ searchValue: e.target.value });

                const val = e.target.value.toLowerCase();

                const searchResult = this.state.allData.filter(
                  ({ node }) => node.title.toLowerCase().indexOf(val) != -1,
                );

                this.setState({ searchResult });
              }}
            />
          </div>

          <div
            style={{
              width: '100%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <BlogList
              onClickItem={onClickItem}
              data={searchValue ? searchResult : data}
            />
          </div>

          {!searchValue && (
            <Pagination
              pageCount={this.props.pageContext.pageCount}
              currentPage={this.props.pageContext.currentPage}
            />
          )}
        </main>

        <Footer />
      </Layout>
    );
  }
}

const mapNode = ({ node }: any) => {
  return {
    node: {
      html: node.html,
      title: node.frontmatter.title,
      excerpt: node.frontmatter.description,
      slug: node.frontmatter.slug,
      id: node.frontmatter.slug,
      date: node.frontmatter.date,
      featured_media: { source_url: node.frontmatter.cover_image },
      minRead: Math.ceil(node.fields.readingTime.minutes),
    },
  };
};

export default BlogPageTemplate;

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    limited: allMarkdownRemark(
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
    all: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          html
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

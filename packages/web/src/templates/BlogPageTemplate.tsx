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

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      console.error(args);

      func.apply(context, args);
    }, wait);
  };
};

class BlogPageTemplate extends Component<Props, State> {
  inputTimerRef: number;

  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      allData: [],
      searchResult: [],
      searchValue: '',
    };

    this.inputTimerRef = 0;

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const data = this.props.data.limited.edges.map(mapNode);
    const allData = this.props.data.all.edges.map(mapNode);

    this.setState({ data, allData });
  }

  componentWillUnmount() {
    this.reset();
  }

  reset() {
    if (this.inputTimerRef) {
      clearTimeout(this.inputTimerRef);
      this.inputTimerRef = 0;
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.reset();

      this.inputTimerRef = setTimeout(() => {
        this.inputTimerRef = 0;

        const searchResult = this.state.allData.filter(
          ({ node }) =>
            node.title
              .toLowerCase()
              .indexOf(this.state.searchValue.toLowerCase()) != -1,
        );

        this.setState({ searchResult });
      }, 50);
    }
  }

  onChange(e: any) {
    const value = e.target.value;

    this.setState({ searchValue: value }, () => {});
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
              onChange={this.onChange}
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

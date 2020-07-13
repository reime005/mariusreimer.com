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

    this.state = {
      data: props.data.allWordpressPost.edges.filter(
        (edge: Wordpress__PostEdge) => {
          if (
            edge.node.categories?.some((category: any) =>
              /blog/i.test(category.name),
            )
          ) {
            return true;
          }
        },
      ),
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
  query($skip: Int!, $limit: Int!) {
    allWordpressPost(
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          excerpt
          content
          categories {
            name
          }
          slug
          date
          featured_media {
            source_url
          }
        }
      }
    }
  }
`;

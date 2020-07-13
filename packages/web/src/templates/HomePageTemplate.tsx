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

class HomePageTemplate extends Component<Props> {
  render() {
    return (
      <Layout>
        <IconSwitch />
        <BlogList
          onClickItem={onClickItem}
          data={this.props.data.allWordpressPost.edges}
        />
        <Pagination
          pageCount={this.props.pageContext.pageCount}
          currentPage={this.props.pageContext.currentPage}
        />
      </Layout>
    );
  }
}

export default HomePageTemplate;

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

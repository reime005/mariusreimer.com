import React, { useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Text, ActivityIndicator, View } from 'react-native';
import { BlogList } from '../views/BlogList';
import { store } from '../state/GlobalStateProvider';
import { useNavigation } from '@react-navigation/native';

export const GraphBlogList = () => {
  const { navigate } = useNavigation();

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { first: 5 },
  });

  const context = useContext(store);

  if (loading && !Object.keys(data || {}).length) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'transparent', padding: 8 }}>
      {loading && <ActivityIndicator size="small" />}
      <BlogList
        data={data.posts.edges}
        onItemClick={({ id }) => {
          navigate('Post', { id });
          context?.dispatch({ type: 'POST_ITEM_CLICK', payload: { id } });
        }}
      />
    </View>
  );
};

const GET_POSTS = gql`
  query posts($first: Int) {
    tags {
      edges {
        node {
          name
        }
      }
    }
    posts(first: $first) {
      edges {
        node {
          id
          title
          date
          excerpt
          content
          featured_media: featuredImage {
            source_url: mediaItemUrl
          }
        }
      }
    }
  }
`;

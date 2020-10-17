import React, { useContext, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Text, ActivityIndicator, View } from 'react-native';
import { store } from '../state/GlobalStateProvider';
import { BlogContent } from '@reime005/common';

export const GraphBlogContent = () => {
  const context = useContext(store);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id: context?.state.currentPostID },
  });

  if (loading && !Object.keys(data || {}).length) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }

  // console.log(data);

  return (
    <View style={{ flex: 1 }}>
      {loading && <ActivityIndicator size="small" />}
      <BlogContent item={data.post} onScrollPercentage={setScrollPercentage} />
      {/* <ScrollBox scrollPercentage={scrollPercentage} /> */}
    </View>
  );
};

const GET_POST = gql`
  query post($id: ID!) {
    post(id: $id) {
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
`;

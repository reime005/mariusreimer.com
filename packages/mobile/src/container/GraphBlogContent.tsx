import React, { useContext, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Text, ActivityIndicator, View } from 'react-native';
import { BlogList } from '../views/BlogList';
import { store } from '../state/GlobalStateProvider';
import { useNavigation } from '@react-navigation/native';
import { BlogContent } from '@reime005/common';
import { ScrollBox } from '@reime005/common/src/components/ScrollBox';

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

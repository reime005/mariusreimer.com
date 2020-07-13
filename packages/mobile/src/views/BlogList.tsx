import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { BlogListItem } from '@reime005/common';

interface Props {
  onItemClick: ({ id }: { id: string }) => void | undefined;
  data: readonly any[] | null | undefined;
}

export const BlogList = (props: Props) => {
  return (
    <FlatList
      style={{ height: '100%', backgroundColor: 'transparent' }}
      data={props.data}
      contentContainerStyle={{ margin: 0 }}
      onEndReachedThreshold={0.5}
      keyExtractor={(item: any) => item.node.id}
      renderItem={({ item }: { item: any }) => {
        return (
          <BlogListItem item={item.node} onClickItem={props.onItemClick} />
        );
      }}
    />
  );
};

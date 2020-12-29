import React from 'react';
import { View } from 'react-native';
import { BlogListItem, Item, onClickItem } from './BlogListItem';
import { useGraphHelper } from '../utils/useGraphHelper';
import { useDimensions } from '../utils/useDimensions';
import styled from 'styled-components/native';

interface Props {
  data?: { node: Item }[];
  onClickItem: onClickItem;
}

const List = styled.FlatList`
  background-color: ${({ theme }) => theme.color.listBG};
`;

export const BlogList = (props: Props) => {
  const { change } = useGraphHelper();
  const { window } = useDimensions();

  if (!Array.isArray(props.data) || !props.data.length) {
    return null;
  }

  return (
    <View style={{ justifyContent: 'center' }}>
      <List
        key={window.width}
        style={{ height: '100%', padding: 24 }}
        contentContainerStyle={{
          display: 'flex',
          alignItems: 'center',
        }}
        data={props.data}
        numColumns={window.width > 570 ? 2 : 1}
        onEndReachedThreshold={0.5}
        onEndReached={change}
        keyExtractor={(item: any) => item.node.id}
        renderItem={({ item }: { item: any }) => {
          return (
            <BlogListItem item={item.node} onClickItem={props.onClickItem} />
          );
        }}
      />
    </View>
  );
};

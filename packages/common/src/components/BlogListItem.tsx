import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import entities from 'entities';
import { DateAndMinRead } from './DateAndMinRead';
import HTMLView from 'react-native-htmlview';
import { calculateMinutesToRead } from '../utils/calculateMinutesToRead';
import { useDimensions } from '../utils/useDimensions';
import { Wordpress__Post } from '../types/graphql-types';
import { useTheme } from '..';
import { darkTheme, lightTheme } from './theme';

interface Props {
  item: Wordpress__Post;
  onClickItem?: (item: Wordpress__Post) => void;
}

const Paragraph = styled.Text`
  color: ${props => props.theme.color.listItemFont};
  font-size: 12px;
  line-height: 20px;
  @media (min-width: 570px) {
    margin-bottom: 8px;
  }
`;

const H1 = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.h1.fontWeight};
  font-size: 20px;
  padding-bottom: 16px;
  letter-spacing: 0.25;
  line-height: 24px;
  color: ${({ theme }) => theme.color.listItemHeadline};
`;

const _Wrapper = styled.View`
  flex: 1;
  z-index: 2;
  border-radius: 3px;
  align-items: center;
  justify-content: flex-start;
  margin: 16px;
  max-width: 500px;
  background-color: ${({ theme }) => theme.color.backgroundColor2};
`;

const _WrapperMobile = styled(_Wrapper)`
  min-height: ${() => (Platform.OS === 'web' ? 'min-content' : 'auto')};
  /* min-height: 250px; */
  /* height: 100%; */
  margin: 0;
  margin-bottom: 24px;
`;

export const BlogListItem = (props: Props) => {
  const { window } = useDimensions();
  const { theme } = useTheme();

  let Wrapper = _Wrapper;

  if (window.width <= 575) {
    Wrapper = _WrapperMobile;
  }

  const isWide = window.width > 999;
  const item = props.item;

  const [minRead, setMinRead] = useState<number | null>(null);

  useEffect(() => {
    calculateMinutesToRead({ rawHTML: item.content || '' }).then(res =>
      setMinRead(res),
    );
  }, [item]);

  if (!item) {
    return null;
  }

  const splits = item.featured_media?.source_url?.split('/');

  const imageName = splits && splits[splits.length - 1];

  const uri = `${
    Platform.OS === 'web' ? '' : 'https://mariusreimer.com'
  }/images/${imageName}`;

  return (
    <Wrapper>
      <TouchableOpacity
        //@ts-ignore
        href={`/blog/id/${item.slug}`}
        accessibilityRole="link"
        testID="blog-header"
        style={{ flex: 1 }}
        onPress={() => props.onClickItem && props.onClickItem(props.item)}
      >
        <View
          style={{
            margin: 0,
            flex: 1,
            flexDirection: isWide ? 'row' : 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ImageBackground
            imageStyle={{
              resizeMode: 'cover',
              width: '100%',
              height: isWide ? 250 : 200, // the image height
              top: undefined,
              margin: 0,
            }}
            resizeMode="cover"
            resizeMethod="scale"
            style={{
              zIndex: -10,
              width: isWide ? 170 : '100%',
              height: isWide ? 250 : 200,
              borderTopLeftRadius: 3,
              borderBottomLeftRadius: isWide ? 3 : 0,
              borderBottomRightRadius: isWide ? 0 : 0,
              borderTopRightRadius: isWide ? 0 : 3,
              borderBottomWidth: isWide ? 0 : 1,
              borderBottomColor:
                theme === 'dark'
                  ? darkTheme.color.lightBorder
                  : lightTheme.color.lightBorder,
              paddingVertical: 0,
              overflow: 'hidden', // prevent image overflow of the container
            }}
            source={{ uri }}
          />

          <View
            style={{
              flex: 1,
              paddingVertical: 28,
              paddingHorizontal: 32,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <View>
              <H1 testID="blog-header-title">
                {entities.decodeHTML(item.title || '')}
              </H1>
            </View>

            <View
              style={{
                flex: 1,
                overflow: 'hidden',
                justifyContent: 'space-between',
              }}
            >
              <HTMLView
                value={(item.excerpt || '').replace('\n', '')}
                stylesheet={styles(theme)}
              />
              {
                <DateAndMinRead
                  date={new Date(item.date)}
                  minRead={minRead || 5}
                />
              }
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Wrapper>
  );
};

const styles = (theme?: 'light' | 'dark') =>
  StyleSheet.create({
    p: {
      fontFamily: 'Lato',
      fontSize: 14,
      lineHeight: 22,
      fontWeight: '400',
      color:
        theme === 'dark'
          ? darkTheme.color.listItemFont
          : lightTheme.color.listItemFont,
    },
  });

export default BlogListItem;

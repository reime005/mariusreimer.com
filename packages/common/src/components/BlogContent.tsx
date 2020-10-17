import dateFormat from 'date-fns/format';
import entities from 'entities';
import React, { useState } from 'react';
import {
  AccessibilityProps,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import { removeDuplicateOccurencies } from '../utils/removeDuplicateOccurencies';
import { renderNode } from '../utils/renderNode';
import { H1, SubH1 } from './Styled';
import { darkTheme, lightTheme } from './theme';
import { useTheme } from './ThemeProvider';

export interface BlogListItem {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface Props {
  item: BlogListItem;
  minRead?: number;
  onScrollPercentage?: (n: number) => void;
}

interface Data {
  type: 'open' | 'close' | 'text';
  text?: string;
  attribs?: string;
  name?: string;
}

const accessibilityTextProps: any =
  Platform.select({
    web: { accessibilityRole: 'heading' },
  }) || {};

const accessibilityArticleProps: any =
  Platform.select({
    web: { accessibilityRole: 'article' },
  }) || {};

export const BlogContent = (props: Props) => {
  const [min, setMin] = useState(0);

  return (
    <View
      //@ts-ignore
      {...accessibilityArticleProps}
      style={{
        padding: 0,
        paddingLeft: 24,
        paddingRight: 24,
        display: 'flex',
        flex: 1,
        maxWidth: 700,
        marginTop: 24,
        width: '100%',
        alignItems: 'center',
      }}
    >
      <ScrollView
        style={{ height: '100%', flex: 1, width: '100%' }}
        scrollEventThrottle={16}
        onScroll={e => {
          props.onScrollPercentage &&
            props.onScrollPercentage(
              (e.nativeEvent.contentOffset.y /
                e.nativeEvent.contentSize.height) *
                100,
            );
        }}
        showsVerticalScrollIndicator={false}
      >
        <H1 {...accessibilityTextProps} testID="blog-title">
          {entities.decodeHTML(props.item.title)}
        </H1>

        <SubH1 {...accessibilityTextProps} aria-level="2">
          {dateFormat(new Date(props.item.date), 'MMMM d, yyyy')}
          &nbsp;-&nbsp;
          {min} min read
        </SubH1>

        <Root onWordMinCount={setMin} data={props.item.content || ''} />
      </ScrollView>
    </View>
  );
};

interface RootProps {
  data: string;
  onWordMinCount: (n: number) => void;
}

const Root = (props: RootProps) => {
  const { theme } = useTheme();

  return (
    <HTMLView
      paragraphBreak={''}
      lineBreakAfterHeading={''}
      lineBreak={'\n'}
      style={{ width: '100%', flex: 1 }}
      value={removeDuplicateOccurencies(props.data, '\n')}
      stylesheet={styles(theme)}
      renderNode={node => renderNode(node, styles(theme))}
      onWordMinCount={props.onWordMinCount}
    />
  );
};

const styles = (theme?: 'light' | 'dark') =>
  StyleSheet.create({
    a: {
      fontWeight: '500',
      textDecorationLine: 'none',
      fontFamily: 'Lato',
      color: theme === 'dark' ? darkTheme.color.link : lightTheme.color.link,
    },
    ul: {
      marginTop: 0,
      marginBottom: 8,
      lineHeight: 24,
    },
    ol: {
      margin: 0,
      lineHeight: 24,
    },
    p: {
      fontFamily: 'Lato',
      fontSize: 18,
      flex: 1,
      margin: 0,
      padding: 0,
      lineHeight: 30,
      marginBottom: 24,
      fontWeight: '400',
      color: theme === 'dark' ? darkTheme.color.font : lightTheme.color.font,
    },
    li: {
      fontFamily: 'Lato',
      fontSize: 18,
      margin: 0,
      padding: 0,
      marginTop: 0,
      marginBottom: 8,
      lineHeight: 26,
      color: theme === 'dark' ? darkTheme.color.font : lightTheme.color.font,
    },
    h1: {
      fontFamily: 'Lato',
      fontSize: 28,
      flex: 1,
      fontWeight: '900',
      marginTop: 24,
      marginBottom: 34,
      color:
        theme === 'dark' ? darkTheme.color.headLine : lightTheme.color.headLine,
    },
    h2: {
      fontFamily: 'Lato',
      marginTop: 21,
      marginBottom: 16,
      lineHeight: 24,
      fontSize: 24,
      flex: 1,
      fontWeight: '900',
      color:
        theme === 'dark' ? darkTheme.color.headLine : lightTheme.color.headLine,
    },
    h3: {
      fontFamily: 'Lato',
      marginTop: 16,
      marginBottom: 16,
      flex: 1,
      fontSize: 22,
      fontWeight: '900',
      color:
        theme === 'dark' ? darkTheme.color.headLine : lightTheme.color.headLine,
    },
    h4: {
      fontFamily: 'Lato',
      marginTop: 16,
      marginBottom: 16,
      fontSize: 18,
      fontWeight: '900',
      color:
        theme === 'dark' ? darkTheme.color.headLine : lightTheme.color.headLine,
    },
    blockquote: {
      margin: 24,
      paddingLeft: 5,
      color: '#282828',
      fontStyle: 'italic',
    },
    cite: {
      fontSize: 16,
      borderWidth: 0,
      borderLeftColor: 'transparent',
    },
    em: {
      fontWeight: '700',
    },
    strong: {
      fontWeight: '700',
    },
    img: {},
    div: {},
    span: {
      fontFamily: 'Lato',
      fontSize: 18,
    },
  });

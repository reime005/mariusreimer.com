import * as React from 'react';

import { Gist } from '../components/Gist';
import { View, Text, Linking } from 'react-native';
import entities from 'entities';
import AutoSizedImage from 'react-native-htmlview/AutoSizedImage';

import { SyntaxCode } from '../components/SyntaxCode';
import { IframeWrapper } from '../components/IframeWrapper';
import { IframeView } from '../components/IframeView';
import { Quote, Cite, Caption, Paragraph, Code } from '../components/Styled';

export function renderNode(node, styles) {
  if (node.name === 'a') {
    return (
      <Text
        href={node.attribs.href}
        accessibilityRole="link"
        onPress={() => Linking.openURL(node.attribs.href || '')}
      >
        {entities.decodeHTML(node.children[0].data)}
      </Text>
    );
  }

  if (/^h[1-9]/.test(node.name)) {
    return (
      <Text
        style={styles[node.name] || {}}
        accessibilityRole="heading"
        aria-level={node.name.substr(1)}
      >
        {node.children[0].data}
      </Text>
    );
  }

  if (
    node.name === 'p' &&
    node.children &&
    node.children[0] &&
    node.children[0].name === 'script' &&
    node.children[0].attribs &&
    node.children[0].attribs.src
  ) {
    try {
      let id = node.children[0].attribs.src.split(/reime005\/|.js/)[1];
      return <Gist id={id} />;
    } catch (e) {
      console.warn(e);
    }
  }

  if (node.name === 'blockquote') {
    try {
      let title = '';
      let cite = '';

      node.children.forEach(ab => {
        try {
          if (ab.name === 'p') {
            if (typeof ab.children[0].data === 'string') {
              title = entities.decodeHTML(ab.children[0].data);
            } else {
              title = entities.decodeHTML(ab.children[0].children[0].data);
            }
          } else if (ab.name === 'cite') {
            cite = entities.decodeHTML(ab.children[0].data);
          }
        } catch (e) {
          console.warn(e);
        }
      });

      return (
        <View
          style={{
            flex: 1,
            margin: 24,
            marginTop: 0,
            flexDirection: 'column',
            paddingLeft: 16,
            borderLeftColor: 'grey',
            borderLeftWidth: 3,
            borderStyle: 'solid',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              paddingTop: 3,
              paddingBottom: 5,
            }}
          >
            <Quote>{title}</Quote>
            {!!cite && <Cite>{cite}</Cite>}
          </View>
        </View>
      );
    } catch (e) {
      console.warn(e);
    }
  }

  if (
    node.name === 'pre' &&
    node.attribs &&
    node.attribs.lang &&
    node.children.length
  ) {
    try {
      return (
        <SyntaxCode
          rawCode={entities.decodeHTML(node.children[0].data)}
          language={node.attribs.lang}
        />
      );
    } catch (e) {
      console.warn(e);
    }
  }

  if (
    node.name === 'p' &&
    node.children &&
    node.children[0] &&
    node.children[0].name === 'iframe' &&
    node.children[0].attribs &&
    node.children[0].attribs.src
  ) {
    return (
      <View style={{ flex: 1 }}>
        <IframeWrapper
          maxWidth={570}
          maxHeight={Number(node.children[0].attribs.height)}
        >
          <IframeView src={node.children[0].attribs.src} />
        </IframeWrapper>
      </View>
    );
  }

  if (
    node.name === 'pre' &&
    node.attribs &&
    (node.attribs['data-enlighter-language'] ||
      node.attribs.class === 'EnlighterJSRAW') &&
    node.children.length
  ) {
    try {
      return (
        <SyntaxCode
          rawCode={entities.decodeHTML(node.children[0].data)}
          language={
            node.attribs['data-enlighter-language'] === 'null'
              ? 'java'
              : 'javascript'
          }
        />
      );
    } catch (e) {
      console.warn(e);
    }
  }

  if (node.name == 'script' && node.attribs && node.attribs.src) {
    try {
      let id = node.attribs.src.split(/reime005\/|.js/)[1];
      console.warn(id);
      return <Gist id={id} />;
    } catch (e) {
      console.warn(e);
    }
  }

  if (
    ((node.name === 'div' && node.attribs.class === 'wp-block-image') ||
      node.name === 'p' ||
      node.name === 'a') &&
    node.children &&
    node.children.length &&
    node.children[0].name === 'figure'
  ) {
    const img = (
      <AutoSizedImage
        source={{ uri: node.children[0].children[0].attribs.src }}
        style={{ zIndex: 10, maxWidth: 570 }}
      />
    );

    let subtitle: any = null;

    if (
      node.children[0].children[1] &&
      node.children[0].children[1].name === 'figcaption'
    ) {
      subtitle = (
        <Caption>
          {entities.decodeHTML(node.children[0].children[1].children[0].data)}
        </Caption>
      );
    }

    return (
      <View
        style={{
          flexDirection: 'column',
          marginBottom: 24,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {img}
        {subtitle}
      </View>
    );
  }

  if (
    (node.name === 'figure' || node.name === 'p') &&
    node.children &&
    node.children.length &&
    node.children[0].name === 'img'
  ) {
    const img = (
      <AutoSizedImage
        source={{ uri: node.children[0].attribs.src }}
        style={{ maxWidth: 570 }}
      />
    );

    let subtitle: any = null;

    if (node.children[1] && node.children[1].name === 'figcaption') {
      subtitle = (
        <Caption>
          {entities.decodeHTML(node.children[1].children[0].data)}
        </Caption>
      );
    }

    return (
      <View
        style={{
          flexDirection: 'column',
          marginBottom: 24,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {img}
        {subtitle}
      </View>
    );
  }

  if (
    node.name === 'code' &&
    node.children &&
    node.children[0] &&
    node.children[0].data
  ) {
    const d = node.children[0].data;

    // more than one line of codess
    if ((d.match(/\n/g) || []).length > 1) {
      return (
        <SyntaxCode
          rawCode={entities.decodeHTML(d)}
          language={node.attribs.language === 'null' ? 'javascript' : 'bash'}
        />
      );
    }

    return (
      <Paragraph>
        &nbsp;
        <Code>&nbsp;{entities.decodeHTML(node.children[0].data)}&nbsp;</Code>
        &nbsp;
      </Paragraph>
    );
  }

  try {
    // empty blocks
    if (
      node.name === undefined &&
      node.data.replace(/\n/g, '').trim().length === 0
    ) {
      return null;
    }
  } catch (e) {
    console.warn(e);
  }
}

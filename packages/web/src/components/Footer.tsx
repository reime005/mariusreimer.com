import React from 'react';
import styled from 'styled-components';

import { Socials } from './Socials';

const Text = styled.p`
  font-family: 'Lato';
  font-size: 14px;
  color: var(--font);
  margin: 0;
  line-height: 2em;

  @media screen and (max-width: 570px) {
    text-align: center;
  }
`;

const Item = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 570px) {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

const Wrapper = styled.div`
  padding: 16px;
  margin-top: 16px;
  margin-left: 32px;
  margin-right: 32px;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-top-color: var(--lightBorder);
  border-top-width: 1px;

  @media screen and (max-width: 570px) {
    margin: 0;
    margin-top: 24px;
    padding: 0;
    flex-direction: column;
    min-height: 125px;
  }
`;

const Container = styled.footer`
  display: flex;
  max-width: 1200px;
  flex: 1;

  @media screen and (max-width: 570px) {
    flex-direction: column;
    padding-left: 32px;
    padding-right: 32px;
    align-items: center;
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Item>
          <Text>
            Copyright © {new Date().getFullYear()}&nbsp;∙&nbsp;Marius Reimer
          </Text>
        </Item>

        <Item>
          <Text>
            Open Source on&nbsp;
            <a href="https://github.com/reime005/mariusreimer.com">Github</a>
          </Text>
        </Item>

        <Item>
          <Text>
            <a href="/privacy-policy">Privacy Policy</a>
          </Text>
        </Item>

        <Item style={{ flexDirection: 'row' }}>
          <Socials />
        </Item>
      </Container>
    </Wrapper>
  );
};

import React from 'react';
import styled from 'styled-components';

import { Link as GLink } from 'gatsby';
import { DarkThemeSwitch } from './DarkThemeSwitch';

const Link = styled(GLink)`
  font-weight: 900;
  color: var(--font);
  line-height: 1.25em;

  :visited {
    color: inherit;
  }

  :hover,
  &.activeLink {
    box-shadow: 0 2px 0 0 var(--primary);
    color: var(--primary);
    text-decoration: none;
  }
`;

const Item = styled.li`
  margin: 0;
  margin-left: 1.3em;
  margin-right: 1.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 570px) {
    margin-top: 1.6em;
    margin-bottom: 1.6em;
    font-size: 18px;
  }
`;

const ContactLink = styled.a`
  background-color: var(--primary);
  color: white;
  font-weight: 500;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
  padding-bottom: 7px;
  border-radius: 6px;
`;

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 570px) {
    flex-direction: column;
    min-height: 125px;
  }
`;

export const Menu = () => {
  return (
    <Wrapper>
      <Item>
        <Link activeClassName="activeLink" to="/about/">
          About
        </Link>
      </Item>

      <Item>
        <Link activeClassName="activeLink" to="/blog/1/">
          Blog
        </Link>
      </Item>

      <Item>
        <ContactLink href="mailto:reimerm.dev@gmail.com">Contact</ContactLink>
      </Item>

      <Item>
        <DarkThemeSwitch />
      </Item>
    </Wrapper>
  );
};

import React from 'react';
import styled from 'styled-components';
import { useDimensions } from '@reime005/common';

import { Link as GLink } from 'gatsby';
import { DarkThemeSwitch } from './DarkThemeSwitch';

const Link = styled(GLink)`
  font-weight: 900;
  color: ${({ theme }) => theme.color.font};
  line-height: 1.25em;

  :visited {
    color: inherit;
  }

  :hover,
  &.activeLink {
    box-shadow: 0 2px 0 0 ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
  }
`;

const Text = styled.div`
  font-family: 'Lato';
  font-size: 14px;
  color: ${({ theme }) => theme.color.grey};
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
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  font-weight: 500;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 5px;
  padding-bottom: 7px;
  border-radius: 6px;
`;

const _Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const _WrapperMobile = styled(_Wrapper)`
  flex-direction: column;
  min-height: 125px;
`;

export const Menu = () => {
  const { window } = useDimensions();

  let Wrapper = _WrapperMobile;

  if (window.width > 570) {
    Wrapper = _Wrapper;
  }

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

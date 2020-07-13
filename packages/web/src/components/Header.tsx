import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDimensions } from '@reime005/common';

import { Menu } from './Menu';
import { Logo } from '../assets/Logo';
import { View } from 'react-native';
import { Link } from 'gatsby';
import { Socials } from './Socials';
import { Footer } from './Footer';

const Text = styled.span`
  font-family: 'Lato';
  font-size: 14px;
  color: ${({ theme }) => theme.color.grey};
`;

const Item = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const _Wrapper = styled.header`
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const _WrapperMobile = styled(_Wrapper)`
  flex-direction: column;
  min-height: 125px;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  box-sizing: border-box;
  flex: 1;

  @media screen and (max-width: 570px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
`;

const _MobileButton = styled.button`
  background-repeat: no-repeat;
  background-image: url(${require('../assets/bars.svg')});
  background-position: 50% 50%;
  background-size: 16px;
  width: 36px;
  min-width: 36px;
  height: 30px;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.color.menuBG};
  cursor: pointer;
  z-index: 4;
`;

const Overlay = styled.div`
  z-index: 3;
  width: 80vw;
  height: 80vh;
  top: 20vh;
  right: 0px;
  position: absolute;
  display: flex;
  background-color: ${({ theme }) => theme.color.backgroundColor2};
  padding: 40px;
  justify-content: flex-start;
  align-items: center;
  border-top-left-radius: 8px;
  transition: transform 0.5s linear;
  -webkit-box-shadow: -2px -2px 4px 0px ${({ theme }) => theme.color.primaryLight};
  -moz-box-shadow: -2px -2px 4px 0px ${({ theme }) => theme.color.primaryLight};
  box-shadow: -2px -2px 4px 0px ${({ theme }) => theme.color.primaryLight};
  transform: translateX(0px);
  flex-direction: column;
`;

export const Header = () => {
  const { window } = useDimensions();

  const [showMobile, setShowMobile] = useState(false);
  const toggleShowMobile = () => setShowMobile(!showMobile);

  useEffect(() => {
    const elements = document.getElementsByTagName('body');

    if (elements && elements.length) {
      elements[0].className = showMobile ? 'mobile' : '';
    }
  }, [showMobile]);

  let Wrapper = _WrapperMobile;
  let MobileButton = _MobileButton;

  if (window.width > 570) {
    Wrapper = _Wrapper;
    MobileButton = null;
  }

  if (showMobile) {
    return (
      <Wrapper>
        <Overlay>
          <div style={{ flex: 1 }}>
            <Menu />
          </div>
          <Footer />
        </Overlay>
        <Inner>
          <div style={{ flex: 1 }}>
            <a href="/">
              <Logo />
            </a>
          </div>

          <MobileButton id="mobileButton" onClick={toggleShowMobile} />
        </Inner>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Inner>
        <div style={{ flex: 1 }}>
          <a href="/">
            <Logo />
          </a>
        </div>

        {MobileButton ? (
          <MobileButton id="mobileButton" onClick={toggleShowMobile} />
        ) : (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingHorizontal: 16,
            }}
          >
            <Menu />
          </View>
        )}
      </Inner>
    </Wrapper>
  );
};

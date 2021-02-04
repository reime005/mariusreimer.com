import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Menu } from './Menu';
import { Logo } from '../assets/Logo';
import { Footer } from './Footer';

const Wrapper = styled.header`
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

  @media screen and (max-width: 570px) {
    flex-direction: column;
    min-height: 125px;
  }
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

const MobileButton = styled.button`
  background-repeat: no-repeat;
  background-image: url(${require('../assets/bars.svg')});
  background-position: 50% 50%;
  background-size: 16px;
  width: 36px;
  min-width: 36px;
  height: 30px;
  border-radius: 4px;
  border: none;
  background-color: var(--menuBG);
  cursor: pointer;
  z-index: 4;

  @media screen and (min-width: 571px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0;

  @media screen and (max-width: 570px) {
    display: none;
  }
`;

const Overlay = styled.div`
  z-index: 3;
  width: 80vw;
  height: 80vh;
  top: 20vh;
  right: 0px;
  position: absolute;
  display: flex;
  background-color: var(--backgroundColor2);
  padding: 40px;
  justify-content: flex-start;
  align-items: center;
  border-top-left-radius: 8px;
  transition: transform 0.5s linear;
  -webkit-box-shadow: -2px -2px 4px 0px var(--primaryLight);
  -moz-box-shadow: -2px -2px 4px 0px var(--primaryLight);
  box-shadow: -2px -2px 4px 0px var(--primaryLight);
  transform: translateX(0px);
  flex-direction: column;
`;

export const Header = () => {
  const [showMobile, setShowMobile] = useState(false);
  const toggleShowMobile = () => setShowMobile(!showMobile);

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
            <a href="/" aria-label="Back To Main">
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
          <a href="/" aria-label="Back To Main">
            <Logo />
          </a>
        </div>

        <MobileButton id="mobileButton" onClick={toggleShowMobile} />

        <MenuWrapper>
          <Menu />
        </MenuWrapper>
      </Inner>
    </Wrapper>
  );
};

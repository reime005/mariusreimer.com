import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '@reime005/common';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { getItem, setItem } from '../utils/storageHelper';

const Wrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  :checked + label {
    background: #aaa;
  }

  :checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`;

const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 60px;
  height: 30px;
  background: grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 100px;
  position: relative;

  :after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 700;
    content: '\f124';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 20px;
    transition: 0.3s;
  }

  :active:after {
    width: 20px;
  }
`;

export const DarkThemeSwitch = () => {
  const { theme, toggleTheme, setTheme } = useTheme();

  const isDark = theme === 'dark';

  useEffect(() => {
    const preferredTheme = getItem('theme');

    if (preferredTheme === 'dark' || preferredTheme === 'light') {
      setTheme(preferredTheme);
    }
    /* eslint-disable-next-line */
  }, []);

  useEffect(() => {
    setItem('theme', theme);
  }, [theme]);

  return (
    <Wrapper data-test-id="switch">
      <Input
        type="checkbox"
        id="switch"
        checked={!isDark}
        onChange={toggleTheme}
      />
      <Label for="switch">
        {isDark && (
          <>
            <div style={{ width: 24, height: 24 }} />
            <FontAwesomeIcon
              icon={faSun}
              style={{
                width: 18,
                height: 18,
                margin: 0,
                color: '#ffd803',
                zIndex: 2,
              }}
            />
          </>
        )}

        {!isDark && (
          <>
            <FontAwesomeIcon
              icon={faMoon}
              style={{
                width: 18,
                height: 18,
                margin: 0,
                color: '#ffd803',
                zIndex: 2,
              }}
            />
            <div style={{ width: 18, height: 18 }} />
          </>
        )}
      </Label>
    </Wrapper>
  );
};

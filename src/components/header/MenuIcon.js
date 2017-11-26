import React, { Component } from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

const MenuContainer = styled.div`
  position: relative;
  right: 25px;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Icon = styled.div`
  position: relative;
  height: 20px;
  width: 30px;
  cursor: pointer;
  z-index: 10;
`;

const MenuLine = props => css`
  background-color: ${props.theme.lightAccent};
  height: 3px;
  width: 100%;
  border-radius: 2px;
  position: absolute;
  left: 0;
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const Line1 = styled.span`
  ${MenuLine};
  top: 0;
`;

const Line1Open = css`
  transform: translateY(10px) translateY(-50%) rotate(-135deg);
`;

const Line2 = styled.span`
  ${MenuLine};
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Line2Open = css`
  opacity: 0;
`;

const Line3 = styled.span`
  ${MenuLine};
  bottom: 0;
`;

const Line3Open = css`
  transform: translateY(-10px) translateY(50%) rotate(135deg);
`;

const MenuIcon = props => (
  <MenuContainer onClick={() => props.toggleOpen()}>
    <Icon>
      <Line1 className={props.isOpen ? Line1Open : ''} />
      <Line2 className={props.isOpen ? Line2Open : ''} />
      <Line3 className={props.isOpen ? Line3Open : ''} />
    </Icon>
  </MenuContainer>
);

export default MenuIcon;

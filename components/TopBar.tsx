import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Colors, Shadows, Sizes, Transitions } from './styles/styles'
import { HeaderContainer } from './shared/headings'
import { AccountButton } from "../components/account/AccountButton";

export function TopBar() {
  return (
    <Header>
      <HeaderContainer>
        <HeaderNav>
          <ToMain>
            Utopia Labs
            <ToMainBottom>
              Made with<Handshaking>&#9829;</Handshaking> by Q
            </ToMainBottom>
          </ToMain>
        
        </HeaderNav>
    
      </HeaderContainer>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  width: 100%;
  height: ${Sizes.headerHeight};
  background-color: ${Colors.White};
  box-shadow: ${Shadows.main};
  z-index: 100;
`

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
`

const ToMain = styled.a`
  display: flex;
  flex-direction: column;
  width: fit-content;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  transition: ${Transitions.all};
  &:hover {
    color: ${Colors.Yellow[500]};
  }
`

const ToMainBottom = styled.span`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: center;
  width: fit-content;
  font-size: 10px;
  line-height: 14px;
  font-weight: 500;
`

const Handshaking = styled.span`
  letter-spacing: -0.3em;
`



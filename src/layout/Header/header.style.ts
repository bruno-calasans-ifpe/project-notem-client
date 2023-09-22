/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import fixContentWidth from '../../styles/fixContentWidth'

export const Container = styled.header`
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  /* parallax */
  background-image: url('./imgs/beach2.svg');
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: left top;
`

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${fixContentWidth()}
`

export const LogoArea = styled.div`
  /* img {
    border-radius: 50%;
  } */
`

export const MenuArea = styled.nav`
  /* span {
    font-weight: bold;
  } */
`

export const BottomHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  ${fixContentWidth()}
`

export const WelcomeMsgArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-grow: 1;

  #msg {
    text-align: center;
    font-family: var(--font3);
    font-size: x-large;
  }
`

export const ObsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 60px;
`

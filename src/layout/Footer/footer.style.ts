/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: var(--bgColor4o3);
`
export const UpperFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 100%;
  flex-grow: 2;
`
export const LinksArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const Lists = styled.div`
  display: flex;
  gap: 10px;
`

export const FollowArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  width: 100%;
  flex-grow: 1;
`

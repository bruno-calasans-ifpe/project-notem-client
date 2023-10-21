/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import fixContentWidth from '../../styles/fixContentWidth'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px 30px;
  width: 90%;
  border-radius: 4px;
  overflow: hidden;
  ${fixContentWidth('1000px')}
`

export const HeaderArea = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContentArea = styled.div`
  width: 100%;
`

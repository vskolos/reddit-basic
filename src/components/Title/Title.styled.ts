import styled from 'styled-components'
import { TitleType } from './Title'

interface ITitleProps {
  type: TitleType
}

export const Title = styled.p<ITitleProps>`
  margin-block: 0;
  font-weight: 400;
  font-size: ${(props) => (props.type === TitleType.Page ? 20 : 16)}px;
  line-height: ${(props) => (props.type === TitleType.Page ? 23 : 19)}px;

  @media (min-width: 1024px) {
    font-size: ${(props) => (props.type === TitleType.Page ? 28 : 20)}px;
    line-height: ${(props) => (props.type === TitleType.Page ? 33 : 23)}px;
  }
`

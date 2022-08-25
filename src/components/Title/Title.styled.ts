import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ETitleType } from './Title'

interface ITitleProps {
  type: ETitleType
}

export const Title = styled.p<ITitleProps>`
  margin-block: 0;
  font-weight: 400;
  font-size: ${(props) => (props.type === ETitleType.Page ? 20 : 16)}px;
  line-height: ${(props) => (props.type === ETitleType.Page ? 23 : 19)}px;

  @media (min-width: 1024px) {
    font-size: ${(props) => (props.type === ETitleType.Page ? 28 : 20)}px;
    line-height: ${(props) => (props.type === ETitleType.Page ? 33 : 23)}px;
  }
`

export const TitleLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

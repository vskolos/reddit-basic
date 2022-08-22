import styled from 'styled-components'

export const Image = styled.div`
  width: 100%;
  height: 100%;

  &:empty {
    width: auto;
    height: auto;
  }

  & > img,
  & > svg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

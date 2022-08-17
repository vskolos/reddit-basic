import styled from 'styled-components'

export const Backdrop = styled.div`
  padding: 60px;
  position: fixed;
  display: grid;
  justify-items: center;
  align-items: center;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0 0 0 / 0.5);
  cursor: pointer;
  overflow: auto;
  z-index: 500;
`

export const Post = styled.div`
  padding: 52px 60px;
  background-color: var(--white);
  cursor: initial;
`

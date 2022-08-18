import styled from 'styled-components'

export const Layout = styled.div`
  margin-inline: auto;
  max-width: 1400px;
  display: grid;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 31px;
  }

  @media (min-width: 1540px) {
    gap: 29px;
  }
`

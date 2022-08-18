import styled from 'styled-components'

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 20px;
  list-style: none;

  @media (min-width: 1024px) {
    padding-block: 20px;
    background-color: var(--white);
    gap: 0;
  }
`

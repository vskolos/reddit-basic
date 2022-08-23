import styled from 'styled-components'
import Button from '../Button/Button'

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

export const Item = styled.li`
  display: grid;
`

export const MoreButton = styled(Button)`
  width: 100%;
  padding: 17px 50px;
  justify-self: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--white);
  background-color: var(--orange);

  @media (min-width: 576px) {
    width: auto;
  }
`

import styled from 'styled-components'
import Button from '../Button/Button'

export const List = styled.ul`
  position: absolute;
  padding: 0;
  margin: 0;
  display: grid;
  background-color: var(--white);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  list-style: none;
  overflow: hidden;
  z-index: 100;
`

export const Item = styled.li`
  position: relative;

  &:not(:nth-last-child(2)):not(:last-child) {
    margin-bottom: -1px;
  }

  &:not(:nth-last-child(2)):not(:last-child)::after {
    position: absolute;
    bottom: 0;
    content: '';
    width: calc(100% - 40px);
    left: 20px;
    border-bottom: 1px solid var(--grayEC);
  }
`

export const ItemButton = styled(Button)`
  width: 100%;
  justify-content: start;
  padding: 12px 20px;

  &:hover {
    background-color: var(--grayEC);
  }
`

export const CloseButton = styled(ItemButton)`
  justify-content: center;
  background-color: var(--grayD9);
`

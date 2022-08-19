import styled from 'styled-components'
import Button from '../Button/Button'
import Image from '../Image/Image'
import Title from '../Title/Title'
import VotesCounter from '../VotesCounter/VotesCounter'

export const Card = styled.div`
  position: relative;
  display: grid;
  background-color: var(--white);
  border-radius: 7px;

  @media (min-width: 1024px) {
    padding: 20px 92px;
    min-height: 148px;
    grid-template-columns: 190px 1fr auto 70px;
    align-items: center;
    gap: 38px;
    background: none;
  }

  @media (min-width: 1540px) {
    padding-left: 72px;
    padding-right: 45px;
  }
`

export const Info = styled.div`
  padding: 22px 20px 13px;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: start;
  align-items: center;
  gap: 7px 6px;

  @media (min-width: 1024px) {
    padding: 0;
    order: 1;
  }
`

export const CreatedAt = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: var(--gray99);
  grid-column: 2;

  @media (min-width: 1024px) {
    grid-row: 2;
    grid-column: 1;
    font-size: 14px;
    line-height: 16px;
  }
`

export const PublishedLabel = styled.span`
  display: none;

  @media (min-width: 1024px) {
    display: initial;
  }
`

export const CardTitle = styled(Title)`
  display: -webkit-box;
  grid-column: span 2;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;

  @media (min-width: 1024px) {
    grid-row: 1;
    max-width: 540px;
    -webkit-line-clamp: 1;
  }

  @media (min-width: 1540px) {
    max-width: 672px;
  }

  &::before {
    position: absolute;
    inset: 0;
    content: '';
  }
`

export const CardImage = styled(Image)`
  max-height: 178px;

  @media (min-width: 1024px) {
    max-height: 107px;
  }
`

export const Controls = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;

  @media (min-width: 1024px) {
    justify-self: center;
    padding: 0;
    order: 3;
  }
`

export const CommentsButton = styled(Button)`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: var(--grayC4);

  @media (min-width: 1024px) {
    display: none;
  }
`

export const CardVotesCounter = styled(VotesCounter)`
  position: relative;
  z-index: 50;
`

export const Actions = styled.div`
  display: flex;
  gap: 15px;

  @media (min-width: 1024px) {
    display: none;
  }
`

export const Dropdown = styled.div`
  position: absolute;
  top: 17px;
  right: 14px;

  @media (min-width: 1024px) {
    position: static;
    order: 2;
  }
`

export const MenuButton = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 15px;

  &:hover {
    background-color: var(--grayF4);
  }

  &:focus-visible {
    background-color: var(--grayF4);
    outline: none;
  }

  @media (min-width: 1024px) {
    transform: rotate(90deg);
  }
`

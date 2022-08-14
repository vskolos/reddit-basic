import styled from 'styled-components'
import Button from '../Button/Button'
import Search from '../Search/Search'
import Title from '../Title/Title'
import UserLink from '../UserLink/UserLink'

export const Header = styled.header`
  display: grid;
  align-items: center;
  grid-template-rows: auto minmax(46px, auto) auto;
  gap: 15px;

  @media (min-width: 1024px) {
    padding: 40px 40px 0;
    gap: 27px;
    grid-template-columns: auto auto 1fr;
    grid-template-rows: none;
  }

  @media (min-width: 1540px) {
    padding: 75px 0 0;
  }
`

export const Info = styled.div`
  padding: 14px 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 14px;
  background-color: var(--white);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 7px 7px;

  @media (min-width: 1024px) {
    order: 3;
    padding: 0;
    justify-self: end;
    grid-auto-flow: column;
    gap: 30px;
    background: none;
    box-shadow: none;
  }

  @media (min-width: 1540px) {
    gap: 50px;
  }
`

export const HeaderSearch = styled(Search)`
  @media (min-width: 1024px) {
    order: 2;
    width: 280px;
  }

  @media (min-width: 1540px) {
    width: 360px;
  }
`

export const MessagesButton = styled(Button)`
  @media (min-width: 1024px) {
    gap: 7px;
  }

  & > span {
    min-width: 15px;
    padding: 2px;
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    color: var(--white);
    background-color: var(--orange);
    border-radius: 50%;

    @media (min-width: 1024px) {
      min-width: 22px;
      padding: 3px;
      font-size: 14px;
      line-height: 16px;
    }
  }

  & > div > svg {
    width: 20px;
    height: 16px;
  }
`

export const HeaderUserLink = styled(UserLink)`
  @media (min-width: 1024px) {
    order: 3;
  }
`

export const HeaderTitle = styled(Title)`
  padding-inline: 20px;
  align-self: end;

  @media (min-width: 1024px) {
    padding-inline: 0;
    align-self: center;
  }
`

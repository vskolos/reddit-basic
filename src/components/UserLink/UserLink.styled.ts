import styled, { css } from 'styled-components'
import { EUserLinkType } from './UserLink'

export const Link = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  gap: 10px;
`

export const Avatar = styled.div<{ type: EUserLinkType }>`
  & > svg {
    display: block;
    width: ${({ type }) => (type === EUserLinkType.Header ? 30 : 20)}px;
    height: ${({ type }) => (type === EUserLinkType.Header ? 30 : 20)}px;

    ${({ type }) =>
      type === EUserLinkType.Header &&
      css`
        @media (min-width: 1024px) {
          width: 50px;
          height: 50px;
        }
      `}
  }
`

export const Name = styled.span<{ type: EUserLinkType }>`
  ${({ type }) =>
    type === EUserLinkType.Header
      ? css`
          display: none;

          @media (min-width: 1024px) {
            display: initial;
            font-size: 20px;
            line-height: 23px;
          }
        `
      : css`
          font-size: 10px;
          line-height: 12px;
          color: var(--orange);

          @media (min-width: 1024px) {
            font-size: 14px;
            line-height: 16px;
          }
        `}
`

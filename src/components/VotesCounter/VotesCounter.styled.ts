import styled from 'styled-components'

export const Votes = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 7px;
  }
`

export const Count = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: var(--grayC4);
`

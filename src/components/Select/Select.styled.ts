import styled from 'styled-components'

export const Select = styled.button`
  position: relative;
  padding: 13px 37px 13px 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: var(--white);
  border-radius: 7px;
  border: none;
  cursor: pointer;

  @media (min-width: 1024px) {
    padding: 0;
    gap: 3px;
    background: none;
  }
`

export const Icon = styled.div`
  & > svg {
    display: block;
    display: block;
    @media (min-width: 1024px) {
      width: 16px;
      height: 16px;
    }
  }
`

export const Text = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: var(--orange);

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 23px;
  }
`

export const Arrow = styled.div`
  position: absolute;
  right: 20px;

  @media (min-width: 1024px) {
    position: static;
  }

  & > svg {
    display: block;

    @media (min-width: 1024px) {
      width: 14px;
      height: 8px;
    }
  }
`

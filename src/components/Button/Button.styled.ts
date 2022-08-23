import styled from 'styled-components'

export const Button = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  border-radius: 0;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export const Icon = styled.div`
  & > svg,
  & > img {
    display: block;
  }
`

export const Text = styled.span`
  font-size: 12px;
  line-height: 14px;
`

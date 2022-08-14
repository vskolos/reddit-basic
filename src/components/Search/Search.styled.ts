import styled from 'styled-components'

export const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  position: absolute;
  left: 16px;
  z-index: 1;

  @media (min-width: 1024px) {
    left: 27px;
  }

  & > svg {
    display: block;

    @media (min-width: 1024px) {
      width: 19px;
      height: 19px;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 8px 8px 31px;
  font-size: 12px;
  line-height: 14px;
  color: var(--grayC4);
  background-color: var(--grayF4);
  border: none;
  border-radius: 30px;

  @media (min-width: 1024px) {
    padding: 13px 40px 13px 57px;
    font-size: 20px;
    line-height: 23px;
    background-color: var(--white);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
`

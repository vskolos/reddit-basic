import styled from 'styled-components'
import Button from '../Button/Button'

export const Form = styled.form`
  display: grid;
`

export const TextArea = styled.textarea`
  min-height: 89px;
  padding: 16px 18px;
  font-size: 16px;
  line-height: 19px;
  border: 1px solid var(--grayD9);
  border-radius: 0;
  resize: none;

  &::placeholder {
    color: var(--gray99);
  }
`

export const SubmitButton = styled(Button)`
  width: 100%;
  padding: 17px 50px;
  justify-self: end;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--white);
  background-color: var(--orange);

  @media (min-width: 576px) {
    width: auto;
  }
`

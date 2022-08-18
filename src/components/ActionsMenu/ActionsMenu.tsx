import React from 'react'
import ReactDOM from 'react-dom'
import useActionsMenuStyle from '../../hooks/useActionsMenuStyle'
import { EIcon } from '../Icon/Icon'
import * as S from './ActionsMenu.styled'

interface IActionsMenuProps {
  container: React.RefObject<HTMLDivElement>
  isOpen: boolean
  onClose: () => void
}

export default function ActionsMenu({
  container,
  isOpen = false,
  onClose,
}: IActionsMenuProps) {
  const [actionsMenuStyle] = useActionsMenuStyle(container)
  const modalRoot = document.querySelector('#modal_root')
  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <S.List style={actionsMenuStyle}>
          <S.Item>
            <S.ItemButton icon={EIcon.Comments} text="Комментарии" />
          </S.Item>
          <S.Item>
            <S.ItemButton icon={EIcon.Share} text="Поделиться" />
          </S.Item>
          <S.Item>
            <S.ItemButton icon={EIcon.Hide} text="Скрыть" />
          </S.Item>
          <S.Item>
            <S.ItemButton icon={EIcon.Save} text="Сохранить" />
          </S.Item>
          <S.Item>
            <S.ItemButton icon={EIcon.Alert} text="Пожаловаться" />
          </S.Item>
          <S.Item>
            <S.CloseButton text="Закрыть" onClick={onClose} />
          </S.Item>
        </S.List>
      )}
    </>,
    modalRoot
  )
}

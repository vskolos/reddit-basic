import React from 'react'
import { generateRandomString } from '../../../../../utils/react/generateRandomIndex'
import { GenericList } from '../../../../GenericList'
import {
  CommentsIcon,
  HideIcon,
  ReportIcon,
  SaveIcon,
  ShareIcon,
} from '../../../../Icons'
import styles from './menuitemslist.css'

export function MenuItemsList() {
  const menuItemClassName = styles.menuItem
  const dividerClassName = styles.divider
  const closeButtonClassName = styles.closeButton

  return (
    <div className={styles.menuItemsList}>
      <GenericList
        list={[
          {
            id: generateRandomString(),
            icon: <CommentsIcon />,
            text: 'Комментарии',
            className: menuItemClassName,
            As: 'button',
          },
          {
            id: generateRandomString(),
            text: '',
            className: dividerClassName,
            As: 'div',
          },
          {
            id: generateRandomString(),
            icon: <ShareIcon />,
            text: 'Поделиться',
            className: menuItemClassName,
            As: 'button',
          },
          {
            id: generateRandomString(),
            text: '',
            className: dividerClassName,
            As: 'div',
          },
          {
            id: generateRandomString(),
            icon: <HideIcon />,
            text: 'Скрыть',
            className: menuItemClassName,
            As: 'button',
          },
          {
            id: generateRandomString(),
            text: '',
            className: dividerClassName,
            As: 'div',
          },
          {
            id: generateRandomString(),
            icon: <SaveIcon />,
            text: 'Сохранить',
            className: menuItemClassName,
            As: 'button',
          },
          {
            id: generateRandomString(),
            text: '',
            className: dividerClassName,
            As: 'div',
          },
          {
            id: generateRandomString(),
            icon: <ReportIcon />,
            text: 'Пожаловаться',
            className: menuItemClassName,
            As: 'button',
          },
          {
            id: generateRandomString(),
            text: '',
            className: dividerClassName,
            As: 'div',
          },
          {
            id: generateRandomString(),
            text: 'Закрыть',
            className: closeButtonClassName,
            As: 'button',
          },
        ]}
      />
    </div>
  )
}

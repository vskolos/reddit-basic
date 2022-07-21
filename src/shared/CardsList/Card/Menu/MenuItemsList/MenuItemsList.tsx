import React from 'react'
import { generateRandomString } from '../../../../../utils/react/generateRandomIndex'
import { GenericList } from '../../../../GenericList'
import { EIcon, Icon } from '../../../../Icon'
import styles from './menuitemslist.css'

interface IMenuItemsListProps {
  postId: string
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <div className={styles.menuItemsList}>
      <GenericList
        list={[
          {
            id: generateRandomString(),
            icon: <Icon name={EIcon.Comments} />,
            text: 'Комментарии',
            className: styles.menuItem,
            dividerClassName: styles.divider,
            appearanceClassName: styles.hideOnMobile,
            As: 'button',
          },
          {
            id: generateRandomString(),
            icon: <Icon name={EIcon.Share} />,
            text: 'Поделиться',
            className: styles.menuItem,
            dividerClassName: styles.divider,
            appearanceClassName: styles.hideOnMobile,
            As: 'button',
          },
          {
            id: generateRandomString(),
            icon: <Icon name={EIcon.Hide} />,
            text: 'Скрыть',
            className: styles.menuItem,
            dividerClassName: styles.divider,
            As: 'button',
          },
          {
            id: generateRandomString(),
            icon: <Icon name={EIcon.Save} />,
            text: 'Сохранить',
            className: styles.menuItem,
            dividerClassName: styles.divider,
            appearanceClassName: styles.hideOnMobile,
            As: 'button',
          },
          {
            id: generateRandomString(),
            icon: <Icon name={EIcon.Report} />,
            text: 'Пожаловаться',
            className: styles.menuItem,
            As: 'button',
          },
          {
            id: generateRandomString(),
            text: 'Закрыть',
            className: styles.closeButton,
            As: 'button',
          },
        ]}
      />
    </div>
  )
}

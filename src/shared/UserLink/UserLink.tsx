import classNames from 'classnames'
import React from 'react'
import { Icon, EIcon } from '../Icon'
import styles from './userlink.css'

export enum UserLinkType {
  Header,
  Post,
}

interface IUserLinkProps {
  type: UserLinkType
  href?: string
}

export function UserLink({ type, href = '#' }: IUserLinkProps) {
  return (
    <a
      href={href}
      className={classNames(
        styles.link,
        { [styles.link_header]: type === UserLinkType.Header },
        { [styles.link_post]: type === UserLinkType.Post }
      )}
    >
      <div
        className={classNames(
          styles.avatar,
          { [styles.avatar_header]: type === UserLinkType.Header },
          { [styles.avatar_post]: type === UserLinkType.Post }
        )}
      >
        <Icon type={EIcon.Anonymous} />
      </div>
      <span
        className={classNames(
          styles.name,
          { [styles.name_header]: type === UserLinkType.Header },
          { [styles.name_post]: type === UserLinkType.Post }
        )}
      >
        Аноним
      </span>
    </a>
  )
}

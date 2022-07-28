import React from 'react'
import styles from './title.css'
import classNames from 'classnames'

export enum TitleType {
  Page = 'h2',
  Post = 'h3',
}

interface ITitleProps {
  As: TitleType
  text: string
}

export function Title({ As, text }: ITitleProps) {
  return (
    <As
      className={classNames(
        styles.title,
        { [styles.title_page]: As === TitleType.Page },
        { [styles.title_post]: As === TitleType.Post }
      )}
    >
      {text}
    </As>
  )
}

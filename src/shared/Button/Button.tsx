import classNames from 'classnames'
import React from 'react'
import { noop } from '../../utils/noop'
import styles from './button.css'

interface IButtonClasses {
  button?: string
  icon?: string
  text?: string
}

interface IButtonProps {
  classes?: IButtonClasses
  icon?: React.ReactNode
  text?: string
  onClick?: () => void
}

export function Button({ classes, icon, text, onClick = noop }: IButtonProps) {
  return (
    <button
      className={classNames(styles.button, classes?.button)}
      onClick={onClick}
    >
      {icon && (
        <div className={classNames(styles.icon, classes?.icon)}>{icon}</div>
      )}
      {text && (
        <span className={classNames(styles.text, classes?.text)}>{text}</span>
      )}
    </button>
  )
}

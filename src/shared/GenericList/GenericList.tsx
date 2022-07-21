import React from 'react'
import styles from './genericlist.css'

interface IItem {
  id: string
  icon?: React.ReactNode
  text: string
  onClick?: (id: string) => void
  className?: string
  As?: 'a' | 'li' | 'button' | 'div'
  href?: string
}

interface IGenericListProps {
  list: IItem[]
}

const NOOP = () => {}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(
        ({ As = 'div', icon, text, onClick = NOOP, className, id, href }) => (
          <As
            className={className}
            onClick={() => onClick(id)}
            key={id}
            href={href}
          >
            {icon}
            {text}
          </As>
        )
      )}
    </>
  )
}

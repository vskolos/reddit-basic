import classNames from 'classnames'
import React from 'react'

interface IItem {
  id: string
  icon?: React.ReactNode
  text: string
  className?: string
  dividerClassName?: string
  appearanceClassName?: string
  onClick?: (id: string) => void
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
        ({
          As = 'div',
          icon,
          text,
          className,
          dividerClassName,
          appearanceClassName,
          onClick = NOOP,
          id,
          href,
        }) => {
          return (
            <As
              className={classNames(
                className,
                dividerClassName,
                appearanceClassName
              )}
              onClick={() => onClick(id)}
              key={id}
              href={href}
            >
              {icon}
              {text}
            </As>
          )
        }
      )}
    </>
  )
}

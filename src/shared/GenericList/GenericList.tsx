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
          dividerClassName,
          appearanceClassName,
          onClick = NOOP,
          className,
          id,
          href,
        }) => {
          let finalClassName = className
          if (dividerClassName) finalClassName += ` ${dividerClassName}`
          if (appearanceClassName) finalClassName += ` ${appearanceClassName}`
          return (
            <As
              className={finalClassName}
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

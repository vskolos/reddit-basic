import React, { useEffect, useState } from 'react'
import useWindowSize from './useWindowSize'

export default function useActionsMenuStyle(
  button: React.RefObject<HTMLDivElement>
) {
  const [windowSize] = useWindowSize()
  const [actionsMenuStyle, setActionsMenuStyle] = useState({})

  useEffect(() => {
    const rect = button.current?.getBoundingClientRect()
    let transform = ''

    if (rect && rect.right && rect.bottom) {
      if (windowSize.width >= 1024)
        transform = `translateX(calc(50% - ${rect.width / 2}px))`
      setActionsMenuStyle({
        top: rect.bottom + 10,
        right: windowSize.width - rect.right,
        transform: transform,
      })
    }
  }, [windowSize])

  return [actionsMenuStyle]
}

import React, { useEffect, useState } from 'react'
import useWindowSize from './useWindowSize'

export function useDropdownStyle(container: React.RefObject<HTMLDivElement>) {
  const [windowSize] = useWindowSize()
  const [dropdownStyle, setDropdownStyle] = useState({})

  useEffect(() => {
    const rect = container.current?.getBoundingClientRect()
    let transform = ''

    if (rect && rect.right && rect.bottom) {
      if (windowSize.width >= 1024)
        transform = `translateX(calc(50% - ${rect.width / 2}px))`
      setDropdownStyle({
        top: rect.bottom + 10,
        right: windowSize.width - rect.right,
        transform: transform,
      })
    }
  }, [windowSize])

  return [dropdownStyle]
}

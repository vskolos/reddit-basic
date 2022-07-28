import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDropdownStyle } from '../../hooks/useDropdownStyle'
import styles from './dropdown.css'

interface IDropdownProps {
  button: React.ReactNode
  children?: React.ReactNode
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

const NOOP = () => {}

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen)
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen])

  const container = useRef<HTMLDivElement>(null)
  const [dropdownStyle] = useDropdownStyle(container)

  const modalNode = document.querySelector('#modal_root')
  if (!modalNode) return null

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container} ref={container}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div className={styles.listContainer} style={dropdownStyle}>
            <div
              className={styles.list}
              onClick={() => setIsDropdownOpen(false)}
            >
              {children}
            </div>
          </div>,
          modalNode
        )}
    </div>
  )
}

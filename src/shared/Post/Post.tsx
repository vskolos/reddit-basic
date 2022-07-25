import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { usePostModal } from '../../hooks/usePostModal'
import { CommentForm } from '../CommentForm'
import styles from './post.css'

interface IPostProps {
  onClose?: () => void
}

export function Post({ onClose }: IPostProps) {
  const [modal] = usePostModal(onClose)

  const modalNode = document.querySelector('#modal_root')
  if (!modalNode) return null

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={modal}>
      <h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis,
        delectus.
      </h2>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          repellat blanditiis reprehenderit nesciunt perspiciatis obcaecati ut
          quae deserunt illum quis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          repellat blanditiis reprehenderit nesciunt perspiciatis obcaecati ut
          quae deserunt illum quis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          repellat blanditiis reprehenderit nesciunt perspiciatis obcaecati ut
          quae deserunt illum quis!
        </p>
      </div>

      <CommentForm />
    </div>,
    modalNode
  )
}

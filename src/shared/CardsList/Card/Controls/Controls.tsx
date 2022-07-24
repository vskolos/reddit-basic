import React from 'react'
import { CommentsButton } from './CommentsButton'
import styles from './controls.css'
import { KarmaCounter } from './KarmaCounter'
import { SaveButton } from './SaveButton'
import { ShareButton } from './ShareButton'

interface IControlsProps {
  karma: number
  comments: number
}

export function Controls({ karma, comments }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter karma={karma} />
      <CommentsButton comments={comments} />

      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  )
}

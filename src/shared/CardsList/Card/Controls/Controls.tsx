import React from 'react'
import { CommentsButton } from './CommentsButton'
import styles from './controls.css'
import { KarmaCounter } from './KarmaCounter'
import { SaveButton } from './SaveButton'
import { ShareButton } from './ShareButton'

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentsButton />

      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  )
}

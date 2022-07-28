import React from 'react'
import styles from './icon.css'
import { AnonymousIcon } from './Icons/AnonymousIcon'
import { CommentsIcon } from './Icons/CommentsIcon'
import { DownArrowIcon } from './Icons/DownArrowIcon'
import { DownvoteIcon } from './Icons/DownvoteIcon'
import { EnvelopeIcon } from './Icons/EnvelopeIcon'
import { EyeIcon } from './Icons/EyeIcon'
import { PencilIcon } from './Icons/PencilIcon'
import { SaveIcon } from './Icons/SaveIcon'
import { SearchIcon } from './Icons/SearchIcon'
import { ShareIcon } from './Icons/ShareIcon'
import { ThreeDotsIcon } from './Icons/ThreeDotsIcon'
import { UpvoteIcon } from './Icons/UpvoteIcon'

export enum EIcon {
  Anonymous,
  Comments,
  DownArrow,
  Downvote,
  Envelope,
  Eye,
  Pencil,
  Save,
  Search,
  Share,
  ThreeDots,
  Upvote,
}

interface IIconProps {
  type: EIcon
}

export function Icon({ type }: IIconProps) {
  switch (type) {
    case EIcon.Anonymous:
      return <AnonymousIcon />
    case EIcon.Comments:
      return <CommentsIcon />
    case EIcon.DownArrow:
      return <DownArrowIcon />
    case EIcon.Downvote:
      return <DownvoteIcon />
    case EIcon.Envelope:
      return <EnvelopeIcon />
    case EIcon.Eye:
      return <EyeIcon />
    case EIcon.Pencil:
      return <PencilIcon />
    case EIcon.Save:
      return <SaveIcon />
    case EIcon.Search:
      return <SearchIcon />
    case EIcon.Share:
      return <ShareIcon />
    case EIcon.ThreeDots:
      return <ThreeDotsIcon />
    case EIcon.Upvote:
      return <UpvoteIcon />
  }
}

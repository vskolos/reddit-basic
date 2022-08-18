import React from 'react'
import AlertIcon from './Icons/AlertIcon'
import AnonymousIcon from './Icons/AnonymousIcon'
import CloseIcon from './Icons/CloseIcon'
import CommentsIcon from './Icons/CommentsIcon'
import DownArrowIcon from './Icons/DownArrowIcon'
import DownvoteIcon from './Icons/DownvoteIcon'
import EnvelopeIcon from './Icons/EnvelopeIcon'
import EyeIcon from './Icons/EyeIcon'
import HideIcon from './Icons/HideIcon'
import PencilIcon from './Icons/PencilIcon'
import SaveIcon from './Icons/SaveIcon'
import SearchIcon from './Icons/SearchIcon'
import ShareIcon from './Icons/ShareIcon'
import ThreeDotsIcon from './Icons/ThreeDotsIcon'
import UpvoteIcon from './Icons/UpvoteIcon'

export enum EIcon {
  Alert,
  Anonymous,
  Close,
  Comments,
  DownArrow,
  Downvote,
  Envelope,
  Eye,
  Hide,
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

export default function Icon({ type }: IIconProps) {
  switch (type) {
    case EIcon.Alert:
      return <AlertIcon />
    case EIcon.Anonymous:
      return <AnonymousIcon />
    case EIcon.Close:
      return <CloseIcon />
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
    case EIcon.Hide:
      return <HideIcon />
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

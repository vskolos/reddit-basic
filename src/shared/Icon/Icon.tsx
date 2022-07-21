import React from 'react'
import {
  CommentsIcon,
  HideIcon,
  MenuIcon,
  ReportIcon,
  SaveIcon,
  ShareIcon,
} from './Icons'

export enum EIcon {
  Comments,
  Hide,
  Menu,
  Report,
  Save,
  Share,
}

interface IIconProps {
  name: EIcon
}

export function Icon({ name }: IIconProps) {
  switch (name) {
    case EIcon.Comments:
      return <CommentsIcon />
    case EIcon.Hide:
      return <HideIcon />
    case EIcon.Menu:
      return <MenuIcon />
    case EIcon.Report:
      return <ReportIcon />
    case EIcon.Save:
      return <SaveIcon />
    case EIcon.Share:
      return <ShareIcon />
  }
}

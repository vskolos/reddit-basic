import React from 'react'
import {
  AnonIcon,
  CommentsIcon,
  HideIcon,
  MenuIcon,
  ReportIcon,
  SaveIcon,
  ShareIcon,
} from './Icons'

export enum EIcon {
  Anon,
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
    case EIcon.Anon:
      return <AnonIcon />
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

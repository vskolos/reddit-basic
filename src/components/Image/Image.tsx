import React from 'react'
import isImageUrl from '../../utils/isImageUrl'
import * as S from './Image.styled'

interface IImageProps {
  className?: string
  src?: string
  alt?: string
}

export default function Image({
  className,
  src = '',
  alt = 'image',
}: IImageProps) {
  return (
    <S.Image className={className}>
      {src && isImageUrl(src) && <img src={src} alt={alt} />}
    </S.Image>
  )
}

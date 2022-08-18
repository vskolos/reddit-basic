import isUrl from './isUrl'

export default function isImageUrl(text: string): boolean {
  return isUrl(text) && !!text.match(/(jpg|jpeg|webp|png|gif)$/i)
}

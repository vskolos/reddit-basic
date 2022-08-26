import { createStoreon, StoreonStore } from 'storeon'

type CommentStore = {
  comment: string
}

let comment = (store: StoreonStore<CommentStore>) => {
  store.on('@init', () => ({ comment: '' }))
  store.on('comment/set', (_, text) => {
    console.log(text)
    return { comment: text }
  })
}

export const storeon = createStoreon([comment])

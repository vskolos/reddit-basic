import { assoc } from '../js/assoc'

export const generateRandomString = () =>
  Math.random().toString(36).slice(2, 15)

export const assingId = assoc('id', generateRandomString)

export const generateId = <O extends object>(obj: O) => assingId(obj)

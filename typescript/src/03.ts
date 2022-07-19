interface MyArray<T> {
  [n: number]: T

  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T,
    initialValue?: T
  ): T
}

const initialValue = 0
const array: MyArray<number> = [1, 2, 3]
array.reduce((accumulator, value) => accumulator + value, initialValue)

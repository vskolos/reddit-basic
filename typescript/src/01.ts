type ConcatFn = (a: string, b: string) => string

const concat: ConcatFn = (a: string, b: string): string => a + b

console.log(concat('Hello ', 'World'))

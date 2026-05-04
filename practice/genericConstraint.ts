const logLength = <T extends {length: number}>(input: T): number => {
  return input.length
}

const length = logLength([1, 3, 3, 3]);
console.log(length);
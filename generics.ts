type GenericArray<T> = Array<T>;


// const friends: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
// const friends: Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];
const friends: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

// const rollNumber: number[] = [4, 7, 11];
// const rollNumber: Array<number> = [4, 7, 11];
const rollNumber: GenericArray<number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];
// const isEligibleList: Array<boolean> = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type User = {name: string, age: number}

// const userList: GenericArray<{name: string, age: number}> = [
//   {
//     name: 'Mr. X',
//     age: 23
//   },
//   {
//     name: 'Mr. Y',
//     age: 24
//   }
// ]
const userList: GenericArray<User> = [
  {
    name: 'Mr. X',
    age: 23
  },
  {
    name: 'Mr. Y',
    age: 24
  }
]


// Generic on tuple

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ['20', '30'];
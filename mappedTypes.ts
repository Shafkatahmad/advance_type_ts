// mapped types

const arrayOfNum: number[] = [1, 4, 6];
const arrayOfString: string[] = ['1', '4', '6'];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

type AreaOfNum = {
  height: number;
  width: number;
}

type height = AreaOfNum['height'];

// type AreaOfString = {
//   height: string;
//   width: string;
// }

type Area<T> = {
  [key in keyof T]: T[key];
}

const area1: Area<{height: string; Width: number}> = {
  height: '50',
  Width: 20
}
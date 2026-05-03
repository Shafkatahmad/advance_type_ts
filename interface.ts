type User = {
  name: string;
  age: number;
}

interface IUser {
  name: string;
  age: number
}

type Role = {
  role: "admin" | "user";
};

const user1: User = {
  name: 'Mr X',
  age: 23
}

const userWithRole: User & Role = {
  name: 'Mr Y',
  age: 27,
  role: "admin"
}

const user2: IUser = {
  name: 'Mr Z',
  age: 24
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user3: IUserWithRole = {
  name: 'Mr X',
  age: 23,
  role: 'admin'
}


// Interface in Function
type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number
}

const add: IAdd = (num1, num2) => num1 + num2;


type Friends = string[];


interface IFriends {
  [index: number]: string
}

const friends: IFriends = ['A', 'B', 'C'];


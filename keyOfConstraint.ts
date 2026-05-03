// keyOf : type operator

type RichPloplesVehicle = {
  car: string;
  bike: string;
  cng: string
}

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPloplesVehicle;

const myVehicle: MyVehicle2 = "bike";

type User = {
  id: number;
  name: string;
  address: {
    city: string
  }
}

const user: User = {
  id: 222,
  name: 'Mezba',
  address: {
    city: 'ctg'
  }
}

// const myName = user.name;
const myName = user['name'];
const myId = user['id'];
const myAddress = user['address'];

// const getPropertyFromObj = <X, Y extends keyof X>(obj: X, key: Y) => {
//   return obj[key]
// }
const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key]
}

const result1 = getPropertyFromObj(user, "name")
console.log(result1)

const product = {
  brand: "HP"
}
const result2 = getPropertyFromObj(product, "brand")
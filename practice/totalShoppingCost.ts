type CartItem = {
  name: string;
  price: number;
  quantity?: number
}

const cartItem: CartItem = {
  name: 'mouse',
  price: 200,
  quantity: 2,
}

const calculateTotal = ({price, quantity = 1}: CartItem) => {
  return price * quantity
}

const totalPrice = calculateTotal(cartItem);
// console.log(totalPrice);

// 2
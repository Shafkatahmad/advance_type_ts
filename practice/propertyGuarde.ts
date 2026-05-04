const product = { id: 101, name: "Keyboard", price: 50 };

const getProductProp = <T, K extends keyof T>(object: T, key: K) => {
  return object[key]
}

const property = getProductProp(product, 'price');
console.log(property);
// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  const i = { ...item };
  item[price] = price;
  return i;
};

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  const c = cart.length ? [...cart] : [];
  c.push(item);
  return c;
};

module.exports = setPrice;
module.exports = addToCart;

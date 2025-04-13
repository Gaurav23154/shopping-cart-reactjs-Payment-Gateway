const productsArray = [
  {
    id: "1",
    title: "Coffee",
    price: 80,
  },
  {
    id: "2",
    title: "Sunglasses",
    price: 453,
  },
  {
    id: "3",
    title: "Camera",
    price: 24599,
  },
  { id: "4", title: "Laptop", price: 74999 },
  { id: "5", title: "Phone", price: 24999 },
  { id: "6", title: "Battery", price: 700 },
  { id: "7", title: "Sunscreen", price: 999 },
  { id: "8", title: "ToothBrush", price: 99 },
  { id: "9", title: "rice", price: 39 },
  { id: "10", title: "pulse", price: 199 },
  { id: "11", title: "Palm Oil", price: 499 },
];
function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  if (productData === undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }
  return productData;
}
export { productsArray, getProductData };

import { products } from "./products";
import { items } from "./items";
import { customPackage } from "./customPackage";

const saveProductsToLocalStorage = () => {
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

  if (storedProducts[0]?.quantity === undefined) {
    localStorage.setItem("products", JSON.stringify(products));
  }
};

const saveItemsToLocalStorage = () => {
  const storedItems = JSON.parse(localStorage.getItem("items")) || [];

  if (storedItems[0]?.quantity === undefined) {
    localStorage.setItem("items", JSON.stringify(items));
  }
};

const saveCustomPackageToLocalStorage = () => {
  const storedCustomPackage = JSON.parse(
    localStorage.getItem("customPackage")
  ) || {};

  if (storedCustomPackage.quantity === undefined) {
    localStorage.setItem("customPackage", JSON.stringify(customPackage));
  }
}

const getProductsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("products"));
};

const getItemsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("items"));
};

const getCustomPackageFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("customPackage"));
};

const updateProductQuantity = (productId, newQuantity) => {
  const products = getProductsFromLocalStorage();
  const product = products.find((product) => product.id === productId);
  product.quantity = newQuantity;
  localStorage.setItem("products", JSON.stringify(products));
};

const updateItemQuantity = (itemId, newQuantity) => {
  const items = getItemsFromLocalStorage();
  const item = items.find((item) => item.id === itemId);
  item.quantity = newQuantity;
  localStorage.setItem("items", JSON.stringify(items));
};

const updateCustomPackageQuantity = (newQuantity) => {
  const customPackage = getCustomPackageFromLocalStorage();
  customPackage.quantity = newQuantity;
  localStorage.setItem("customPackage", JSON.stringify(customPackage));
};

export {
  saveProductsToLocalStorage,
  saveItemsToLocalStorage,
  saveCustomPackageToLocalStorage,
  getProductsFromLocalStorage,
  getItemsFromLocalStorage,
  getCustomPackageFromLocalStorage,
  updateProductQuantity,
  updateItemQuantity,
  updateCustomPackageQuantity,
};

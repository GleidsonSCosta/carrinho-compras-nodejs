import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log("Bem vindo ao seu carrinho de compras! \n");

const item1 = await createItem("Jeta", 20.99, 3);
const item2 = await createItem("BMW", 39.99, 3);
const item3 = await createItem("Camaro", 15.99, 2);
const item4 = await createItem("Lancer", 20.99, 2);
const item5 = await createItem("Subaru", 20.99, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);

await cartService.removeItem(myCart, item3);

await cartService.displayCart(myCart);

await cartService.deleteItem(myCart, item3.name);

await cartService.caculateTotal(myCart);
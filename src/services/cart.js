//CASOS DE USO

//adicionar item
async function addItem(userCart, item) {
    userCart.push(item);
}

//calcular o valor total do carrinho
async function caculateTotal(userCart) {
    console.log("\n🛒 Total do carrinho é:")

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total ${result.toFixed(2)} \n`);
}

//deletar item da lista
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name == name);

    if(index != -1){
        userCart.splice(index, 1);
    }

}

//subtrarir qtd de itens do mesmo produto
async function removeItem(userCart, item) {
    // const deleteIndex = index - 1;

    // if (index >= 0 && index < userCart.length){
    //     userCart.splice(deleteIndex, 1);
    // }

    const indexFound = userCart.findIndex((p) => p.name == item.name);

    if (indexFound == -1) {
        console.log("Item não encontrado.");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart(userCart) {
    console.log("Produtos no carrinho:");

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} x | Subtotal = ${item.subtotal()}`);
    });
}

export {
    addItem,
    caculateTotal,
    deleteItem,
    removeItem,
    displayCart
}


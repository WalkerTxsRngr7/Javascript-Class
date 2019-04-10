let cart = {
    fName: "Lou",
    lName: "Tennant",
    items: [['Rubber Duck', 15.95], ['Stitch Eraser',  1.95]],
    total: 0,
    printShoppingCart() {
        console.log(`Name: ${this.fName} ${this.lName}`);
        console.log("Items Purchased:");
        for (let item = 0; item < this.items.length; item++) {
            console.log(`${this.items[item][0]} $${this.items[item][1]}`);
            this.total = this.total + this.items[item][1];
        }
        console.log(`Total Purchase: $${this.total.toFixed(2)}`);
    }
};

cart.printShoppingCart();
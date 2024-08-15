// Implement a simple shopping cart system with features to add items, remove items and calculate the total price.
//  Use objects to represent items, including properties for the item name, price and quantity.
//  Implement features to add items to the cart, remove items and calculate the total cost.



// Define a class for the shopping cart
class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    // Method to add an item to the cart
    addItem(name, price, quantity = 1) {
        // Check if the item already exists in the cart
        const itemIndex = this.cart.findIndex(item => item.name === name);
        console.log(itemIndex)
        if (itemIndex > -1) {
            // If the item exists, update its quantity
            this.cart[itemIndex].quantity += quantity;
        } else {
            // If the item doesn't exist, add it to the cart
            const newItem = { name, price, quantity };
            this.cart.push(newItem);
        }
    }

    // Method to remove an item from the cart
    removeItem(name) {
        this.cart = this.cart.filter(item => item.name !== name);
    }

    // Method to calculate the total cost of the cart
    calculateTotal() {
        return this.cart.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    // Method to display the contents of the cart
    displayCart() {
        if (this.cart.length === 0) {
            console.log('Your cart is empty.');
        } else {
            console.log('Your cart contains:');
            this.cart.forEach(item => {
                console.log(`${item.quantity} x ${item.name} - $${item.price.toFixed(2)} each`);
            });
            console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
        }
    }
}

// Example usage:
const myCart = new ShoppingCart();

myCart.addItem('Apple', 0.99, 3);
myCart.addItem('Banana', 0.59, 2);
myCart.addItem('Orange', 1.29, 1);

myCart.displayCart(); // Displays the items in the cart and the total cost

myCart.removeItem('Banana'); // Removes bananas from the cart

myCart.displayCart(); // Displays the updated cart

console.log(`Total cost: $${myCart.calculateTotal().toFixed(2)}`); // Logs the total cost

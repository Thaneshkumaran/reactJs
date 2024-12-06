// Define the Product class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Method to calculate discount price
    calculateDiscount(percentage) {
        return this.price * (percentage / 100);
    }

    // Method to calculate net price
    calculateNetPrice(percentage) {
        return this.price - this.calculateDiscount(percentage);
    }
}

// Create product instances
const product1 = new Product("Laptop", 1000);
const product2 = new Product("Phone", 500);

// Populate product details in HTML
document.getElementById("product1-name").textContent = product1.name;
document.getElementById("product1-price").textContent = product1.price;

document.getElementById("product2-name").textContent = product2.name;
document.getElementById("product2-price").textContent = product2.price;

// Function to apply discount
function applyDiscount(productId) {
    const product = productId === "product1" ? product1 : product2;
    const discountInput = document.getElementById(`${productId}-discount`);
    const discountValue = parseFloat(discountInput.value);

    if (isNaN(discountValue) || discountValue < 0 || discountValue > 100) {
        alert("Please enter a valid discount percentage (0-100).");
        return;
    }

    // Calculate discount price and net price
    const discountPrice = product.calculateDiscount(discountValue).toFixed(2);
    const netPrice = product.calculateNetPrice(discountValue).toFixed(2);

    // Update the HTML with calculated values
    document.getElementById(`${productId}-discount-price`).textContent = discountPrice;
    document.getElementById(`${productId}-net-price`).textContent = netPrice;
}

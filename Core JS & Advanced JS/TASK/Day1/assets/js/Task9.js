let balance = 1000;
let price = 300;

if (balance >= price) {
    console.log("Purchase successful");
    balance -= price;
    console.log("Remaining balance:", balance);
} else {
    console.log("Insufficient balance");
}
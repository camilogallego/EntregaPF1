function getTimestamp() {
  const date = new Date();
  const timestamp =
    date.getDate() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  return timestamp;
}

class Product {
  constructor(name, description, code, image, price, stock) {
    this.id = v4();
    this.timestamp = getTimestamp();
    this.name = name;
    this.description = description;
    this.code = code;
    this.image = image;
    this.price = price;
    this.stock = stock;
  }
}

module.exports = Product;

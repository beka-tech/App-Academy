const http = require("http");
const url = require("url");
const PORT = 5000 || 3000;

const products = [
  { id: 17, name: "Luxury Watch", category: "fashion", price: 900 },
  { id: 3, name: "Gaming Laptop X", category: "electronics", price: 1800 },
  { id: 25, name: "Bed Frame", category: "furniture", price: 700 },
  { id: 9, name: "Gaming Mouse", category: "electronics", price: 90 },
  { id: 14, name: "Denim Jacket", category: "fashion", price: 180 },
  { id: 1, name: "Laptop Pro 14", category: "electronics", price: 1400 },
  { id: 28, name: "Blender Pro", category: "appliances", price: 130 },
  { id: 21, name: "Office Chair", category: "furniture", price: 320 },
  { id: 6, name: "Wireless Headphones", category: "electronics", price: 220 },
  { id: 12, name: "Basketball Shoes", category: "fashion", price: 150 },
  { id: 30, name: "Vacuum Cleaner", category: "appliances", price: 300 },
  { id: 4, name: "Smartphone Ultra", category: "electronics", price: 950 },
  { id: 18, name: "Sport Watch", category: "fashion", price: 250 },
  { id: 23, name: "Wooden Desk", category: "furniture", price: 450 },
  {
    id: 7,
    name: "Noise Canceling Headphones",
    category: "electronics",
    price: 320,
  },
  { id: 11, name: "Running Shoes", category: "fashion", price: 130 },
  { id: 29, name: "Microwave Oven", category: "appliances", price: 220 },
  { id: 2, name: "Laptop Air 13", category: "electronics", price: 1100 },
  { id: 16, name: "Graphic T-shirt", category: "fashion", price: 45 },
  { id: 27, name: "Air Fryer", category: "appliances", price: 180 },
  { id: 8, name: "Mechanical Keyboard", category: "electronics", price: 180 },
  { id: 22, name: "Standing Desk", category: "furniture", price: 650 },
  { id: 13, name: "Casual Sneakers", category: "fashion", price: 95 },
  { id: 5, name: "Smartphone Lite", category: "electronics", price: 500 },
  { id: 26, name: "Coffee Maker", category: "appliances", price: 150 },
  { id: 19, name: "Leather Belt", category: "fashion", price: 70 },
  { id: 10, name: "4K Monitor", category: "electronics", price: 600 },
  { id: 24, name: "Bookshelf", category: "furniture", price: 200 },
  { id: 20, name: "Sunglasses", category: "fashion", price: 120 },
  { id: 15, name: "Plain T-shirt", category: "fashion", price: 35 },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  if (parsedUrl.pathname === "/products" && req.method === "GET") {
    let results = [...products];

    // Filtering
    if (query.category) {
      results = results.filter((p) => p.category === query.category);
    }
    // min price
    if (query.price) {
      const minprice = Number(query.price);
      results = results.filter((p) => p.price >= minprice);
    }
    // search
    //GET /products?search=laptop
    if (query.search) {
      const searchItem = query.search.toLowerCase();
      results = results.filter((p) =>
        p.name.toLowerCase().includes(searchItem),
      );
    }
    //sort -id price or -price
    if (query.sort) {
      const field = query.sort.replace("-", "");
      const order = query.sort.startsWith("-") ? -1 : 1;
      results.sort((a, b) => {
        if (a[field] < b[field]) return -1 * order;
        if (a[field] > b[field]) return 1 * order;
      });
    }

    // Pagination
    const page = parseInt(query.page) || 2;
    const limit = parseInt(query.limit) || 4;
    const start = (page - 1) * limit;
    const end = start + limit;

    const paginatedResults = results.slice(start, end);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        page,
        limit,
        total: results.length,
        data: paginatedResults,
      }),
    );
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, "localhost", () => {
  console.log(`Server  http://localhost:${PORT}/`);
});

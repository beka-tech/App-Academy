# Raw Node.js Products API

A simple REST API built using **raw Node.js (no frameworks)** demonstrating common API features used in real-world backend development.

## Features

- Query parameters
- Search functionality
- Category filtering
- Price range filtering
- Sorting
- Pagination
- Clean API design

---

# Installation

Clone the repository

```bash
git clone https://github.com/yourusername/products-api.git
cd products-api
```

Run the server

```bash
node server.js
```

Server will start on:

```
http://localhost:3000
```

---

# API Endpoint

```
GET /products
```

---

# Query Parameters

| Parameter       | Description         | Example                 |
| --------------- | ------------------- | ----------------------- |
| search          | Search product name | `?search=laptop`        |
| category        | Filter by category  | `?category=electronics` |
| minPrice        | Minimum price       | `?minPrice=100`         |
| maxPrice        | Maximum price       | `?maxPrice=500`         |
| sort            | Sort results        | `?sort=price`           |
| sort descending | Descending sort     | `?sort=-price`          |
| page            | Pagination page     | `?page=2`               |
| limit           | Results per page    | `?limit=5`              |

---

# Example Requests

### Get All Products

```
GET /products
```

### Search Products

```
GET /products?search=laptop
```

### Filter by Price Range

```
GET /products?minPrice=100&maxPrice=500
```

### Sort Products by Price

Ascending

```
GET /products?sort=price
```

Descending

```
GET /products?sort=-price
```

### Pagination

```
GET /products?page=2&limit=3
```

---

# Full Example

```
GET /products?search=watch&minPrice=100&sort=-price&page=1&limit=2
```

This request will:

- Search for products containing **watch**
- Filter products with **price ≥ 100**
- Sort by **price descending**
- Return **2 results per page**
- Show **page 1**

---

# Project Structure

```
project-folder
│
├── server.js
└── README.md
```

---

# Learning Goals

This project demonstrates:

- Building APIs using **raw Node.js**
- Understanding **query parameters**
- Implementing **filtering**
- Implementing **sorting**
- Implementing **pagination**
- Designing **clean REST APIs**

---

# Future Improvements

- Add POST, PUT, PATCH, DELETE endpoints
- Connect to a real database (MongoDB / PostgreSQL)
- Add authentication
- Add validation
- Implement cursor-based pagination

---

# License

MIT License

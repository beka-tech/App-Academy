// Import the HTTP module
const http = require("http");
const fs = require("fs");
const PORT = 3000;
// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  // res.writeHead(201, { "Content-Type": "text/plain" });

  // // Send the response body as 'Hello, World!'
  // res.end("Hello, World!\n");
  if (req.url === "/" && req.method === "GET") {
    fs.readFile("home.html", (err, data) => {
      res.writeHead(201, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/about" && req.method === "GET") {
    fs.readFile("about.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    fs.readFile("404.html", (err, data) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
});

// Define the port to listen on const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, "localhost", () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

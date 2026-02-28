const https = require("https");
const fs = require("fs");

// Load SSL certificate files
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

https
  .createServer(options, (req, res) => {
    // Allow only POST requests
    if (req.method !== "POST") {
      res.writeHead(405, { "Content-Type": "text/plain" });
      return res.end("Method Not Allowed");
    }

    let body = "";

    // Collect incoming data
    req.on("data", (chunk) => {
      body += chunk;

      // Protect against large payload attacks (1MB limit)
      if (body.length > 1e6) {
        req.socket.destroy();
      }
    });

    // When request finished
    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);

        console.log("Received Data:", parsed);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            message: "Data received successfully",
            received: parsed,
          }),
        );
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            error: "Invalid JSON format",
          }),
        );
      }
    });
  })
  .listen(3000, () => {
    console.log("Server running at https://localhost:3000");
  });

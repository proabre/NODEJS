// Import Node.js's built-in HTTP module
const http = require("http");

// Create the server
// req = information about the request from the client
// res = what we use to send a response back to the client
const server = http.createServer((req, res) => {
  // Send a response to the client
  res.end("Hello from my Node.js server!");
});

// Start listening for incoming requests on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("here is our short history");
  }

  res.end(
    `
        <h1>Oops!</h1>
        <p> we cant seem to find the page</p>
        `
  );
});

server.listen(5000);

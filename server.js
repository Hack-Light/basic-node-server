const http = require("http");
const port = 5000;

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    if ((req.method = "GET")) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`<p>Hello World, Welcome to Wejapa Internships</p>`);
      return;
    } else if (req.method == "POST" && typeof req.body.name != "undefined") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`<p>Hello ${req.body.name}, Welcome to Wejapa Internships</p>`);
      return;
    } else {
      res.statusCode = 405;
      res.setHeader("Content-Type", "text/html");
      res.end(`Method Not Allowed</p>`);
      return;
    }
  }
});

server.listen(port, "localhost", () => {
  console.log(`Server running on port: ${port}`);
});

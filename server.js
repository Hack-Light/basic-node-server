const http = require("http");
const { parse } = require("querystring");
const { url } = require("inspector");
const port = 5000;

const bodyParser = (request, cb) => {
  let body = "";
};

let server = http.createServer((req, res) => {
  // check the request url;
  if (req.url == "/") {
    // check the req method id Get
    if (req.method == "GET") {
      res.writeHead(200, { "Content-Type": "text/html" }); // write response header
      res.end(`<p>Hello World, Welcome to Wejapa Internships</p>`); // sends the html response to the client
    } else if (req.method == "POST") {
      //check if the request header is POST
      res.writeHead(200, { "Content-Type": "text/html" }); // write response header
      let body = ""; // create a string called body

      //listen for data event which returns a readable stream
      req.on("data", chunk => {
        body += chunk; // set the body string to the stream returned
      });

      // listen for an end event on the request
      req.on("end", () => {
        // parse the body(which returns an object)
        let name = parse(body).name; //assign the value of the of the name key to a variable name
        res.end(`<p>Hello ${name}, Welcome to Wejapa Internships</p>`); // concatenate the name and send the response to the client
      });
    } else {
      // if request method is not POST or GET, send the response below
      res.statusCode = 405;
      res.setHeader("Content-Type", "text/html");
      res.end(`<p>Method Not Allowed</p>`);
    }
  }
});

server.listen(port, "localhost", () => {
  console.log(`Server running on port: ${port}`);
});

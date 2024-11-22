import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<html><body><h1>New Server</h1></body</html>");
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});

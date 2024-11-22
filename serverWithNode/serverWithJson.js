import { createServer } from "node:http";
/*
const server = createServer((request, response) => {
  response.statusCode = 200;

  //application/json is the content-type for using JSON
  response.setHeader("Content-Type", "application/json");
  //object being converted to a json string
  const jsonResponse = JSON.stringify({ name: "maria", age: "34" });

  //json passed as to an object
  const parseJsonResponse = JSON.parse(jsonResponse);
  const unpacked = `Your name is ${parseJsonResponse.name} and you are ${parseJsonResponse.age} years old`;

  response.end(unpacked);
  
});

server.listen(3000, () => {
  console.log(
    `${process.env.USERNAME} your server is running at http://localhost:3200`
  );
});*/

const server = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  const jsonResponse = JSON.stringify({ location: "Mars" });
  response.setHeader("Content-Length", jsonResponse.length);
  response.end(jsonResponse);
});
server.listen(3200, () => {
  console.log(
    `${process.env.USERNAME} your server is running at http://localhost:3200`
  );
});

const Chat = require("./controllers");
const { getReqData } = require("./utils");

const http = require('http');

const hostname = '192.168.1.21';
const port = 3000;

const server = http.createServer(async (req, res) => {
    if (req.url === "/api/message" && req.method === "GET") {
        const message = await new Chat().getMessage();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(message));
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
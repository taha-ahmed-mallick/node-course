import http from "http";
import getPosts from "./postController.js";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
	// res.setHeader("Content-Type", "text/plain");
	// res.statusCode = 404;
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(getPosts()));
});

server.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});

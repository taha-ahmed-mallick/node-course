import http from "http";
import getPosts from "./postController.js";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
	// res.setHeader("Content-Type", "text/plain");
	// res.statusCode = 404;
	console.log(req.url);
	console.log(req.method);
	if (req.url == "/posts") {
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(getPosts()));
	} else {
		res.writeHead(404, { "Content-Type": "text/html" });
		res.end("<h1>404 ERROR we arent doing anything</h1>");
	}
});

server.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});

import http from "http";
import getPosts from "./postController.js";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
	// res.setHeader("Content-Type", "text/plain");
	// res.statusCode = 404;
	// console.log(req.url);
	// console.log(req.method);
	// if (req.url == "/posts") {
	// 	res.writeHead(200, { "Content-Type": "application/json" });
	// 	res.end(JSON.stringify(getPosts()));
	// } else {
	// 	res.writeHead(404, { "Content-Type": "text/html" });
	// 	res.end("<h1>404 ERROR we arent doing anything</h1>");
	// }
	try {
		// check GET request
		if (req.method == "GET") {
			if (req.url == "/") {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write("<h1>Homepage</h1>");
				res.end();
			} else if (req.url == "/posts") {
				res.writeHead(200, { "Content-Type": "application/json" });
				res.end(JSON.stringify(getPosts()));
			} else if (req.url == "/about") {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end("<h1>About</h1>");
			} else if (req.url == "/internal") {
				throw new Error("You shouldn't be here");
			} else {
				res.writeHead(404, { "Content-Type": "text/html" });
				res.end(`<h1>Page not found</h1>`);
			}
		} else {
			throw new Error("Method not allowed");
		}
	} catch (error) {
		res.writeHead(500, { "Content-Type": "text/plain" });
		res.end(`Server Error: ${error}`);
	}
});

server.listen(PORT, () => {
	console.log(`Server running on port: ${PORT}`);
});

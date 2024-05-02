import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

// GET current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);

const server = http.createServer(async (req, res) => {
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
			let filepath;
			if (req.url == "/") {
				filepath = path.join(__dirname, "public", "index.html");
			} else if (req.url == "/about") {
				filepath = path.join(__dirname, "public", "about.html");
			} else if (req.url == "/internal") {
				throw new Error("You shouldn't be here");
			} else {
				throw new Error("Page not found");
			}

			const data = await fs.readFile(filepath);
			res.setHeader("Content-Type", "text/html");
			res.write(data);
			res.end();
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

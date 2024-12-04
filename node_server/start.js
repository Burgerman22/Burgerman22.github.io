"use strict";
//#region modules
// importing modules
const http = require("http");
const fs = require("fs").promises;

http
	.createServer((req, res) => {
		serverHandler(req, res);
	})
	.listen(8000);

//#endregion

//#region classes

//#endregion

// new server instance

async function serverHandler(req, res) {
	console.log(`Request for: ${req.url}`);
	if (req.url == "/") {
		const contents = await fs.readFile(__dirname + "/index.html");
		res.writeHead(200);
		res.end(contents);
	} else if (req.url == "/index.js") {
		const contents = await fs.readFile(__dirname + "/index.js");
		res.writeHead(200);
		res.end(contents);
	} else if (req.url == "/index.css") {
		const contents = await fs.readFile(__dirname + "/index.css");
		res.writeHead(200);
		res.end(contents);
	} else {
		res.writeHead(404);
		res.end("<h1>404 Not Found</h1>");
	}
}

//#region Express Functions

//#endregion

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

module.exports = {
	startServer: function (port, baseDir) {
		http.createServer((request, response) => {
			try {
				const reqUrl = url.parse(request.url);
				const dirPath = `${baseDir}${path.normalize(reqUrl.pathname)}`;

				response.writeHead(200);
				let fileStream = fs.createReadStream(dirPath);
				fileStream.pipe(response);
				fileStream.on('error', (e) => {
					response.writeHead(404);
					response.end();
				});
			} catch (e) {
				response.writeHead(500);
				response.end();
				console.log(e);
			}
		}).listen(port);
		console.log(`Server listening on port: ${port}`);
	}
}

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const static = require('node-static');

module.exports = {
	startServer: function (port, baseDir) {
		const file = new static.Server('./public');
		http.createServer((request, response) => {
			request.addListener('end', () => {
				file.serve(request, response);
			}).resume();
		}).listen(port);
		console.log(`Server listening on port: ${port}`);
	}
}

#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const Preferences = require('preferences');
const argv = require('minimist')(process.argv.slice(2));
const files = require('./lib/files');
const questions = require('./lib/questions');
const server = require('./lib/server');

const prefs = new Preferences('jumpserv');

if (!prefs.hackerDir || !prefs.publicDir) {
	questions.getBasicCredentials((dirObj) => {
		if (dirObj) {
			prefs.hackerDir = dirObj['hackerDir'];
			prefs.publicDir = dirObj['publicDir'];
		}
	});
} else if (prefs.hackerDir && prefs.publicDir) {
	const dirArg = argv['_'][0];
	const jumpDir = `${prefs.hackerDir}/${dirArg}`;
	process.chdir(jumpDir);
	server.startServer(8000, prefs.publicDir);
}

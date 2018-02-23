#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const Preferences = require('preferences');
const argv = require('minimist')(process.argv.slice(2));
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
} else if (argv['_'][0] === undefined) {
	console.error(`You must enter a directory to jump to.\nYour current base directory is: ${prefs.hackerDir}`);
} else if (prefs.hackerDir && prefs.publicDir) {
	const dirArg = argv['_'][0];
	if (!fs.existsSync(dirArg)) {
		return console.error(`The directory ${prefs.hackerDir}/${dirArg} can not be found.\nPlease either reset your base dir or check the path to your directory`);
	}
	const jumpDir = `${prefs.hackerDir}/${dirArg}`;
	process.chdir(jumpDir);
	server.startServer(8000, prefs.publicDir);
}

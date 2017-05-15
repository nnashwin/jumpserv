const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const Preferences = require('preferences');
const argv = require('minimist')(process.argv.slice(2));
const files = require('./lib/files');
const questions = require('./lib/questions');

const prefs = new Preferences('jumpserv');

if (!prefs.HackerDir) {
	console.log(`ahhhh, jumpserv doesn't exist!!`);
	questions.getBasicCredentials((dirObj) => {
		if (dirObj) {
			prefs.HackerDir = dirObj['HackerDir'];
		}
	});
}

const dirArg = argv['_'][0];

const jumpDir = `${prefs.HackerDir}/${dirArg}`;

console.log(`Current directory: ${process.cwd()}`);
process.chdir(jumpDir);
console.log(`Current directory: ${process.cwd()}`);

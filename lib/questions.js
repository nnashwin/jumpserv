const inquirer = require('inquirer');
module.exports = {
	getBasicCredentials: function(callback) {
		const questions = [
			{
				name: 'hackerDir',
				type: 'input',
				message: 'Enter the dir where your repos lie (Do not use ~/ syntax, needs the full dir structure)',
				validate: (value => {
					if (value.length) {
						return true;
					} 

					return 'Please enter the main development dir where you have your repos';
				}),
			},
			{
				name: 'publicDir',
				type: 'input',
				default: "./",
				message: 'Enter the directory you use in your repos for public files (where your index.html is.  Defaults to root of the project)',
			}
		]
		inquirer.prompt(questions).then(callback);
	}
}

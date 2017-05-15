module.exports = {
	getBasicCredentials: function(callback) {
		const questions = [
			{
				name: 'HackerDir',
				type: 'input',
				message: 'Enter the dir where your repos lie',
				validate: (value => {
					if (value.length) {
						return true;
					} else {
						return 'Please enter the main development dir where you have your repos';
					}
				}),
			}
		]
		inquirer.prompt(questions).then(callback);
	}
}

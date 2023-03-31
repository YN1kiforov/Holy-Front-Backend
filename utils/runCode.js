// format { input: [5, 7], expect: 12 },
function runCode(clientCode, tests) {
	let passed = 0;
	let failed = 0;
	let output = []
	let error = null;
	try {
		const clientFunction = eval(`(${clientCode})`);
		tests.forEach(test => {
			const result = clientFunction(...test.input);
			(result === test.expect) ? passed++ : failed++;
			output.push(result)
		});
	} catch (e) {
		error = e.message;
	}
	return error ? { error } : { passed, failed };
}

module.exports = runCode
var array_questions = [
	{
		statement: "JavaScript variables are containers for storing data values.",
		topic: "javascript",
		sub_topic: "variable",
		answer_key: "option1",
		hint: "https://www.w3schools.com/js/js_variables.asp",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		video: { display: "false", source: "N/A" },
		help: ["Sorry, I don't have any additional information to share for this question."],
	},
	{
		statement: "JavaScript Object Notation is a syntax for styling HTML elements.",
		topic: "javascript",
		sub_topic: "object",
		answer_key: "option2",
		hint: "https://www.w3schools.com/js/js_json_intro.asp",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		video: { display: "false", source: "N/A" },
		help: ["Sorry, I don't have any additional information to share for this question."],
	},
	{
		statement: "Select the correct option amongst the examples listed below for declaring a JavaScript variable.",
		topic: "javascript",
		sub_topic: "variable",
		answer_key: "option3",
		hint: "https://www.w3schools.com/js/js_variables.asp",
		type: "multiple_choice",
		labels: [
			"var answer = 'I am the correct answer!'",
			"var answer == 'I am the correct answer!';",
			"var answer = 'I am the correct answer!';",
			"var answer = I am the correct answer!;",
		],
		video: { display: "false", source: "N/A" },
		help: [
			"Text strings in values assigned to variables are denoted by quotes.",
			"Don't forget the semicolon at the end of the line.",
			"Declarations of variables typically rely on a equal symbol '='.",
		],
	},
	{
		statement: "Select the correct option amongst the examples listed below for defining a JavaScript object.",
		topic: "javascript",
		sub_topic: "object",
		answer_key: "option1",
		hint: "https://www.w3schools.com/js/js_objects.asp",
		type: "multiple_choice",
		labels: [
			"var answer = {value: 'I am the correct answer!'};",
			"var answer = {value = 'I am the correct answer!'};",
			"var answer = (value: 'I am the correct answer!');",
			"var answer = {value: 'I am the correct answer!'}",
		],
		video: { display: "false", source: "N/A" },
		help: [
			"Text strings in values assigned to properties are denoted by quotes.",
			"Don't forget the semicolon at the end of the line.",
			"Declarations of properties typically rely on a colon symbol ':'.",
		],
	},
	{
		statement: "JavaScript variables can be declared using the let keyword - it will have block scope, and can only be accessed from inside the function.",
		topic: "javascript",
		sub_topic: "variable",
		answer_key: "option1",
		hint: "https://www.w3schools.com/js/js_let.asp",
		type: "true_false",
		labels: ["True", "False", "N/A", "N/A"],
		video: { display: "true", source: "https://www.youtube.com/embed/q8SHaDQdul0" },
		help: ["Sorry, I don't have any additional information to share for this question."],
	},
];

var array_answers = [];

console.log(array_questions);
console.log(array_answers);
console.log(array_questions[1].statement);

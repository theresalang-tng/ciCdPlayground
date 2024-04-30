import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Theresa Lang',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Pipeline that includes automated buildiing, testing and deployment',
			'Faster and more reliable releases'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins',
		// What do you want to learn in this workshop? 
		expectations: [
			'see and understand a complete CI/CD pipeline'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'sewing',
			'running''
		]
	}
});

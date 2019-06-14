module.exports = {
	// content/HelloWorld.md --> speakers/hello-world
	content: [
	["talks", {
		page: '/talks/_talk',
		permalink: '/:slug',
		isPost: false,
		generate: [ 
		'get', 
		'getAll' 
		]
	}],
	["team", {
		page: '/team/_member',
		isPost: false,
		generate: [ 
		'get', 
		'getAll' 
		]
	}],
	["workshops", {
		page: '/workshops/_workshop',
		permalink: "/:slug",
		isPost: false,
		generate: [ 
			'get', 
			'getAll' 
		]
	}],
	["sessions", {
		page: '/sessions/_session',
		permalink: "/:slug",
		isPost: false,
		generate: [ 
		'get', 
		'getAll' 
		]
	}],
	],
	api: {
		baseURL: 'http://localhost:8080',
		// Update this later
		browserBaseURL: 'https://wizardly-ride-1eb63b.netlify.com'
	}
}
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
		page: '/team',
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
	}]
	],
	api: {
		baseURL: 'http://localhost:8080',
		// Update this later
		browserBaseURL: 'http://localhost:8080'
	}
}
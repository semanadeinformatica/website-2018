module.exports = {
	// content/HelloWorld.md --> speakers/hello-world
	content: [
	["talks", {
		page: '/talks/_talk',
		permalink: ':year/:slug',
		isPost: false,
		generate: [ 
		'get', 
		'getAll' 
		]
	}],
	["workshops", {
		page: '/workshops/_workshop',
		permalink: ":slug",
		isPost: false
	}]
	],
	api: {
		baseURL: 'http://localhost:8080',
		browserBaseURL: 'https://sinf.pt'
	}
}
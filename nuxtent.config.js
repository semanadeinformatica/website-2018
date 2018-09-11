module.exports = {
	// content/HelloWorld.md --> speakers/hello-world
	content: {
		page: '/speakers/_slug',
		permalink: ':slug',
		isPost: false,
		generate: [
		'get',
		'getAll'
		]
	},
	api: {
		baseURL: 'http://localhost:8080',
		browserBaseURL: 'https://sinf.pt'
	}
}
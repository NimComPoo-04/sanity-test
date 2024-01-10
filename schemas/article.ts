export default {
	// Sanity Specific
	type: 'document',
	title: 'Article',
	name: 'article',

	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title'
		},
		{
			name: 'author',
			type: 'string',
			title: 'Author',
		},
		{
			name: 'details',
			type: 'text',
			title: 'Details',
		},
		{
			name: 'references',
			type: 'array',
			title: 'References',
			of: [ {type: 'string'} ]
		}
	]
}

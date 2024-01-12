export const post = {
	type: 'object',
	title: 'Post',
	name: 'post',

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
		}
	]
}

const pot = {
	collapsible: true
}

export const iarticle = {
	type: 'document',
	title: 'Local Article',
	name: 'iarticle',

	fields: [
		{type: 'post', name: 'en', title: 'English'},
		{type: 'post', name: 'be', title: 'Bengali', options: pot},
		{type: 'post', name: 'jp', title: 'Japanese', options: pot},
		{type: 'post', name: 'de', title: 'German', options: pot},

		// References don't change right?
		{
			type: 'array',
			name: 'references',
			title: 'References',
			of: [{ type: 'string' }]
		}
	]
}

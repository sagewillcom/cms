export default {
	upload: {
		config: {
			provider: 'strapi-provider-upload-dos',
			providerOptions: {
				key: process.env.DO_SPACE_ACCESS_KEY,
				secret: process.env.DO_SPACE_SECRET_KEY,
				endpoint: 'nyc3.digitaloceanspaces.com',
				space: 'sagewill'
			}
		}
	}
}

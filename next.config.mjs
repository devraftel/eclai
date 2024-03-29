/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			// {
			// 	protocol: 'https',
			// 	hostname: 'images.unsplash.com',
			// },
			// {
			// 	protocol: 'https',
			// 	hostname: 'github.com',
			// },
			// {
			// 	protocol: 'https',
			// 	hostname: 'm.media-amazon.com',
			// },
			// {
			// 	protocol: 'https',
			// 	hostname: 'images-na.ssl-images-amazon.com',
			// },
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
};

export default nextConfig;

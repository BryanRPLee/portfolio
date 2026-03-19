import type { NextConfig } from 'next'

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const normalizedBasePath = rawBasePath
	? rawBasePath.startsWith('/')
		? rawBasePath
		: `/${rawBasePath}`
	: ''

const nextConfig: NextConfig = {
	output: 'export',
	basePath: normalizedBasePath,
	assetPrefix: normalizedBasePath || undefined,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.jsdelivr.net',
				pathname: '/gh/devicons/**'
			}
		]
	}
}

export default nextConfig

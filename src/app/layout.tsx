import type { Metadata } from 'next'
import './globals.css'
import { site } from '@/app/data/site'
import Navigation from '@/app/components/Navigation'

export const metadata: Metadata = {
	title: site.name,
	description: site.summary.join(' ')
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="dark">
			<body className="min-h-dvh bg-spotify-black text-white antialiased">
				<Navigation />
				{children}
			</body>
		</html>
	)
}

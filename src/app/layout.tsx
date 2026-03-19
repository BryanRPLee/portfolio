import type { Metadata } from 'next'
import './globals.css'
import { site } from '@/app/data/site'

export const metadata: Metadata = {
	title: `${site.name} — Portfolio`,
	description: site.summary.join(' ')
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="dark">
			<body className="min-h-dvh bg-black text-zinc-100 antialiased">
				{children}
			</body>
		</html>
	)
}

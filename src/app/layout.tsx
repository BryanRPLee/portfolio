import type { Metadata } from 'next'
import './globals.css'
import { site } from '@/app/data/site'
import Navigation from '@/app/components/Navigation'
import ThemeToggle from '@/app/components/ThemeToggle'
import BuyMeACoffee from '@/app/components/BuyMeACoffee'
import { Analytics } from '@vercel/analytics/next'

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
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark');}})();`
					}}
				/>
			</head>
			<body className="min-h-dvh bg-spotify-black text-white antialiased no-page-scrollbar overflow-x-hidden">
				<Navigation />
				{children}
				<BuyMeACoffee />
				<ThemeToggle />
				<Analytics />
			</body>
		</html>
	)
}

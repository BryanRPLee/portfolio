import type { Metadata } from 'next'
import { Archivo_Black, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { site } from '@/app/data/site'
import Navigation from '@/app/components/Navigation'
import ThemeToggle from '@/app/components/ThemeToggle'
import BuyMeACoffee from '@/app/components/BuyMeACoffee'
import { Analytics } from '@vercel/analytics/next'

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-space-grotesk'
})

const archivoBlack = Archivo_Black({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-archivo-black'
})

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
			<body
				className={`${spaceGrotesk.variable} ${archivoBlack.variable} min-h-dvh overflow-x-hidden antialiased no-page-scrollbar`}
			>
				<Navigation />
				{children}
				<BuyMeACoffee />
				<ThemeToggle />
				<Analytics />
			</body>
		</html>
	)
}

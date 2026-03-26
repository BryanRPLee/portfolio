import { site } from '@/app/data/site'

export default function Footer() {
	return (
		<footer className="mt-2 rounded-[1.75rem] border border-white/10 bg-black/25 px-6 py-5 text-center text-xs text-white/55 backdrop-blur-xl">
			<p className="mt-2">
				© {new Date().getFullYear()} {site.name}. Built with Next.js,
				Tailwind CSS, and a Spotify Wrapped-inspired visual system.{' '}
			</p>
			<a
				href="https://github.com/BryanRPLee/portfolio"
				target="_blank"
				rel="noopener noreferrer"
				className="mt-2 inline-block underline underline-offset-4"
			>
				View Source
			</a>
		</footer>
	)
}

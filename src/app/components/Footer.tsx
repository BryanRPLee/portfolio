import { site } from '@/app/data/site'

export default function Footer() {
	return (
		<footer className="mt-8 text-center text-xs text-[#535353] py-4">
			© {new Date().getFullYear()} {site.name}. Built with Next.js &
			Tailwind CSS.{' '}
			<a
				href="https://github.com/BryanRPLee/portfolio"
				target="_blank"
				rel="noopener noreferrer"
				className="underline"
			>
				View Source
			</a>
		</footer>
	)
}

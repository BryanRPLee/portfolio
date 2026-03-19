'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Menu, X, Code2 } from 'lucide-react'
import { site } from '@/app/data/site'

export default function Navigation() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<nav aria-label="Primary navigation" className="sticky top-0 z-50">
			<div className="mx-4 mt-3 sm:mx-8 lg:mx-32">
				<div className="flex items-center justify-between bg-[#212121] rounded-full px-4 py-2 shadow-lg">
					<Link
						href="/"
						className="flex items-center gap-2 text-white font-bold text-lg"
					>
						<Code2 className="text-[#1DB954] w-7 h-7" />
						<span className="hidden sm:block">{site.name}</span>
					</Link>

					<div className="hidden sm:flex items-center gap-4">
						<a
							href={`mailto:${site.email}`}
							className="text-[#B3B3B3] hover:text-[#1DB954] transition-colors"
							aria-label="Email"
						>
							<Mail className="w-5 h-5" />
						</a>
						<a
							href={site.links.github}
							target="_blank"
							rel="noreferrer"
							className="text-[#B3B3B3] hover:text-[#1DB954] transition-colors"
							aria-label="GitHub"
						>
							<Github className="w-5 h-5" />
						</a>
						<a
							href={site.links.linkedin}
							target="_blank"
							rel="noreferrer"
							className="text-[#B3B3B3] hover:text-[#1DB954] transition-colors"
							aria-label="LinkedIn"
						>
							<Linkedin className="w-5 h-5" />
						</a>
					</div>
					<button
						className="sm:hidden text-white"
						onClick={() => setMobileOpen((p) => !p)}
						aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					>
						{mobileOpen ? (
							<X className="w-6 h-6" />
						) : (
							<Menu className="w-6 h-6" />
						)}
					</button>
				</div>
				{mobileOpen && (
					<div className="mt-2 bg-[#212121] rounded-2xl px-6 py-4 flex flex-col gap-4 sm:hidden">
						<a
							href={`mailto:${site.email}`}
							className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#1DB954]"
						>
							<Mail className="w-4 h-4" /> {site.email}
						</a>
						<a
							href={site.links.github}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#1DB954]"
						>
							<Github className="w-4 h-4" /> GitHub
						</a>
						<a
							href={site.links.linkedin}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#1DB954]"
						>
							<Linkedin className="w-4 h-4" /> LinkedIn
						</a>
					</div>
				)}
			</div>
		</nav>
	)
}

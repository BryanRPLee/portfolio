'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import { site } from '@/app/data/site'

export default function Navigation() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<nav aria-label="Primary navigation" className="sticky top-0 z-50">
			<div className="mx-4 mt-3 sm:mx-8 lg:mx-12">
				<div className="flex items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
					<button
						onClick={() =>
							window.scrollTo({ top: 0, behavior: 'smooth' })
						}
						className="flex items-center gap-3 text-white"
						aria-label="Scroll to top"
					>
						<div className="relative w-7 h-7 shrink-0">
							<Image
								src="/favicon.ico"
								alt="Logo"
								fill
								sizes="28px"
								className="object-cover rounded-full"
							/>
							<div className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#1ed760] shadow-sm">
								<svg
									viewBox="0 0 24 24"
									className="w-2.5 h-2.5 fill-black"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
								</svg>
							</div>
						</div>
						<div className="hidden min-w-0 sm:block">
							<p className="font-display text-lg uppercase leading-none tracking-[0.12em] text-white">
								{site.name}
							</p>
						</div>
					</button>

					<div className="hidden items-center gap-2 sm:flex">
						<a
							href={site.links.github}
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-white/10 p-2 text-white/72 transition-colors hover:text-white"
							aria-label="GitHub"
						>
							<Github className="h-4 w-4" />
						</a>
						<a
							href={site.links.linkedin}
							target="_blank"
							rel="noreferrer"
							className="rounded-full border border-white/10 p-2 text-white/72 transition-colors hover:text-white"
							aria-label="LinkedIn"
						>
							<Linkedin className="h-4 w-4" />
						</a>
						<a
							href={`mailto:${site.email}`}
							className="rounded-full border border-white/10 p-2 text-white/72 transition-colors hover:text-white"
							aria-label="Email"
						>
							<Mail className="h-4 w-4" />
						</a>
					</div>

					<button
						className="text-white sm:hidden"
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
					<div className="mt-2 flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-black/35 px-6 py-5 backdrop-blur-xl sm:hidden">
						<p className="text-xs uppercase tracking-[0.3em] text-white/45">
							Swipe through the resume story.
						</p>
						<a
							href={`mailto:${site.email}`}
							className="flex items-center gap-2 text-white/72 hover:text-[#1ed760]"
						>
							<Mail className="w-4 h-4" /> {site.email}
						</a>
						<a
							href={site.links.github}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 text-white/72 hover:text-[#1ed760]"
						>
							<Github className="w-4 h-4" /> GitHub
						</a>
						<a
							href={site.links.linkedin}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2 text-white/72 hover:text-[#1ed760]"
						>
							<Linkedin className="w-4 h-4" /> LinkedIn
						</a>
					</div>
				)}
			</div>
		</nav>
	)
}

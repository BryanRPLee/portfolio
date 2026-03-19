import { projects } from '@/app/data/resume'
import { ExternalLink, ChevronDown } from 'lucide-react'

export default function ProjectsSection() {
	return (
		<div
			className="bg-[#212121] rounded-2xl overflow-hidden h-full flex flex-col"
			id="projects"
		>
			<div className="p-4 flex gap-3 flex-wrap">
				<button
					className="flex items-center gap-2 text-sm font-bold bg-[#1DB954] hover:bg-[#189a45] hover:scale-105 px-5 py-2 rounded-full transition-all text-black"
					aria-label="Featured projects"
				>
					Featured Projects
					<ChevronDown className="w-4 h-4" />
				</button>
				<a
					href={`https://github.com/${projects[0]?.links?.[0]?.href.split('github.com/')[1]?.split('/')[0]}`}
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-2 text-sm font-bold border border-[#727272] hover:border-white hover:bg-white hover:text-black text-white px-5 py-2 rounded-full transition-all hover:scale-105 animate-pulse hover:animate-none"
					aria-label="All projects on GitHub"
				>
					All on GitHub
					<ExternalLink className="w-4 h-4" />
				</a>
			</div>

			<div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3">
				{projects.map((p, i) => (
					<div
						key={p.name}
						className="bg-[#282828] rounded-xl p-4 hover:bg-[#323131] transition-colors group"
					>
						<div className="flex items-start justify-between gap-2">
							<div>
								<span className="text-[#535353] text-xs mr-2">
									{String(i + 1).padStart(2, '0')}
								</span>
								<span className="text-sm font-semibold text-white group-hover:text-[#1DB954] transition-colors">
									{p.name}
								</span>
							</div>
							{p.links?.map((l) => (
								<a
									key={l.href}
									href={l.href}
									target="_blank"
									rel="noreferrer"
									className="text-[#B3B3B3] hover:text-[#1DB954] transition-colors shrink-0"
									aria-label={l.label}
								>
									<ExternalLink className="w-4 h-4" />
								</a>
							))}
						</div>

						<p className="mt-1.5 text-xs text-[#B3B3B3] leading-relaxed">
							{p.description}
						</p>

						{p.bullets?.length ? (
							<ul className="mt-2 space-y-1">
								{p.bullets.map((b) => (
									<li
										key={b}
										className="text-xs text-[#B3B3B3] flex gap-1.5"
									>
										<span className="text-[#1DB954] shrink-0">
											▸
										</span>
										{b}
									</li>
								))}
							</ul>
						) : null}

						<div className="mt-3 flex flex-wrap gap-1.5">
							{p.skills.map((s) => (
								<span
									key={s}
									className="text-[10px] bg-[#1DB954]/10 border border-[#1DB954]/30 text-[#1DB954] px-2 py-0.5 rounded-full"
								>
									{s}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

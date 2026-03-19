import { experience, accomplishments } from '@/app/data/resume'
import {
	Play,
	Shuffle,
	PlusCircle,
	Download,
	MoreHorizontal,
	AlignJustify,
	Globe
} from 'lucide-react'

export default function ExperienceSection() {
	return (
		<section
			className="bg-[#212121] rounded-2xl overflow-hidden h-full flex flex-col"
			id="experience"
		>
			<div className="bg-[#535353] px-6 py-4">
				<h2 className="text-xl font-semibold mb-1">
					Professional Experience
				</h2>
				<p className="flex items-center gap-1.5 text-[#B3B3B3] text-sm">
					<Globe className="w-4 h-4" />
					{experience.length} position
					{experience.length !== 1 ? 's' : ''} •{' '}
					{accomplishments.length} accomplishments
				</p>
			</div>

			<div className="px-4 py-3 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<button
						className="rounded-full bg-[#1DB954] p-3 hover:scale-110 transition-transform shadow-lg"
						aria-label="Play experience showcase"
					>
						<Play className="w-4 h-4 text-black fill-black" />
					</button>
					<div className="flex items-center gap-4">
						<button
							aria-label="Shuffle"
							className="text-[#B3B3B3] hover:text-white transition-colors"
						>
							<Shuffle className="w-5 h-5" />
						</button>
						<button
							aria-label="Add"
							className="text-[#B3B3B3] hover:text-white transition-colors"
						>
							<PlusCircle className="w-5 h-5" />
						</button>
						<button
							aria-label="Download resume"
							className="text-[#B3B3B3] hover:text-white transition-colors"
						>
							<Download className="w-5 h-5" />
						</button>
						<button
							aria-label="More"
							className="text-[#B3B3B3] hover:text-white transition-colors"
						>
							<MoreHorizontal className="w-5 h-5" />
						</button>
					</div>
				</div>
				<button
					aria-label="List view"
					className="text-[#B3B3B3] hover:text-white transition-colors"
				>
					<AlignJustify className="w-5 h-5" />
				</button>
			</div>

			<div className="px-4 pb-4 overflow-y-auto flex-1 space-y-1">
				{experience.map((e, index) => (
					<div
						key={`${e.company}-${e.role}`}
						className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#282828] transition-colors group"
					>
						<span className="text-[#B3B3B3] group-hover:text-white min-w-[20px] text-sm pt-0.5">
							{index + 1}
						</span>
						<div className="flex-1 min-w-0">
							<a className="text-[#1DB954] text-xs font-semibold bg-[#1DB954]/20 hover:bg-[#1DB954]/10 rounded px-2 py-0.5 transition-colors inline-block mb-1">
								{e.company}
							</a>
							<p className="font-semibold text-sm text-white truncate">
								{e.role}
							</p>
							<p className="text-[#B3B3B3] text-xs">
								{e.location} · {e.start} – {e.end}
							</p>

							<ul className="mt-2 space-y-1">
								{e.highlights.map((h) => (
									<li
										key={h}
										className="text-xs text-[#B3B3B3] leading-relaxed flex gap-1.5"
									>
										<span className="text-[#1DB954] mt-1 shrink-0">
											▸
										</span>
										<span>{h}</span>
									</li>
								))}
							</ul>

							<div className="mt-2 flex flex-wrap gap-1.5">
								{e.skills.map((s) => (
									<span
										key={s}
										className="text-[10px] border border-[#535353] hover:border-[#1DB954] hover:text-[#1DB954] text-[#B3B3B3] px-2 py-0.5 rounded-full transition-colors"
									>
										{s}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

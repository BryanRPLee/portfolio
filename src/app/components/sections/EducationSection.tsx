import { education, training, accomplishments } from '@/app/data/resume'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

export default function EducationSection() {
	return (
		<div
			className="bg-[#212121] rounded-2xl p-5 h-full flex flex-col gap-5"
			id="education"
		>
			<div>
				<h2 className="flex items-center gap-2 text-base font-semibold uppercase tracking-widest text-[#B3B3B3] mb-3">
					<GraduationCap className="w-4 h-4 text-[#1DB954]" />
					Education
				</h2>
				<div className="space-y-3">
					{education.map((ed) => (
						<div
							key={ed.school}
							className="bg-[#282828] rounded-xl p-3"
						>
							<p className="font-semibold text-sm text-white">
								{ed.school}
							</p>
							<p className="text-xs text-[#1DB954]">
								{ed.degree}
							</p>
							<p className="text-xs text-[#B3B3B3] mt-0.5">
								{ed.location} · {ed.start} – {ed.end}
							</p>
							{ed.gpa ? (
								<p className="text-xs text-[#B3B3B3] mt-0.5">
									GPA: {ed.gpa}
								</p>
							) : null}
						</div>
					))}
				</div>
			</div>

			<div>
				<h2 className="flex items-center gap-2 text-base font-semibold uppercase tracking-widest text-[#B3B3B3] mb-3">
					<Award className="w-4 h-4 text-[#1DB954]" />
					Accomplishments
				</h2>
				<div className="space-y-2">
					{accomplishments.map((a) => (
						<div
							key={a}
							className="flex items-center gap-2 text-sm text-[#B3B3B3] bg-[#282828] rounded-lg px-3 py-2"
						>
							<span className="text-[#1DB954] text-xs">🏆</span>
							{a}
						</div>
					))}
				</div>
			</div>

			<div>
				<h2 className="flex items-center gap-2 text-base font-semibold uppercase tracking-widest text-[#B3B3B3] mb-3">
					<BookOpen className="w-4 h-4 text-[#1DB954]" />
					Training
				</h2>
				<div className="space-y-2">
					{training.map((t) => (
						<div
							key={t.name}
							className="bg-[#282828] rounded-lg px-3 py-2"
						>
							<p className="text-sm text-white">{t.name}</p>
							<p className="text-xs text-[#B3B3B3]">
								{t.start} – {t.end}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

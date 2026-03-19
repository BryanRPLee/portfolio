import { Header } from '@/app/components/Header'
import { Panel } from '@/app/components/Panel'
import { Section } from '@/app/components/Section'
import { TagList } from '@/app/components/TagList'
import {
	accomplishments,
	education,
	experience,
	projects,
	training
} from '@/app/data/resume'

export default function Page() {
	return (
		<main className="mx-auto w-full max-w-6xl px-5 py-8 pb-16 sm:px-6 lg:px-8">
			<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
				<Header />

				<div className="space-y-10">
					<Section id="accomplishments" title="Accomplishments">
						<Panel title="Highlights">
							<ul className="list-disc space-y-2 pl-5 text-zinc-300">
								{accomplishments.map((a) => (
									<li key={a}>{a}</li>
								))}
							</ul>
						</Panel>
					</Section>

					<Section id="experience" title="Professional Experience">
						<div className="space-y-4">
							{experience.map((e) => (
								<Panel
									key={`${e.company}-${e.role}`}
									title={`${e.role} — ${e.company}`}
									subtitle={`${e.location} • ${e.start} – ${e.end}`}
								>
									<ul className="list-disc space-y-2 pl-5 text-zinc-300">
										{e.highlights.map((h) => (
											<li key={h}>{h}</li>
										))}
									</ul>
									<div className="mt-4">
										<TagList items={e.skills} />
									</div>
								</Panel>
							))}
						</div>
					</Section>

					<Section id="projects" title="Projects">
						<div className="space-y-4">
							{projects.map((p) => (
								<Panel
									key={p.name}
									title={p.name}
									subtitle={p.description}
								>
									{p.bullets?.length ? (
										<ul className="list-disc space-y-2 pl-5 text-zinc-300">
											{p.bullets.map((b) => (
												<li key={b}>{b}</li>
											))}
										</ul>
									) : null}

									<div className="mt-4">
										<TagList items={p.skills} />
									</div>

									{p.links?.length ? (
										<div className="mt-3 flex flex-wrap gap-3">
											{p.links.map((l) => (
												<a
													key={l.href}
													href={l.href}
													target="_blank"
													rel="noreferrer"
													className="text-sm font-medium text-emerald-400 hover:text-emerald-300 hover:underline"
												>
													{l.label}
												</a>
											))}
										</div>
									) : null}
								</Panel>
							))}
						</div>
					</Section>

					<Section id="education" title="Education">
						<div className="space-y-4">
							{education.map((ed) => (
								<Panel
									key={ed.school}
									title={ed.school}
									subtitle={`${ed.location} • ${ed.degree} • ${ed.start} – ${ed.end}`}
								/>
							))}
						</div>
					</Section>

					<Section id="training" title="Professional Training">
						<div className="space-y-3">
							{training.map((t) => (
								<Panel
									key={t.name}
									title={t.name}
									subtitle={`${t.start} – ${t.end}`}
								/>
							))}
						</div>
					</Section>

					<footer className="pt-2 text-sm text-zinc-500">
						© {new Date().getFullYear()} Bryan Lee.
					</footer>
				</div>
			</div>
		</main>
	)
}

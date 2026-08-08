'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
	ArrowUpRight,
	ChevronLeft,
	ChevronRight,
	Github,
	GraduationCap,
	Linkedin,
	Mail,
	MapPin,
	Sparkles
} from 'lucide-react'
import {
	accomplishments,
	education,
	experience,
	projects,
	training
} from '@/app/data/resume'
import { site } from '@/app/data/site'

type StoryTheme = 'coral' | 'cyan' | 'violet' | 'midnight' | 'lime'

type ThemeConfig = {
	background: string
	text: string
	muted: string
	accent: string
	accentAlt: string
	shadow: string
}

type StorySlide = {
	id: string
	theme: StoryTheme
	content: (theme: ThemeConfig) => React.ReactNode
	footer: string
}

type GenreStat = {
	name: string
	count: number
}

const monthLookup: Record<string, number> = {
	Jan: 0,
	Feb: 1,
	Mar: 2,
	Apr: 3,
	May: 4,
	Jun: 5,
	Jul: 6,
	Aug: 7,
	Sep: 8,
	Oct: 9,
	Nov: 10,
	Dec: 11
}

const themeMap: Record<StoryTheme, ThemeConfig> = {
	coral: {
		background: '#ff5d52',
		text: '#090909',
		muted: 'rgba(9, 9, 9, 0.72)',
		accent: '#2934ff',
		accentAlt: '#65ff52',
		shadow: 'rgba(255, 93, 82, 0.32)'
	},
	cyan: {
		background: '#1ea7e1',
		text: '#091018',
		muted: 'rgba(9, 16, 24, 0.72)',
		accent: '#ff40bf',
		accentAlt: '#0a0a0a',
		shadow: 'rgba(30, 167, 225, 0.3)'
	},
	violet: {
		background: '#8b84f4',
		text: '#141414',
		muted: 'rgba(20, 20, 20, 0.74)',
		accent: '#ecff00',
		accentAlt: '#ffffff',
		shadow: 'rgba(139, 132, 244, 0.3)'
	},
	midnight: {
		background: '#080808',
		text: '#f6f7fb',
		muted: 'rgba(246, 247, 251, 0.76)',
		accent: '#ff43c7',
		accentAlt: '#ff6b3d',
		shadow: 'rgba(255, 67, 199, 0.24)'
	},
	lime: {
		background: '#d3ff52',
		text: '#101010',
		muted: 'rgba(16, 16, 16, 0.72)',
		accent: '#0b0b0b',
		accentAlt: '#14b7ff',
		shadow: 'rgba(211, 255, 82, 0.28)'
	}
}

function getMonthSpan(start: string, end: string) {
	const [startMonth, startYear] = start.split(' ')
	const [endMonth, endYear] = end.split(' ')
	const startIndex = monthLookup[startMonth]
	const endIndex = monthLookup[endMonth]

	if (
		startIndex === undefined ||
		endIndex === undefined ||
		!startYear ||
		!endYear
	) {
		return null
	}

	return (
		(Number(endYear) - Number(startYear)) * 12 + (endIndex - startIndex) + 1
	)
}

function buildGenreStats(): GenreStat[] {
	const counts = new Map<string, number>()
	const weightedSkills = [
		...experience.flatMap((entry) =>
			entry.skills.flatMap((skill) => [skill, skill])
		),
		...projects.flatMap((project) => project.skills)
	]

	for (const skill of weightedSkills) {
		counts.set(skill, (counts.get(skill) ?? 0) + 1)
	}

	return [...counts.entries()]
		.map(([name, count]) => ({ name, count }))
		.sort((left, right) => right.count - left.count)
		.slice(0, 5)
}

function ThemeBackdrop({
	theme,
	index
}: {
	theme: ThemeConfig
	index: number
}) {
	return (
		<>
			<div
				className="absolute -left-10 -top-8 h-40 w-40 rounded-4xl opacity-95 blur-[1px]"
				style={{
					background: `radial-gradient(circle at 30% 30%, ${theme.accentAlt} 0%, ${theme.accent} 42%, transparent 76%)`,
					transform: `rotate(${(index % 2 === 0 ? -18 : 18) + index * 3}deg)`
				}}
			/>
			<div
				className="absolute -right-14 top-10 h-52 w-52 rounded-full border-20 opacity-95"
				style={{
					borderColor: theme.accent,
					boxShadow: `0 0 0 10px ${theme.accentAlt}, 0 0 0 20px ${theme.background}`
				}}
			/>
			<div
				className="absolute bottom-14 left-[-12%] h-28 w-[72%] rounded-full border-12 opacity-95"
				style={{
					borderColor: theme.accentAlt,
					boxShadow: `0 0 0 8px ${theme.accent}, 0 0 0 16px ${theme.background}`,
					transform: 'rotate(-18deg)'
				}}
			/>
			<div
				className="absolute bottom-4 right-[-10%] h-44 w-44 rounded-full opacity-70"
				style={{
					background: `radial-gradient(circle, transparent 22%, ${theme.accentAlt} 24%, ${theme.accentAlt} 29%, transparent 31%), radial-gradient(circle, transparent 42%, ${theme.accent} 44%, ${theme.accent} 48%, transparent 50%)`
				}}
			/>
		</>
	)
}

function SlideShell({
	children,
	theme,
	index,
	footer,
	total,
	activeIndex
}: {
	children: React.ReactNode
	theme: ThemeConfig
	index: number
	footer: string
	total: number
	activeIndex: number
}) {
	return (
		<section
			className="relative min-w-full h-full overflow-hidden"
			style={{ backgroundColor: theme.background, color: theme.text }}
		>
			<ThemeBackdrop theme={theme} index={index} />

			<div className="absolute inset-x-4 top-4 z-20 flex gap-1.5">
				{Array.from({ length: total }, (_, progressIndex) => (
					<span
						key={progressIndex}
						className="h-1 flex-1 rounded-full"
						style={{
							backgroundColor:
								progressIndex === activeIndex
									? theme.text
									: progressIndex < activeIndex
										? theme.muted
										: 'rgba(255,255,255,0.35)'
						}}
					/>
				))}
			</div>

			<div className="absolute inset-x-4 top-8 z-20 flex items-center justify-between text-[11px] font-medium">
				<div className="flex items-center gap-2">
					<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/75 text-[9px] text-white">
						S
					</span>
					<span>spotify</span>
				</div>
				<div className="flex items-center gap-2 opacity-75">
					<span>1h</span>
					<span>x</span>
				</div>
			</div>

			<div className="relative z-10 flex h-full flex-col justify-between px-7 pb-7 pt-20">
				<div className="min-h-0 flex-1">{children}</div>
				<div className="flex items-center justify-between pt-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
					<span>Spotify</span>
					<span>{footer}</span>
				</div>
			</div>
		</section>
	)
}

function StatBlock({
	label,
	value,
	theme
}: {
	label: string
	value: string
	theme: ThemeConfig
}) {
	return (
		<div className="rounded-[1.6rem] bg-black/10 px-4 py-3 backdrop-blur-sm">
			<p
				className="text-[11px] uppercase tracking-[0.22em]"
				style={{ color: theme.muted }}
			>
				{label}
			</p>
			<p className="mt-1 text-2xl font-display leading-none">{value}</p>
		</div>
	)
}

export default function WrappedPhoneStory() {
	const touchStartX = useRef<number | null>(null)
	const topExperience = experience[0]
	const topEducation = education[0]
	const monthsAtWiseTech = topExperience
		? getMonthSpan(topExperience.start, topExperience.end)
		: null
	const topGenres = buildGenreStats()
	const featuredNames = [
		'SpyGlass',
		'In-Flight Radar System',
		'FRC Team 4739 "Ctrl + F5"'
	]
	const featuredProjects = projects.filter((project) =>
		featuredNames.includes(project.name)
	)

	const slides: StorySlide[] = [
		{
			id: 'intro',
			theme: 'coral',
			footer: 'Resume Wrapped',
			content: (theme) => (
				<div className="relative flex h-full flex-col justify-between">
					{/* Subtitle at top */}
					<p
						className="text-[11px] font-semibold uppercase tracking-[0.24em]"
						style={{ color: theme.muted }}
					>
						Time is a construct, but we kept track anyway
					</p>
					{/* Profile picture + title at bottom */}
					<div className="relative z-10 space-y-4 pb-18">
						<div className="relative w-36 h-36 shrink-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
							<Image
								src={site.profileImage}
								alt={site.profileImageAlt}
								fill
								sizes="144px"
								className="object-cover object-top"
								priority
							/>
						</div>
						<h1 className="font-display text-[3.4rem] leading-[0.84] tracking-[-0.04em]">
							Bryan Lee
							<br />
							Wrapped
						</h1>
						<p
							className="max-w-[16rem] text-base leading-7"
							style={{ color: theme.muted }}
						>
							Swipe through the story for software engineering,
							projects, study, and the parts of your resume worth
							replaying.
						</p>
					</div>
				</div>
			)
		},
		{
			id: 'time-at-work',
			theme: 'cyan',
			footer: 'Experience Peak',
			content: (theme) => (
				<div className="flex h-full flex-col justify-center pb-16 text-center">
					<p
						className="text-[11px] font-semibold uppercase tracking-[0.25em]"
						style={{ color: theme.muted }}
					>
						You shipped for
					</p>
					<p className="mt-4 font-display text-[5rem] leading-none tracking-[-0.06em]">
						{monthsAtWiseTech ?? 24}
					</p>
					<p className="mt-3 text-3xl font-black leading-tight">
						months at WiseTech
					</p>
					<p
						className="mx-auto mt-6 max-w-[16rem] text-sm leading-6"
						style={{ color: theme.muted }}
					>
						{topExperience?.role} from {topExperience?.start} to{' '}
						{topExperience?.end}. Real product work, not student
						filler.
					</p>
				</div>
			)
		},
		{
			id: 'impact-1',
			theme: 'midnight',
			footer: 'Analytics Mode',
			content: (theme) => (
				<div className="flex h-full flex-col justify-between">
					<div className="rounded-4xl bg-white/6 p-4 backdrop-blur-sm">
						<p
							className="text-[11px] uppercase tracking-[0.22em]"
							style={{ color: theme.muted }}
						>
							Top work moment
						</p>
					</div>
					<div className="pb-16">
						<p className="max-w-60 font-display text-4xl leading-[0.9] tracking-[-0.04em]">
							Regional analytics tooling across multiple logistics
							markets.
						</p>
						<p
							className="mt-5 max-w-60 text-sm leading-6"
							style={{ color: theme.muted }}
						>
							Built features spanning SQL, API integration, and
							Kibana visualizations so teams could benchmark
							across regions.
						</p>
					</div>
				</div>
			)
		},
		{
			id: 'impact-2',
			theme: 'coral',
			footer: 'Replication API Replay',
			content: (theme) => (
				<div className="flex h-full flex-col justify-between">
					<div className="grid grid-cols-2 gap-3">
						<StatBlock
							label="CDC pipeline"
							value="EDW"
							theme={theme}
						/>
						<StatBlock
							label="Onboarding"
							value="~60"
							theme={theme}
						/>
					</div>
					<div className="pb-16">
						<p className="font-display text-[3rem] leading-[0.88] tracking-[-0.05em]">
							You designed a Replication API that replaced manual
							querying for good.
						</p>
						<p
							className="mt-4 max-w-60 text-sm leading-6"
							style={{ color: theme.muted }}
						>
							Shipped CDC to EDW replication and mentored roughly
							sixty engineers during Earn and Learn onboarding.
						</p>
					</div>
				</div>
			)
		},
		{
			id: 'skills',
			theme: 'violet',
			footer: 'Top Genres',
			content: (theme) => (
				<div className="flex h-full flex-col justify-between">
					<div>
						<p
							className="text-[11px] font-semibold uppercase tracking-[0.24em]"
							style={{ color: theme.muted }}
						>
							Your top genres
						</p>
						<h2 className="mt-4 font-display text-[3.2rem] leading-[0.88] tracking-[-0.05em]">
							{topGenres[0]?.name ?? 'TypeScript'} leads the
							listening.
						</h2>
					</div>

					<div className="space-y-3 pb-10">
						{topGenres.map((genre, index) => (
							<div
								key={genre.name}
								className="flex items-end justify-between border-b border-black/10 pb-2"
							>
								<div>
									<p
										className="text-[11px] uppercase tracking-[0.2em]"
										style={{ color: theme.muted }}
									>
										Top {index + 1}
									</p>
									<p className="text-2xl font-black">
										{genre.name}
									</p>
								</div>
								<p className="font-display text-3xl leading-none">
									{genre.count}
								</p>
							</div>
						))}
					</div>
				</div>
			)
		},
		...featuredProjects.map((project, index) => ({
			id: `project-${project.name}`,
			theme: (index === 0 ? 'midnight' : index === 1 ? 'cyan' : 'lime') as StoryTheme,
			footer: 'Project Replay',
			content: (theme: ThemeConfig) => (
				<div className="flex h-full flex-col justify-between">
					<div className="flex items-start justify-between gap-4">
						<div>
							<p
								className="text-[11px] uppercase tracking-[0.22em]"
								style={{ color: theme.muted }}
							>
								Top project {index + 1}
							</p>
							<h2 className="mt-3 max-w-48 font-display text-[3rem] leading-[0.86] tracking-[-0.05em]">
								{project.name}
							</h2>
						</div>
						<a
							href={project.links?.[0]?.href}
							target="_blank"
							rel="noreferrer"
							className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/75 text-white"
						>
							<ArrowUpRight className="h-4 w-4" />
						</a>
					</div>

					<div className="rounded-4xl bg-black/12 p-4 backdrop-blur-sm">
						<p
							className="text-sm leading-6"
							style={{ color: theme.muted }}
						>
							{project.description}
						</p>
					</div>

					<div className="space-y-4 pb-10">
						<div className="flex flex-wrap gap-2">
							{project.skills.map((skill) => (
								<span
									key={skill}
									className="rounded-full bg-black/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white"
								>
									{skill}
								</span>
							))}
						</div>
						{project.bullets?.slice(0, 2).map((bullet) => (
							<p
								key={bullet}
								className="text-sm leading-6"
								style={{ color: theme.muted }}
							>
								{bullet}
							</p>
						))}
					</div>
				</div>
			)
		})),
		{
			id: 'education',
			theme: 'violet',
			footer: 'Study Mode',
			content: (theme) => (
				<div className="flex h-full flex-col justify-between">
					<div className="inline-flex w-fit items-center gap-2 rounded-full bg-black/75 px-4 py-2 text-white">
						<GraduationCap className="h-4 w-4" />
						<span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
							Study mode
						</span>
					</div>
					<div className="pb-12">
						<p className="font-display text-[3rem] leading-[0.88] tracking-[-0.05em]">
							{topEducation?.school}
						</p>
						<p className="mt-4 text-lg font-semibold">
							{topEducation?.degree}
						</p>
						<p
							className="mt-3 max-w-[16rem] text-sm leading-6"
							style={{ color: theme.muted }}
						>
							{topEducation?.location} from {topEducation?.start}{' '}
							to {topEducation?.end}. Built to run alongside
							full-time engineering work.
						</p>
					</div>
				</div>
			)
		},
		{
			id: 'awards',
			theme: 'coral',
			footer: 'Recognition',
			content: (theme) => (
				<div className="flex h-full flex-col justify-between">
					<div>
						<p
							className="text-[11px] font-semibold uppercase tracking-[0.24em]"
							style={{ color: theme.muted }}
						>
							Extra signals
						</p>
						<h2 className="mt-4 font-display text-[3rem] leading-[0.88] tracking-[-0.05em]">
							The resume kept stacking receipts.
						</h2>
					</div>

					<div className="space-y-3 pb-10">
						{[
							...accomplishments,
							...training.map((course) => course.name)
						].map((item) => (
							<div
								key={item}
								className="rounded-[1.6rem] bg-black/12 px-4 py-3 backdrop-blur-sm"
							>
								<p className="flex items-start gap-3 text-sm leading-6">
									<Sparkles className="mt-1 h-4 w-4 shrink-0" />
									<span>{item}</span>
								</p>
							</div>
						))}
					</div>
				</div>
			)
		},
		{
			id: 'outro',
			theme: 'midnight',
			footer: 'Connect',
			content: (theme) => (
				<div className="flex h-full flex-col justify-between">
					<div className="space-y-4">
						<p
							className="text-[11px] font-semibold uppercase tracking-[0.24em]"
							style={{ color: theme.muted }}
						>
							That was Bryan Lee Wrapped.
						</p>
						<h2 className="font-display text-[3.2rem] leading-[0.86] tracking-[-0.05em]">
							Let&apos;s build something worth replaying.
						</h2>
						<div
							className="flex items-center gap-2 text-sm"
							style={{ color: theme.muted }}
						>
							<MapPin className="h-4 w-4" />
							{site.location}
						</div>
					</div>

					<div className="relative z-30 space-y-3 pb-10">
						<a
							href={`mailto:${site.email}`}
							className="flex items-center justify-between rounded-[1.6rem] bg-white px-4 py-3 text-sm font-semibold text-black"
						>
							<span className="flex items-center gap-3">
								<Mail className="h-4 w-4" />
								Email
							</span>
							<span>{site.email}</span>
						</a>
						<a
							href={site.links.github}
							target="_blank"
							rel="noreferrer"
							className="flex items-center justify-between rounded-[1.6rem] bg-white/8 px-4 py-3 text-sm font-semibold text-white"
						>
							<span className="flex items-center gap-3">
								<Github className="h-4 w-4" />
								GitHub
							</span>
							<ArrowUpRight className="h-4 w-4" />
						</a>
						<a
							href={site.links.linkedin}
							target="_blank"
							rel="noreferrer"
							className="flex items-center justify-between rounded-[1.6rem] bg-white/8 px-4 py-3 text-sm font-semibold text-white"
						>
							<span className="flex items-center gap-3">
								<Linkedin className="h-4 w-4" />
								LinkedIn
							</span>
							<ArrowUpRight className="h-4 w-4" />
						</a>
					</div>
				</div>
			)
		}
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	function goNext() {
		setCurrentIndex((index) => Math.min(index + 1, slides.length - 1))
	}

	function goPrev() {
		setCurrentIndex((index) => Math.max(index - 1, 0))
	}

	function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
		touchStartX.current = event.clientX
	}

	function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
		if (touchStartX.current === null) {
			return
		}

		const delta = event.clientX - touchStartX.current
		touchStartX.current = null

		if (delta <= -40) {
			goNext()
		}

		if (delta >= 40) {
			goPrev()
		}
	}

	useEffect(() => {
		function handleKeydown(event: KeyboardEvent) {
			if (event.key === 'ArrowRight') {
				goNext()
			}

			if (event.key === 'ArrowLeft') {
				goPrev()
			}
		}

		window.addEventListener('keydown', handleKeydown)

		return () => window.removeEventListener('keydown', handleKeydown)
	}, [])

	return (
		<div className="flex w-full flex-col items-center gap-6">
			<div className="relative w-full max-w-105">
				<div
					className="rounded-[3.25rem] bg-black p-3 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
					style={{
						boxShadow: `0 40px 120px ${themeMap[slides[currentIndex].theme].shadow}`
					}}
				>
	
					<div
						className="relative overflow-hidden rounded-[2.5rem] bg-black"
						style={{ aspectRatio: '9 / 18.5' }}
						onPointerDown={handlePointerDown}
						onPointerUp={handlePointerUp}
					>
						<div
							className="flex h-full transition-transform duration-500 ease-out"
							style={{
								transform: `translateX(-${currentIndex * 100}%)`
							}}
						>
							{slides.map((slide, index) => (
								<SlideShell
									key={slide.id}
									theme={themeMap[slide.theme]}
									index={index}
									footer={slide.footer}
									total={slides.length}
									activeIndex={currentIndex}
								>
									{slide.content(themeMap[slide.theme])}
								</SlideShell>
							))}
						</div>

						<button
							onClick={goPrev}
							className="absolute inset-y-0 left-0 z-20 w-1/3 touch-none border-0 bg-transparent p-0 focus:outline-none focus-visible:outline-none"
							aria-label="Previous slide"
							tabIndex={-1}
						/>
						<button
							onClick={goNext}
							className="absolute inset-y-0 right-0 z-20 w-1/3 touch-none border-0 bg-transparent p-0 focus:outline-none focus-visible:outline-none"
							aria-label="Next slide"
							tabIndex={-1}
						/>
					</div>
				</div>
			</div>

			<div className="flex items-center gap-2 text-xs text-white/45">
				<Image
					src={site.profileImage}
					alt={site.profileImageAlt}
					width={28}
					height={28}
					className="h-7 w-7 rounded-full object-cover"
				/>
				<span>
					{site.title} · Swipe through for the resume highlights.
				</span>
			</div>
		</div>
	)
}

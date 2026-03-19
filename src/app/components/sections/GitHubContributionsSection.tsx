import { site } from '@/app/data/site'

function getGithubUsername(profileUrl: string) {
	const url = profileUrl.trim().replace(/\/+$/, '')
	return url.split('/').pop() ?? ''
}

type ContributionDay = {
	date: string
	count: number
	level: number
}

function levelClass(level: number) {
	if (level <= 0) return 'bg-[#535353]/40'
	if (level === 1) return 'bg-[#1DB954]/25'
	if (level === 2) return 'bg-[#1DB954]/50'
	if (level === 3) return 'bg-[#1DB954]/75'
	return 'bg-[#1DB954]'
}

async function getContributions(username: string) {
	const response = await fetch(
		`https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
		{ next: { revalidate: 3600 } }
	)

	if (!response.ok) {
		return [] as ContributionDay[]
	}

	const data = (await response.json()) as {
		contributions?: ContributionDay[]
	}

	return data.contributions ?? []
}

export default async function GitHubContributionsSection() {
	const username = getGithubUsername(site.links.github)
	const contributions = await getContributions(username)

	const weeks: Array<Array<ContributionDay | null>> = []
	if (contributions.length) {
		const firstDate = new Date(`${contributions[0].date}T00:00:00`)
		const leadingEmpty = firstDate.getDay()

		const padded: Array<ContributionDay | null> = [
			...Array.from({ length: leadingEmpty }, () => null),
			...contributions
		]

		const trailingEmpty = (7 - (padded.length % 7)) % 7
		padded.push(...Array.from({ length: trailingEmpty }, () => null))

		for (let i = 0; i < padded.length; i += 7) {
			weeks.push(padded.slice(i, i + 7))
		}
	}

	const hasData = weeks.length > 0

	return (
		<div className="bg-[#212121] rounded-2xl p-5" id="github-contributions">
			<div className="flex items-center justify-between gap-3 mb-4">
				<h2 className="text-xl font-semibold">GitHub Contributions</h2>
				<a
					href={site.links.github}
					target="_blank"
					rel="noreferrer"
					className="text-xs font-semibold border border-[#535353] hover:border-white text-white px-3 py-1.5 rounded-full transition-all hover:scale-105"
				>
					View Profile
				</a>
			</div>

			<div className="rounded-xl border border-[#282828] bg-[#282828] p-3 overflow-hidden">
				{hasData ? (
					<div className="flex items-start gap-2 w-full">
						<div className="pt-0.5 pr-1 text-[10px] leading-2.5 text-[#535353] grid grid-rows-7 gap-1">
							<span className="h-2" />
							<span className="h-2">Mon</span>
							<span className="h-2" />
							<span className="h-2">Wed</span>
							<span className="h-2" />
							<span className="h-2">Fri</span>
							<span className="h-2" />
						</div>

						<div
							className="grid flex-1 gap-1"
							style={{
								gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`
							}}
						>
							{weeks.map((week, weekIndex) => (
								<div
									key={weekIndex}
									className="grid grid-rows-7 gap-1"
								>
									{week.map((day, dayIndex) => (
										<div
											key={`${weekIndex}-${dayIndex}-${day?.date ?? 'empty'}`}
											className={`w-full aspect-square rounded-xs ${
												day
													? levelClass(day.level)
													: 'bg-transparent'
											}`}
											title={
												day
													? `${day.count} contributions on ${day.date}`
													: undefined
											}
										/>
									))}
								</div>
							))}
						</div>
					</div>
				) : (
					<p className="text-sm text-[#B3B3B3]">
						Contribution data unavailable right now.
					</p>
				)}

				<div className="mt-3 flex items-center justify-end gap-2 text-[10px] text-[#535353]">
					<span>Less</span>
					<span className="w-2.5 h-2.5 rounded-xs bg-[#535353]/40" />
					<span className="w-2.5 h-2.5 rounded-xs bg-[#1DB954]/25" />
					<span className="w-2.5 h-2.5 rounded-xs bg-[#1DB954]/50" />
					<span className="w-2.5 h-2.5 rounded-xs bg-[#1DB954]/75" />
					<span className="w-2.5 h-2.5 rounded-xs bg-[#1DB954]" />
					<span>More</span>
				</div>
			</div>
		</div>
	)
}

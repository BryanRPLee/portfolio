export type Experience = {
	company: string
	role: string
	location: string
	start: string
	end: string
	highlights: string[]
	skills: string[]
}

export type Project = {
	name: string
	description: string
	skills: string[]
	bullets?: string[]
	links?: { label: string; href: string }[]
}

import { Experience, Project } from './types'

export const accomplishments = [
	"Dean's List Recipient",
	'WiseTech Earn and Learn Scholarship 2024'
]

export const experience: Experience[] = [
	{
		company: 'WiseTech Global',
		role: 'Associate Software Engineer',
		location: 'Sydney, NSW, Australia',
		start: 'Jan 2024',
		end: 'Nov 2025',
		highlights: [
			'Logistics Analytics: delivered regional analytics tooling to enable cross-region benchmarking; built end-to-end features spanning SQL/data modeling, API integration, and Kibana visualizations.',
			'Improved data quality and product resilience via validation, ingestion fixes, and stronger error-handling; supported internal stakeholders with iterative delivery.',
			'BorderWise: migrated components to Vue, redesigned UI, reduced regressions, and improved maintainability with clearer patterns and documentation.',
			'Business Intelligence: built a replication API route to surface audit/CDC records (SOQL/Kibana queries) and integrated CDC processing/validation into EDW pipelines to improve visibility and customer outcomes.',
			'Mentored ~60 new engineers during onboarding (Earn & Learn 2025), including technical training to accelerate ramp-up.'
		],
		skills: [
			'C++',
			'Typescript',
			'SQL',
			'Vue',
			'React',
			'Xamarin',
			'Enterprise Software',
			'Software Infrastructure',
			'Test Driven Development'
		]
	}
]

export const projects: Project[] = [
	{
		name: 'SpyGlass',
		description:
			"A viral crawler for CS2 match data that bypasses Valve's 8‑match history limitation by recursively discovering and persisting players, matches, rounds, and stats into a growing historical dataset.",
		skills: ['Vue', 'Typescript', 'SQL'],
		bullets: [
			'Designed for scalable crawling and durable storage of match/player networks.',
			'Focus on data integrity and incremental discovery of new entities.'
		],
		links: [
			{ label: 'GitHub', href: 'https://github.com/BryanRPLee/SpyGlass' }
		]
	},
	{
		name: 'Lexical (Facebook)',
		description:
			"Contributed to Facebook's open-source Lexical editor by extending AutoLinkPlugin with optional separators regex config, enabling custom boundary characters while preserving backward compatibility.",
		skills: ['Typescript', 'React', 'Test Driven Development'],
		bullets: ['Added unit tests and maintained compatibility guarantees.'],
		links: [
			{
				label: 'PR/Issue',
				href: 'https://github.com/facebook/lexical/pull/8191'
			}
		]
	},
	{
		name: 'Telescope',
		description:
			"A code editor built with Vue 3, TypeScript, and Electron that replaces fixed panels with freely floating windows — inspired by telescope.nvim's fuzzy-finder UX — giving each pane its own position, size, and z-order.",
		skills: ['Vue', 'Typescript', 'Electron'],
		bullets: [
			'Floating window model: every editor pane is independently draggable and resizable, eliminating the rigid split-panel layout common to most editors.',
			'Built on Vite + Electron for a fast dev loop and a native desktop shell.'
		],
		links: [
			{ label: 'GitHub', href: 'https://github.com/BryanRPLee/Telescope' }
		]
	},
	{
		name: 'Bronny James Basketball IQ',
		description:
			"A data-science notebook that reverse-engineers CraftedNBA's Basketball IQ metric using adjusted box-plus-minus alongside box-score and advanced stats from the first 16 games of the season to rank NBA players by decision-making quality.",
		skills: ['Python', 'Jupyter Notebook', 'Data Science'],
		bullets: [
			'Sourced and merged data from the NBA, ESPN, and RAPM APIs into a unified dataset.',
			"Produced a ranked top-20 leaderboard; surfaced Bronny James's comparative standing against league leaders."
		],
		links: [
			{
				label: 'GitHub',
				href: 'https://github.com/BryanRPLee/bronny-james-basketball-iq'
			}
		]
	}
]

export const education = [
	{
		school: 'University of Technology Sydney',
		location: 'Sydney, Australia',
		degree: 'Bachelor of Computer Science (IDEA)',
		start: 'Jan 2024',
		end: 'Nov 2026'
	}
]
export const training = [
	{ name: 'Data Science for AI, IBM', start: 'Dec 2025', end: 'Jan 2026' },
	{
		name: 'Data Science for Finance, IBM',
		start: 'Dec 2025',
		end: 'Jan 2026'
	}
]

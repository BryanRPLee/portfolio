import { Education, Experience, Project } from './types'

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
			'Joined straight out of high school on the Earn and Learn program, working full-time while starting a CS degree at UTS.',
			'Built a region-level analytics platform (Vue.js, .NET, SQL, Kibana) to enable cross-region benchmarking for internal stakeholders.',
			'Designed and delivered a Replication API (CDC to EDW) that replaced manual querying workflows, improving data visibility and turnaround for customer-facing teams.',
			'Built end-to-end data pipelines (Python, SQL, REST APIs) to move and validate data across internal systems.',
			'Contributed to the Product Warehouse Android app (Java), shipping features across the mobile client.',
			'Used GitHub Copilot to accelerate day-to-day development.',
			'Mentored ~60 new engineers during onboarding (Earn & Learn 2025), including technical training to accelerate ramp-up.'
		],
		skills: [
			'Vue',
			'.NET',
			'SQL',
			'Kibana',
			'Python',
			'REST APIs',
			'Java',
			'C++',
			'Typescript',
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
			"An ML/data-science model that quantifies spatial awareness and decision-making quality in NBA players, reverse-engineering CraftedNBA's Basketball IQ metric using adjusted box-plus-minus alongside box-score and advanced stats from the first 16 games of the season.",
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
	},
	{
		name: 'In-Flight Radar System',
		description:
			'A portable weather radar for small aircraft, combining an ESP32-based radar sweep with a Python cockpit display client for real-time weather data visualisation.',
		skills: ['C++', 'Python', 'C'],
		bullets: [
			'ESP32 firmware drives a servo sweep, RF sampling, IMU updates, and GPS parsing, exposing the data over onboard HTTP endpoints.',
			'Desktop Python client renders live sweep data from the radar or a demo feed for cockpit display testing.'
		],
		links: [
			{
				label: 'GitHub',
				href: 'https://github.com/BryanRPLee/weather-radar'
			}
		]
	},
	{
		name: 'FRC Team 4739 "Ctrl + F5"',
		description:
			'Robot control software (Java) for FIRST Robotics Competition, handling real-time control and hardware integration for the team\'s competition robot.',
		skills: ['Java', 'Real-Time Systems', 'Hardware Integration'],
		bullets: [
			"Competed at FIRST Robotics Championship in Wollongong, 2023."
		]
	}
]

export const education: Education[] = [
	{
		school: 'University of Technology Sydney',
		location: 'Sydney, Australia',
		degree: 'Bachelor of Computer Science (IDEA)',
		start: 'Jan 2024',
		end: 'Nov 2026',
		gpa: '6.42 / 7.0'
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

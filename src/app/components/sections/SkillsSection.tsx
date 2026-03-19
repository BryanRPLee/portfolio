'use client'

import Image from 'next/image'

const skills = [
	{ name: 'TypeScript', icon: 'typescript/typescript-original' },
	{ name: 'React', icon: 'react/react-original' },
	{ name: 'Vue', icon: 'vuejs/vuejs-original' },
	{ name: 'Next.js', icon: 'nextjs/nextjs-original' },
	{ name: 'C++', icon: 'cplusplus/cplusplus-original' },
	{ name: 'C#', icon: 'csharp/csharp-original' },
	{ name: 'SQL', icon: 'postgresql/postgresql-original' },
	{ name: 'Node.js', icon: 'nodejs/nodejs-original' },
	{ name: 'Docker', icon: 'docker/docker-original' },
	{ name: 'Git', icon: 'git/git-original' },
	{ name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original' },
	{ name: 'Figma', icon: 'figma/figma-original' },
	{ name: 'Kibana', icon: 'elasticsearch/elasticsearch-original' }
]

const allSkills = [...skills, ...skills]

export default function SkillsSection() {
	return (
		<div
			className="bg-[#212121] rounded-2xl p-5 overflow-hidden"
			id="skills"
		>
			<h2 className="text-xl font-semibold mb-4">Skills</h2>

			<div className="relative overflow-hidden group">
				<div
					className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
					style={{
						background:
							'linear-gradient(to right, var(--card-bg), transparent)'
					}}
				/>
				<div
					className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
					style={{
						background:
							'linear-gradient(to left, var(--card-bg), transparent)'
					}}
				/>

				<div
					className="flex gap-6 w-max will-change-transform group-hover:[animation-play-state:paused]"
					style={{
						animation: 'scroll-x 28s linear infinite'
					}}
				>
					{allSkills.map((skill, i) => (
						<div
							key={`${skill.name}-${i}`}
							className="flex flex-col items-center gap-2 min-w-18 group"
						>
							<div className="w-12 h-12 rounded-xl bg-[#282828] group-hover:bg-[#323131] flex items-center justify-center transition-colors p-2">
								<Image
									src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}.svg`}
									width={32}
									height={32}
									alt={skill.name}
									className="object-contain"
								/>
							</div>
							<span className="text-[10px] text-[#B3B3B3] group-hover:text-white transition-colors text-center">
								{skill.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

import Image from 'next/image'
import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react'
import { site } from '@/app/data/site'
import { Panel } from '@/app/components/Panel'

function LinkItem(props: { href: string; label: string; Icon: LucideIcon }) {
	return (
		<a
			className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:border-emerald-500 hover:text-emerald-400"
			href={props.href}
			target="_blank"
			rel="noreferrer"
		>
			<props.Icon className="size-4" />
			{props.label}
		</a>
	)
}

export function Header() {
	const contacts = [
		{ href: `mailto:${site.email}`, label: site.email, icon: Mail },
		{ href: site.links.github, label: 'GitHub', icon: Github },
		{ href: site.links.linkedin, label: 'LinkedIn', icon: Linkedin }
	]

	return (
		<header className="lg:sticky lg:top-8 lg:self-start">
			<Panel title={site.name} subtitle={site.title} className="p-6">
				<div className="mb-5">
					<div className="relative h-28 w-28 overflow-hidden rounded-full border border-zinc-700 bg-zinc-800">
						<Image
							src={site.profileImage}
							alt={site.profileImageAlt}
							fill
							sizes="112px"
							className="object-cover"
							priority
						/>
					</div>
				</div>

				<p className="text-sm text-zinc-400">{site.location}</p>
				<p className="mt-2 text-sm text-zinc-400">{site.phone}</p>

				<div className="mt-5 flex flex-wrap gap-3">
					{contacts.map((contact) => (
						<LinkItem
							key={contact.label}
							href={contact.href}
							label={contact.label}
							Icon={contact.icon}
						/>
					))}
				</div>

				<div className="mt-5 space-y-3">
					{site.summary.map((line) => (
						<p
							key={line}
							className="text-sm leading-6 text-zinc-300"
						>
							{line}
						</p>
					))}
				</div>
			</Panel>
		</header>
	)
}

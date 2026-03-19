import type { ReactNode } from 'react'

export function Section(props: {
	id?: string
	title: string
	children: ReactNode
}) {
	return (
		<section id={props.id} className="scroll-mt-24">
			<div className="flex items-end justify-between gap-4">
				<h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-zinc-300">
					{props.title}
				</h2>
			</div>
			<div className="mt-4">{props.children}</div>
		</section>
	)
}

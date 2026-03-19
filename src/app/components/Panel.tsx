import type { ReactNode } from 'react'

type PanelProps = {
	title: string
	subtitle?: string
	children?: ReactNode
	className?: string
}

export function Panel({ title, subtitle, children, className }: PanelProps) {
	return (
		<article
			className={`rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-sm backdrop-blur ${className ?? ''}`}
		>
			<div className="flex flex-col gap-1">
				<h3 className="text-base font-semibold text-zinc-100">
					{title}
				</h3>
				{subtitle ? (
					<p className="text-sm text-zinc-400">{subtitle}</p>
				) : null}
			</div>
			{children ? <div className="mt-4">{children}</div> : null}
		</article>
	)
}

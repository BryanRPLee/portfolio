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
			className={`rounded-2xl border border-[#282828] bg-[#212121] p-5 shadow-sm ${className ?? ''}`}
		>
			<div className="flex flex-col gap-1">
				<h3 className="text-base font-semibold text-white">{title}</h3>
				{subtitle ? (
					<p className="text-sm text-[#B3B3B3]">{subtitle}</p>
				) : null}
			</div>
			{children ? <div className="mt-4">{children}</div> : null}
		</article>
	)
}

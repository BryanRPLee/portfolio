export function TagList(props: { items: string[] }) {
	return (
		<ul className="flex flex-wrap gap-2">
			{props.items.map((t) => (
				<li
					key={t}
					className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm text-zinc-300 transition-colors hover:border-emerald-500 hover:text-emerald-400"
				>
					{t}
				</li>
			))}
		</ul>
	)
}

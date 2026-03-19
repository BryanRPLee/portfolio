export function TagList(props: { items: string[] }) {
	return (
		<ul className="flex flex-wrap gap-2">
			{props.items.map((t) => (
				<li
					key={t}
					className="rounded-full border border-[#535353] bg-[#282828] px-3 py-1 text-sm text-[#B3B3B3] transition-colors hover:border-[#1DB954] hover:text-[#1DB954] cursor-default"
				>
					{t}
				</li>
			))}
		</ul>
	)
}

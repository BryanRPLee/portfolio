'use client'

import { type ReactNode, useState } from 'react'
import { LayoutGrid, Smartphone } from 'lucide-react'

type Mode = 'wrapped' | 'normal'

export default function LayoutSwitcher({
	wrappedLayout,
	normalLayout
}: {
	wrappedLayout: ReactNode
	normalLayout: ReactNode
}) {
	const [mode, setMode] = useState<Mode>('wrapped')

	return (
		<div className="relative">
			{/* Wrapped layout */}
			<div
				aria-hidden={mode !== 'wrapped'}
				className={[
					'transition-[opacity,transform] duration-500 ease-in-out',
					mode === 'wrapped'
						? 'pointer-events-auto relative z-10 opacity-100 translate-y-0'
						: 'pointer-events-none absolute inset-x-0 top-0 z-0 opacity-0 -translate-y-3'
				].join(' ')}
			>
				<main className="mx-auto flex min-h-[calc(100dvh-5rem)] w-full max-w-7xl items-center justify-center px-4 pb-12 pt-6 sm:px-8 lg:px-12">
					{wrappedLayout}
				</main>
			</div>

			{/* Normal layout */}
			<div
				aria-hidden={mode !== 'normal'}
				className={[
					'transition-[opacity,transform] duration-500 ease-in-out',
					mode === 'normal'
						? 'pointer-events-auto relative z-10 opacity-100 translate-y-0'
						: 'pointer-events-none absolute inset-x-0 top-0 z-0 opacity-0 translate-y-3'
				].join(' ')}
			>
				{normalLayout}
			</div>

			{/* Mode toggle */}
			<div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
				<button
					onClick={() =>
						setMode((m) => (m === 'wrapped' ? 'normal' : 'wrapped'))
					}
					className="flex items-center gap-2 rounded-full border border-white/15 bg-black/75 px-5 py-2.5 text-sm font-semibold text-white shadow-xl backdrop-blur-xl transition-all duration-200 hover:scale-105 hover:border-[#1ed760]/60 hover:text-[#1ed760]"
				>
					{mode === 'wrapped' ? (
						<>
							<LayoutGrid className="h-4 w-4" />
							Portfolio View
						</>
					) : (
						<>
							<Smartphone className="h-4 w-4" />
							Wrapped View
						</>
					)}
				</button>
			</div>
		</div>
	)
}

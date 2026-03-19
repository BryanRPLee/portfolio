'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
	const [dark, setDark] = useState(true)

	useEffect(() => {
		setDark(document.documentElement.classList.contains('dark'))
	}, [])

	function toggle() {
		const isDark = document.documentElement.classList.contains('dark')
		if (isDark) {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
			setDark(false)
		} else {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
			setDark(true)
		}
	}

	return (
		<button
			onClick={toggle}
			className="fixed bottom-6 right-6 z-50 bg-[#212121] border border-[#333] hover:border-[#1DB954] p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110"
			aria-label="Toggle light/dark mode"
		>
			{dark ? (
				<Sun className="w-5 h-5 text-[#1DB954]" />
			) : (
				<Moon className="w-5 h-5 text-[#1DB954]" />
			)}
		</button>
	)
}

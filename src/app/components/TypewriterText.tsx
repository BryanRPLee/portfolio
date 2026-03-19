'use client'

import { useState, useEffect } from 'react'

export default function TypewriterText({
	text,
	speed = 40,
	className
}: {
	text: string
	speed?: number
	className?: string
}) {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		if (index >= text.length) return
		const timer = setTimeout(() => setIndex((i) => i + 1), speed)
		return () => clearTimeout(timer)
	}, [index, text, speed])

	return <span className={className}>{text.slice(0, index)}</span>
}

import Image from 'next/image'
import { site } from '@/app/data/site'

export default function ProfileCard() {
	return (
		<div className="bg-[#212121] rounded-2xl p-5 h-full flex flex-col gap-6">
			<div className="flex justify-center">
				<div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#1DB954] shadow-lg shadow-[#1DB954]/20">
					<Image
						src={site.profileImage}
						alt={site.profileImageAlt}
						fill
						sizes="144px"
						className="object-cover"
						priority
					/>
				</div>
			</div>

			<div className="text-center space-y-1">
				<h1 className="text-2xl font-bold text-white">{site.name}</h1>
				<p className="text-[#B3B3B3] text-sm leading-snug">
					{site.title}
				</p>
				<p className="text-[#535353] text-xs">{site.location}</p>
			</div>

			<div className="space-y-3 text-sm text-[#B3B3B3] leading-6">
				{site.summary.map((line) => (
					<p key={line}>{line}</p>
				))}
			</div>

			<div className="mt-auto flex flex-wrap gap-2">
				<a
					href={`mailto:${site.email}`}
					className="flex-1 text-center text-xs font-semibold bg-[#1DB954] hover:bg-[#189a45] text-black py-2 px-3 rounded-full transition-all hover:scale-105"
				>
					Email Me
				</a>
				<a
					href={site.links.github}
					target="_blank"
					rel="noreferrer"
					className="flex-1 text-center text-xs font-semibold border border-[#535353] hover:border-white text-white py-2 px-3 rounded-full transition-all hover:scale-105"
				>
					GitHub
				</a>
				<a
					href={site.links.linkedin}
					target="_blank"
					rel="noreferrer"
					className="flex-1 text-center text-xs font-semibold border border-[#535353] hover:border-white text-white py-2 px-3 rounded-full transition-all hover:scale-105"
				>
					LinkedIn
				</a>
			</div>
		</div>
	)
}

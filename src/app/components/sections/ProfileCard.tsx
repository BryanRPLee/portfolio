import Image from 'next/image'
import { Play, Mail, Github, Linkedin, ArrowDown } from 'lucide-react'
import { site } from '@/app/data/site'
import TypewriterText from '@/app/components/TypewriterText'

const playlistLinks = [
	{
		label: 'Email Me',
		playlistName: 'Inbox Vibes',
		sublabel: site.email,
		href: `mailto:${site.email}`,
		Icon: Mail,
		photo: '/icons/email.jpg',
		iconColor: '#fff',
		external: false
	},
	{
		label: 'GitHub',
		playlistName: 'Commit Nights',
		sublabel: 'BryanRPLee',
		href: site.links.github,
		Icon: Github,
		photo: '/icons/github.jpg',
		iconColor: '#fff',
		external: true
	},
	{
		label: 'LinkedIn',
		playlistName: 'Career Mix',
		sublabel: 'bryanrplee',
		href: site.links.linkedin,
		Icon: Linkedin,
		photo: '/icons/linkedin.jpg',
		iconColor: '#fff',
		external: true
	}
]

export default function ProfileCard() {
	return (
		<div className="bg-[#212121] rounded-2xl overflow-hidden h-full lg:max-h-[78vh] flex flex-col gap-5">
			{/* Spotify-style gradient header */}
			<div className="relative px-5 pt-5 pb-6 bg-linear-to-b from-[#1a3d28] via-[#1e2d23] to-[#212121]">
				<div className="flex items-end gap-4">
					<div className="relative w-32 h-32 shrink-0 rounded-xl overflow-hidden shadow-2xl shadow-black/60">
						<Image
							src={site.profileImage}
							alt={site.profileImageAlt}
							fill
							sizes="128px"
							className="object-cover"
							priority
						/>
					</div>
					<div className="min-w-0 pb-1">
						<p className="text-[10px] font-bold uppercase tracking-widest text-[#B3B3B3] mb-0.5">
							Playlist
						</p>
						<h1 className="text-white font-black leading-none">
							<span className="block text-xl">This Is</span>
							<span className="block text-3xl sm:text-4xl">
								<TypewriterText text={site.name} />
							</span>
						</h1>
						<p className="text-[#535353] text-xs mt-1.5">
							{site.location}
						</p>
					</div>
				</div>
			</div>

			<div className="px-5 flex flex-col gap-5 flex-1 min-h-0 pb-5">
				{/* Role */}
				<p className="text-[#B3B3B3] text-xs leading-snug">
					{site.title}
				</p>

				{/* Summary */}
				<div className="space-y-3 text-sm text-[#B3B3B3] leading-6 flex-1 min-h-0 overflow-y-auto pr-1">
					{site.summary.map((line) => (
						<p key={line}>{line}</p>
					))}
				</div>

				{/* Playlist covers */}
				<div className="border-t border-[#333] pt-4">
					<p className="text-[#B3B3B3] text-xs mb-0.5">Made For</p>
					<p className="text-white font-bold text-base mb-3">Bryan</p>
					<div className="grid grid-cols-3 gap-3">
						{playlistLinks.map(
							({
								label,
								playlistName,
								sublabel,
								href,
								Icon,
								photo,
								iconColor,
								external
							}) => (
								<a
									key={label}
									href={href}
									{...(external
										? {
												target: '_blank',
												rel: 'noreferrer'
											}
										: {})}
									className="group block min-w-0"
								>
									<div className="relative rounded-lg overflow-hidden shadow-lg aspect-square">
										{/* Scenic photo background */}
										<Image
											src={photo}
											alt={label}
											fill
											sizes="150px"
											className="object-cover transition-transform duration-300 group-hover:scale-105"
										/>

										{/* Dark overlay */}
										<div className="absolute inset-0 bg-black/30" />

										{/* Icon overlay centered */}
										<div className="absolute inset-0 flex items-center justify-center">
											<Icon
												className="w-8 h-8 drop-shadow-lg"
												style={{
													color: iconColor,
													opacity: 0.9
												}}
											/>
										</div>

										{/* Play button on hover */}
										<div className="absolute bottom-2 right-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
											<div className="bg-[#1DB954] rounded-full p-2 shadow-lg shadow-black/50">
												<Play className="w-4 h-4 text-black fill-black" />
											</div>
										</div>
									</div>
									<p className="mt-2 text-white text-xs font-semibold truncate">
										{playlistName}
									</p>
									<div className="mt-0.5 flex items-center justify-between gap-2">
										<p className="text-[#B3B3B3] text-[10px] truncate">
											By Bryan
										</p>
										<span className="shrink-0 rounded-full bg-[#1DB954] p-1">
											<ArrowDown className="w-3 h-3 text-black" />
										</span>
									</div>
								</a>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

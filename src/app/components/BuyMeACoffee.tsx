import Image from 'next/image'

export default function BuyMeACoffee() {
	return (
		<a
			href="https://buymeacoffee.com/bryanrplee"
			target="_blank"
			rel="noreferrer"
			className="fixed bottom-20 right-6 z-50 bg-[#FFDD00] hover:bg-[#ffca2c] p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110"
			aria-label="Buy me a coffee"
		>
			<Image
				src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
				alt="Buy me a coffee"
				width={20}
				height={20}
				className="w-5 h-5"
			/>
		</a>
	)
}

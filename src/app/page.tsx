import WrappedPhoneStory from '@/app/components/WrappedPhoneStory'
import LayoutSwitcher from '@/app/components/LayoutSwitcher'
import ProfileCard from '@/app/components/sections/ProfileCard'
import ExperienceSection from '@/app/components/sections/ExperienceSection'
import ProjectsSection from '@/app/components/sections/ProjectsSection'
import SkillsSection from '@/app/components/sections/SkillsSection'
import EducationSection from '@/app/components/sections/EducationSection'
import GitHubContributionsSection from '@/app/components/sections/GitHubContributionsSection'
import Footer from '@/app/components/Footer'

const normalLayout = (
	<main className="w-full max-w-400 mx-auto px-4 sm:px-8 lg:px-32 pt-6 pb-12">
		<div className="grid grid-cols-1 lg:grid-cols-6 gap-4 auto-rows-auto">
			<div className="lg:col-span-2 lg:row-span-2">
				<ProfileCard />
			</div>
			<div className="lg:col-span-2 lg:row-span-2">
				<ExperienceSection />
			</div>
			<div className="lg:col-span-2 lg:row-span-2">
				<ProjectsSection />
			</div>
			<div className="lg:col-span-4 lg:row-start-3">
				<SkillsSection />
			</div>
			<div className="lg:col-span-2 lg:row-start-3 lg:row-span-2">
				<EducationSection />
			</div>
			<div className="lg:col-span-4 lg:row-start-4">
				<GitHubContributionsSection />
			</div>
		</div>
		<Footer />
	</main>
)

export default function Page() {
	return (
		<LayoutSwitcher
			wrappedLayout={<WrappedPhoneStory />}
			normalLayout={normalLayout}
		/>
	)
}

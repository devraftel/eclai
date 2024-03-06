import Image from 'next/image';

import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SignUpButton, SignedOut } from '@clerk/nextjs';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';

const people = [
	{
		id: 1,
		name: 'Muhammad Ahmad Shoukat',
		designation: 'Gen AI Engineer',
		image: 'https://github.com/ahmad2b.png',
	},
	{
		id: 2,
		name: 'Muhammad Junaid Shaukat',
		designation: 'Gen AI Engineer',
		image: 'https://github.com/mjunaidca.png',
	},
];

const projects = [
	{
		title: 'Sign up or Guest Access',
		description:
			'Start your journey with full membership benefits or explore anonymously as a guest.',
		link: '#',
	},
	{
		title: 'Matrix of Personalized Journeys',
		description:
			'An interactive onboarding process to craft your unique path towards sustainability.',
		link: '#',
	},
	{
		title: `Visualization of Impact`,
		description:
			'Engaging graphics to track and celebrate your sustainable strides.',
		link: 'https://meta.com',
	},
	{
		// title: 'Change Your Habits, Change Your Footprint',
		title: 'Sustainable Selections',
		description:
			'A handpicked section of sustainable and ethical products, complete with transparent brand practices.',
		link: 'https://stripe.com',
	},
	{
		// title: 'Change Your Habits, Change Your Footprint',
		title: 'Advisor at Your Fingertips',
		description:
			'Our real-time advisor integrates seamlessly with your shopping habits, elevating your purchasing decisions.',
		link: 'https://stripe.com',
	},
];

export default function Home() {
	return (
		<>
			{/* Hero Header */}
			<section className='py-10 md:py-20 lg:py-28 '>
				<MaxWidthWrapper className='max-w-7xl mx-auto'>
					<div className='flex flex-col justify-center min-h-[40vh] h-full items-center max-w-3xl mx-auto'>
						<h1 className='text-left sm:text-center'>
							<span className='text-esl-pm'>ecl</span> — Your Partner in
							Sustainable Living
						</h1>

						<div className='mt-8 md:mt-12 sm:flex items-center justify-center space-x-2 md:space-x-4 max-w-md w-full hidden'>
							<SignedOut>
								<SignUpButton mode={'modal'}>
									<Button
										className='flex-1'
										variant='bordered'
									>
										Sign Up Now!
									</Button>
								</SignUpButton>
							</SignedOut>
							<Button
								className='bg-esl-pm border border-esl-pm-sec text-esl-bg flex-1'
								variant='shadow'
							>
								Try Demo
							</Button>
						</div>
						<div className='sm:hidden mt-8 grid gap-y-2 w-full'>
							<SignedOut>
								<SignUpButton mode={'modal'}>
									<Button
										className='flex-1'
										variant='bordered'
									>
										Sign Up Now!
									</Button>
								</SignUpButton>
							</SignedOut>
							<Button
								className='bg-esl-pm border border-esl-pm-sec text-esl-bg flex-1'
								variant='shadow'
							>
								Try Demo
							</Button>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>

			{/* Opening Statement + Video */}
			<section className='py-10 md:py-20 lg:py-28'>
				<MaxWidthWrapper className='flex flex-col w-full max-w-7xl mx-auto'>
					<div className='grid grid-cols-12 gap-6 md:gap-10'>
						<div className='col-span-full md:col-span-8'>
							<h4 className='font-nunitoSans'>
								Transform your lifestyle with AI-powered insights for mindful
								consumption and sustainable choices.
							</h4>
						</div>
						<div className='hidden md:block col-span-5'></div>
						<div className='col-span-full md:col-span-7'>
							<p>
								With you we&apos;re revolutionizing the journey towards a
								sustainable lifestyle. ecl is designed to empower you with the
								tools and knowledge needed to make a real impact on the
								environment through personalized sustainability practices and
								conscious consumption choices. With ecl, you&apos;re not just
								making changes; you&apos;re embarking on a transformative
								journey for a greener tomorrow.
							</p>
						</div>
					</div>
					<div className='max-w-4xl mx-auto w-full mt-4 sm:mt-6 md:mt-10'>
						<AspectRatio
							ratio={16 / 9}
							className='bg-muted rounded-3xl overflow-hidden'
						>
							<Image
								src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
								alt='Photo by Drew Beamer'
								fill
								className='rounded-md object-cover'
							/>
						</AspectRatio>
					</div>
				</MaxWidthWrapper>
			</section>

			{/* Unique Selling Point */}
			<section className='py-6 md:py-12 lg:py-20'>
				<MaxWidthWrapper>
					<div className='space-y-6 sm:space-y-8 md:space-y-12 max-w-7xl mx-auto'>
						<div>
							<h2>Unique Selling Point</h2>
							<p className='mt-4 sm:mt-6 md:mt-10'>
								Our Unique Selling Point (USP) lies in combining personal
								behavior modification with real-time shopping advice, all
								powered by Generative AI. Unlike other platforms, EclAI offers a
								dual approach to sustainability, providing personalized content
								and actionable insights that cater specifically to your
								lifestyle and preferences.
							</p>
						</div>
						<Divider className='bg-esl-sc-sec' />
						<div className='grid grid-cols-12 gap-6 md:gap-10'>
							<h3 className='col-span-full md:col-span-5'>
								Tackling the Sustainability Challenge
							</h3>
							<p className='col-span-full md:col-span-7'>
								We understand the hurdles in translating environmental awareness
								into daily actions. EclAI addresses this by providing
								accessible, personalized guidance that helps simplify the
								complexities of eco-friendly living and ethical shopping.
							</p>
						</div>
						<Divider className='bg-esl-sc-sec' />
						<div className='grid grid-cols-12 gap-6 md:gap-10'>
							<h3 className='col-span-full md:col-span-5'>
								Empowering You With Actionable Insights
							</h3>
							<div className='col-span-full md:col-span-7'>
								<p>
									EclAI is not just a platform; it&apos;s a movement towards
									impactful change. By offering:
								</p>
								<ul className='font-nunitoSans font-normal text-base sm:text-lg md:text-[20px] leading-7 my-6 ml-6 [&>li]:mt-2 list-disc'>
									<li>
										<b>Personalized Sustainability Journeys</b>: Tailored
										guidance from Generative AI to align with your individual
										goals and lifestyle
									</li>
									<li>
										<b>Real-Time Shopping Advisor</b>: Intelligent analysis of
										your purchases suggesting sustainable alternatives as you
										shop.
									</li>
									<li>
										<b>Impact Tracking</b>: Comprehensive tools to visualize and
										monitor your progress towards a smaller ecological
										footprint.
									</li>
									<li>
										<b>Sustainable Marketplace</b>: A curated showcase of
										eco-friendly products that are as good for the planet as
										they are for you.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>

			{/* Sustainability Approach */}
			<section className='py-6 md:py-12 lg:py-20 bg-esl-pm text-esl-bg'>
				<MaxWidthWrapper>
					<div className='max-w-7xl mx-auto'>
						<h2>Our Approach to Sustainability</h2>

						<div className='max-w-6xl mx-auto px-8'>
							<HoverEffect items={projects} />
						</div>
					</div>
				</MaxWidthWrapper>
			</section>

			<section className='py-6 md:py-12 lg:py-20'>
				<MaxWidthWrapper className='max-w-7xl mx-auto'>
					<div className='flex flex-col justify-center min-h-[40vh] h-full items-center max-w-3xl mx-auto '>
						<h2>Our Team</h2>

						<div className='space-y-2 md:space-y-4 lg:space-y-6'>
							<p className='text-center mt-6 md:mt-8 lg:mt-12'>
								Our team is composed of passionate individuals dedicated to the
								cause of sustainability. We believe in the power of technology
								to drive significant change, and we&apos;re committed to making
								a positive impact on the environment through our work at ecl.
							</p>

							<div className='flex flex-row items-center justify-center mb-10 w-full'>
								<AnimatedTooltip items={people} />
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>

			<section className='py-6 md:py-12 lg:py-20 bg-esl-pm text-esl-bg'>
				<MaxWidthWrapper>
					<div className='space-y-4 md:space-y-6 flex flex-col items-center justify-center max-w-7xl mx-auto'>
						<h2 className=''>Start Your Sustainable Journey Today! </h2>
						<div className='space-y-2 md:space-y-4 lg:space-y-6 max-w-5xl mx-auto flex flex-col items-center'>
							<p className='text-left md:text-center'>
								EclAI is your gateway to living in harmony with the planet.
								Embrace the power of Generative AI and transform your
								environmental impact, one conscious choice at a time. Together,
								we can make sustainability not just a goal, but a way of life.
							</p>

							<SignedOut>
								<SignUpButton mode={'modal'}>
									<Button className='bg-esl-bg text-esl-fg border-esl-pm-sec border w-full justify-start md:justify-center md:w-fit font-medium'>
										Sign Up Now!
									</Button>
								</SignUpButton>
							</SignedOut>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
		</>
	);
}

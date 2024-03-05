import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

const projects = [
	{
		title: 'Personalized Sustainability Journeys',
		description:
			'Tailored guidance from Generative AI to align with your individual goals and lifestyle.',
		link: 'https://netflix.com',
	},
	{
		title: 'Real-Time Shopping Advisor:',
		description:
			'Intelligent analysis of your purchases, suggesting sustainable alternatives as you shop.',
		link: 'https://google.com',
	},
	{
		title: `Impact Tracking:`,
		description:
			'Comprehensive tools to visualize and monitor your progress towards a smaller ecological footprint.',
		link: 'https://meta.com',
	},
	{
		// title: 'Change Your Habits, Change Your Footprint',
		title: 'Sustainable Marketplace:',
		description:
			'A curated showcase of eco-friendly products that are as good for the planet as they are for you.',
		link: 'https://stripe.com',
	},
];

export default function Home() {
	return (
		<>
			<section className='py-10 md:py-20 lg:py-28'>
				<MaxWidthWrapper className='h-full container mx-auto'>
					<div className='flex flex-col justify-center h-full'>
						<h1 className='text-balance'>
							<span className='text-primary'>eclAI</span> — Your Partner in
							Sustainable Living
						</h1>
						<h4 className='mt-4 md:mt-6 lg:mt-8 text-balance'>
							Transform your lifestyle with AI-powered insights for mindful
							consumption and sustainable choices.
						</h4>
						<p className='text-balance mt-6 md:mt-8 lg:mt-12'>
							Welcome to eclAI, where we&apos;re revolutionizing the journey
							towards a sustainable lifestyle. Our unique platform is designed
							to empower you with the tools and knowledge needed to make a real
							impact on the environment through personalized sustainability
							practices and conscious consumption choices. With EclAI,
							you&apos;re not just making changes; you&apos;re embarking on a
							transformative journey for a greener tomorrow.
						</p>
						<div className='mt-8 md:mt-12 flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 max-w-md'>
							<Button
								className='bg-primary text-primary-foreground flex-1'
								variant='shadow'
							>
								Try Demo
							</Button>
							<Button
								className='flex-1'
								variant='bordered'
							>
								Sign Up Now!
							</Button>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
			<section className='py-4 md:py-8 lg:py-16 max-w-4xl w-full mx-auto'>
				<AspectRatio
					ratio={16 / 9}
					className='bg-muted'
				>
					<Image
						src='https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'
						alt='Photo by Drew Beamer'
						fill
						className='rounded-md object-cover'
					/>
				</AspectRatio>
			</section>

			<section className='py-6 md:py-12 lg:py-20'>
				<MaxWidthWrapper>
					<div className='space-y-6 md:space-y-8 lg:space-y-12'>
						<div>
							<h2>Unique Selling Point</h2>
							<div className='space-y-2 md:space-y-4 lg:space-y-6'>
								<p className='text-balance mt-6 md:mt-8 lg:mt-12'>
									Our Unique Selling Point (USP) lies in combining personal
									behavior modification with real-time shopping advice, all
									powered by Generative AI. Unlike other platforms, EclAI offers
									a dual approach to sustainability, providing personalized
									content and actionable insights that cater specifically to
									your lifestyle and preferences.
								</p>
							</div>
						</div>
						<div>
							<h3>Tackling the Sustainability Challenge</h3>
							<div className='space-y-2 md:space-y-4 lg:space-y-6'>
								<p className='text-balance mt-6 md:mt-8 lg:mt-12'>
									We understand the hurdles in translating environmental
									awareness into daily actions. EclAI addresses this by
									providing accessible, personalized guidance that helps
									simplify the complexities of eco-friendly living and ethical
									shopping.
								</p>
							</div>
						</div>
						<div>
							<h3>Empowering You With Actionable Insights</h3>
							<div className='space-y-2 md:space-y-4 lg:space-y-6'>
								<p className='text-balance mt-6 md:mt-8 lg:mt-12'>
									EclAI is not just a platform; it&apos;s a movement towards
									impactful change. By offering:
								</p>
								<div className='max-w-6xl mx-auto px-8'>
									<HoverEffect items={projects} />
								</div>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>

			<section className='py-6 md:py-12 lg:py-20'>
				<MaxWidthWrapper>
					<div className='space-y-6 md:space-y-8 lg:space-y-12'>
						<h2>Our Approach to Sustainability</h2>
						<div className='space-y-2 md:space-y-4 lg:space-y-6'>
							<p>
								<b>Sign up or Guest Access</b>: Start your journey with full
								membership benefits or explore anonymously as a guest.
							</p>
							<p>
								<b>Matrix of Personalized Journeys</b>: An interactive
								onboarding process to craft your unique path towards
								sustainability.
							</p>
							<p>
								<b>Advisor at Your Fingertips</b>: Our real-time advisor
								integrates seamlessly with your shopping habits, elevating your
								purchasing decisions.
							</p>
							<p>
								<b>Visualization of Impact</b>: Engaging graphics to track and
								celebrate your sustainable strides.
							</p>
							<p>
								<b>Sustainable Selections</b>: A handpicked section of
								sustainable and ethical products, complete with transparent
								brand practices.
							</p>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>

			<section className='py-6 md:py-12 lg:py-20'>
				<MaxWidthWrapper>
					<div className='space-y-6 md:space-y-8 lg:space-y-12'>
						<h2>Our Team</h2>

						<div className='space-y-2 md:space-y-4 lg:space-y-6'>
							<p className='text-balance mt-6 md:mt-8 lg:mt-12'>
								Our team is composed of passionate individuals dedicated to the
								cause of sustainability. We believe in the power of technology
								to drive significant change, and we&apos;re committed to making
								a positive impact on the environment through our work at eclAI.
							</p>

							<div className='flex flex-row items-center justify-center mb-10 w-full'>
								<AnimatedTooltip items={people} />
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>

			{/* <section className='py-6 md:py-12 lg:py-20'>
				<MaxWidthWrapper>
					<div className='space-y-6 md:space-y-8 lg:space-y-12'>
						<h2>Testimonial</h2>
						<div className='space-y-2 md:space-y-4 lg:space-y-6'>
							<p>
								Explain how customers can engage with the products and
								initiatives.
							</p>
						</div>
					</div>
				</MaxWidthWrapper>
			</section> */}

			<section className='py-6 md:py-12 lg:py-20'>
				<MaxWidthWrapper>
					<div className='space-y-4 md:space-y-6 flex flex-col items-center justify-center'>
						<h4>Start Your Sustainable Journey Today! </h4>
						<div className='space-y-2 md:space-y-4 lg:space-y-6 max-w-5xl mx-auto flex flex-col items-center'>
							<p className='text-center'>
								EclAI is your gateway to living in harmony with the planet.
								Embrace the power of Generative AI and transform your
								environmental impact, one conscious choice at a time. Together,
								we can make sustainability not just a goal, but a way of life.
							</p>
							<p>
								Ready to start? Join EclAI today and become part of the
								solution.
							</p>
							<Button className='bg-primary text-primary-foreground'>
								Sign Up Now!
							</Button>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
		</>
	);
}

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

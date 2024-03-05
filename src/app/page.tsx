import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@nextui-org/button';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<section className='h-[40rem] py-10 md:py-20 lg:py-28'>
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
							We get it. You want to live more sustainably, but it&apos;s a
							jungle of information and overwhelming choices. eclAI cuts through
							the noise. Powered by cutting-edge Generative AI, we&apos;re more
							than just another sustainability app. We&apos;ll guide your
							personal sustainability journey AND help you shop with the planet
							in mind. Achieve your eco-conscious goals without sacrificing your
							quality of life.
						</p>
						<div className='mt-8 md:mt-12 flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 max-w-md'>
							<Button className='bg-primary text-primary-foreground flex-1'>
								Sign Up Now!
							</Button>
							<Button
								className='bg-primary text-primary-foreground flex-1'
								variant='flat'
							>
								Try Demo
							</Button>
						</div>
					</div>
				</MaxWidthWrapper>
			</section>
			<section>
				{' '}
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

			<section>
				<MaxWidthWrapper>
					<div className='space-y-4'>
						<h2>USP</h2>
						<p>
							Change Your Habits, Change Your Footprint: Get a custom
							sustainability action plan tailored to you! Our AI analyzes your
							life and offers achievable steps to reduce your impact.
						</p>
						<p>
							Shop Smarter, Greener: Real-time shopping advice! We find
							sustainable and ethical alternatives to everyday products, so you
							can vote with your wallet.
						</p>
						<p>
							See Your Impact: Track your progress with clear, motivating
							visuals that show your carbon reduction, waste diversion, and
							more.
						</p>
						<p>
							We&apos;re a Community: Connect with others on the same path.
							Share tips, find inspiration, and stay motivated with the eclAI
							tribe.
						</p>
					</div>
				</MaxWidthWrapper>
			</section>

			<section>
				<MaxWidthWrapper>
					<div>
						<h2>Feature Section -</h2>
						<p>
							Highlight the importance of personal behavior change for
							sustainability.
						</p>
						<p>
							Present the concept of conscious consumption and how the company
							supports this practice.
						</p>
					</div>
				</MaxWidthWrapper>
			</section>

			<section>
				<MaxWidthWrapper>
					<h2>How it works</h2>
					<p>
						Explain how customers can engage with the products and initiatives.
					</p>
				</MaxWidthWrapper>
			</section>

			<section>
				<MaxWidthWrapper>
					<h2>Our Team</h2>
					<p>
						Explain how customers can engage with the products and initiatives.
					</p>
				</MaxWidthWrapper>
			</section>

			<section>
				<MaxWidthWrapper>
					<h2>Testimonial</h2>
					<p>
						Explain how customers can engage with the products and initiatives.
					</p>
				</MaxWidthWrapper>
			</section>

			<section>
				<MaxWidthWrapper>
					<h4>Start Your Sustainable Journey Today! </h4>
					<Button className='bg-primary text-primary-foreground'>
						Sign Up Now!
					</Button>
				</MaxWidthWrapper>
			</section>
		</>
	);
}

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className='text-esl-fg w-full'>
			<nav className='container mx-auto px-6 py-2 flex justify-center items-center'>
				{/* <Logo /> */}

				<div className='flex items-center'>
					<div className='hidden md:flex items-center'>
						<Link
							href={'/about'}
							className={cn(
								buttonVariants({
									size: 'sm',
									variant: 'link',
									className: 'text-esl-fg',
								})
							)}
						>
							About Us
						</Link>
						<Link
							href={'/privacy-policy'}
							className={cn(
								buttonVariants({
									size: 'sm',
									variant: 'link',
									className: 'text-esl-fg',
								})
							)}
						>
							Privacy Policy
						</Link>

						<Link
							href={'/contact'}
							className={cn(
								buttonVariants({
									size: 'sm',
									variant: 'link',
									className: 'text-esl-fg',
								})
							)}
						>
							Contact
						</Link>
					</div>
				</div>
			</nav>
			<div className='text-center py-4 mt-2   text-sm'>
				&copy; {new Date().getFullYear()} ecl. All rights reserved.
			</div>
		</footer>
	);
};

'use client';
import { useState } from 'react';

import { Logo } from '@/components/logo';
import {
	SignInButton,
	SignUpButton,
	SignedOut,
	UserButton,
	useAuth,
	useUser,
} from '@clerk/nextjs';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';
import { Link as LinkUI } from '@nextui-org/link';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from '@nextui-org/navbar';
import Link from 'next/link';

export const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const { isSignedIn } = useAuth();
	const { user } = useUser();
	const menuItems = [
		'Eco Assistant',
		'Eco Advisor',
		'Dashboard',
		'Help & Feedback',
		'Log Out',
	];

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isBlurred
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden'
				/>
				<NavbarBrand>
					<Logo />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent justify='end'>
				{isSignedIn ? (
					<>
						<NavbarItem className='hidden lg:flex'>
							<Link
								href='#'
								className='hover:underline underline-offset-2'
							>
								Eco Assistant
							</Link>
						</NavbarItem>
						<NavbarItem className='hidden lg:flex lg:ml-4'>
							<Link
								href='#'
								className='hover:underline underline-offset-2'
							>
								Eco Advisor
							</Link>
						</NavbarItem>
						<NavbarItem className='hidden lg:flex lg:ml-4'>
							<UserButton />
						</NavbarItem>
					</>
				) : (
					<>
						<NavbarItem className='hidden lg:flex'>
							<SignedOut>
								<SignInButton
									mode={'modal'}
									afterSignInUrl={'/'}
								>
									<Link href='#'>Login</Link>
								</SignInButton>
							</SignedOut>
						</NavbarItem>
						<NavbarItem>
							<SignedOut>
								<SignUpButton mode={'modal'}>
									<Button
										as={Link}
										// color='primary'
										className='bg-esl-pm text-esl-bg'
										href='#'
										variant='flat'
									>
										Sign Up
									</Button>
								</SignUpButton>
							</SignedOut>
						</NavbarItem>
					</>
				)}
			</NavbarContent>
			<NavbarMenu className='flex flex-col justify-between'>
				<div className='flex flex-col space-y-4 py-4'>
					{/* {menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<LinkUI
								color={
									index === 2
										? 'primary'
										: index === menuItems.length - 1
										? 'danger'
										: 'foreground'
								}
								className='w-full'
								href='#'
								size='lg'
							>
								{item}
							</LinkUI>
						</NavbarMenuItem>
					))} */}
					<NavbarMenuItem>
						<LinkUI
							color='foreground'
							className='w-full'
							href='#'
							size='lg'
						>
							Eco Companion
						</LinkUI>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<LinkUI
							color='foreground'
							className='w-full'
							href='#'
							size='lg'
						>
							Eco Advisor
						</LinkUI>
					</NavbarMenuItem>
				</div>
				<div>
					<Divider />
					<div className='space-y-4 py-4'>
						<NavbarMenuItem>
							<LinkUI
								color='foreground'
								className='w-full'
								href='#'
								size='lg'
							>
								Log Out
							</LinkUI>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<div className='flex items-center space-x-2'>
								<UserButton />
								<p>{user?.fullName}</p>
							</div>
						</NavbarMenuItem>
					</div>
				</div>
			</NavbarMenu>
		</Navbar>
	);
};

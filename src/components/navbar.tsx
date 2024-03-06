'use client';
import { useState } from 'react';

import { Logo } from '@/components/logo';
import { SignInButton, SignUpButton, SignedOut, useAuth } from '@clerk/nextjs';
import { Button } from '@nextui-org/button';
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

	const menuItems = [
		'Profile',
		'Dashboard',
		'Activity',
		'Analytics',
		'System',
		'Deployments',
		'My Settings',
		'Team Settings',
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
							<Link href='#'>Eco Assistant</Link>
						</NavbarItem>
						<NavbarItem className='hidden lg:flex'>
							<Link href='#'>Eco Advisor</Link>
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
			<NavbarMenu>
				{menuItems.map((item, index) => (
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
				))}
			</NavbarMenu>
		</Navbar>
	);
};

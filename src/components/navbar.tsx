'use client';
import { useState } from 'react';

import { Logo } from '@/components/logo';
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
				<NavbarItem className='hidden lg:flex'>
					<Link href='#'>Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						// color='primary'
						className='bg-primary text-primary-foreground'
						href='#'
						variant='flat'
					>
						Sign Up
					</Button>
				</NavbarItem>
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

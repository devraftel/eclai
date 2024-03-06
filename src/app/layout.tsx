import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';
import { cn } from '@/lib/utils';
import { NextUIProvider } from '@/providers/nextui-provider';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter, Lato, Nunito_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const lato = Lato({
	subsets: ['latin'],
	weight: ['300', '400', '700', '900'],
	variable: '--font-lato',
});

const nunitoSans = Nunito_Sans({
	subsets: ['latin'],
	variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
	title: 'Eco Conscious Lifestyle',
	description: 'Your Partner in Sustainable Living',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='light'
		>
			<ClerkProvider>
				<body
					className={cn(
						'',
						inter.className,
						nunitoSans.variable,
						lato.variable
					)}
				>
					<NextUIProvider>
						<main className='min-h-screen flex flex-col h-full antialiased'>
							<NavBar />
							{children}
							<Footer />
						</main>
					</NextUIProvider>
				</body>
			</ClerkProvider>
		</html>
	);
}

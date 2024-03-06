import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
			<SignIn afterSignInUrl={'/quiz'} />
		</MaxWidthWrapper>
	);
}

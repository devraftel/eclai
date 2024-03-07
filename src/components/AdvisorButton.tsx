'use client';
// import { Button, ButtonProps } from '@/components/ui/button';
import { useEcoAdvisorStore } from '@/store/ecoadvisor';
import { Button, ButtonProps } from '@nextui-org/button';
import { useRouter } from 'next/navigation';

interface Props extends ButtonProps {}

export const AdvisorButton = ({ className, children, ...props }: Props) => {
	const { isEcoAdvisorOpen, setIsEcoAdvisorOpen } = useEcoAdvisorStore();
	const router = useRouter();

	return (
		<Button
			onClick={() => {
				// setIsEcoAdvisorOpen(!isEcoAdvisorOpen);
				router.push('/eco-advisor');
			}}
			className={className}
			{...props}
		>
			{children}
		</Button>
	);
};

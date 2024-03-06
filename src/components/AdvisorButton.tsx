'use client';
// import { Button, ButtonProps } from '@/components/ui/button';
import { useEcoAdvisorStore } from '@/store/ecoadvisor';
import { ButtonProps, Button } from '@nextui-org/button';

interface Props extends ButtonProps {}

export const AdvisorButton = ({ className, children, ...props }: Props) => {
	const { isEcoAdvisorOpen, setIsEcoAdvisorOpen } = useEcoAdvisorStore();

	return (
		<Button
			onClick={() => {
				setIsEcoAdvisorOpen(!isEcoAdvisorOpen);
			}}
			className={className}
			{...props}
		>
			{children}
		</Button>
	);
};

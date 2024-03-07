import { TooltipProvider } from '@/components/ui/tooltip';
import { AI } from './action';

export default function EcoAdvisorLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<AI>
				<TooltipProvider delayDuration={0}>{children}</TooltipProvider>
			</AI>
		</>
	);
}

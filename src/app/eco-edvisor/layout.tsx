import { AI } from "./action";
import { TooltipProvider } from "@/components/ui/tooltip";

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

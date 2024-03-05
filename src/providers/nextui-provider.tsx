'use client';

import { NextUIProvider as UiProvider } from '@nextui-org/react';

export function NextUIProvider({ children }: { children: React.ReactNode }) {
	return <UiProvider>{children}</UiProvider>;
}

import { create } from 'zustand';

type State = {
	isEcoAdvisorOpen: boolean;
	setIsEcoAdvisorOpen: (isEcoAdvisorOpen: boolean) => void;
};

export const useEcoAdvisorStore = create<State>((set) => ({
	isEcoAdvisorOpen: false,
	setIsEcoAdvisorOpen: (isEcoAdvisorOpen: boolean) => set({ isEcoAdvisorOpen }),
}));

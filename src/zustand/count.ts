import { create } from "zustand";

type State = { count: number };
type Action = {
	increase: () => void;
};

export const useStore = create<State & Action>((set) => ({
	count: 0,
	increase: () => set((state) => ({ count: state.count + 1 })),
}));


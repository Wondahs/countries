import { create } from "zustand";
import { CountryData } from "./lib/typeDef";

interface Mode {
    nightMode: boolean;
    setNightMode: (value: boolean) => void;
}

interface PageData {
    data: CountryData[] | null;
    setPagedata: (data: CountryData[]) => void;
}

export const useModeStore = create<Mode>((set) => (
    {
        nightMode: true,
        setNightMode: (value: boolean) => set({ nightMode: value }),
    })
);

export const usePageData = create<PageData>((set) => ({
    data: null,
    setPagedata: (data: CountryData[]) => set({ data }),
}));


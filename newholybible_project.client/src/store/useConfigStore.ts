import { create } from "zustand";

interface configStore {
  navConfig: { id: number; name: string }[];
  selectedNav: number;
  setSelectedNav: (navItem: number) => void;
}

const getConfig = () => {
  let baseConfig = [
    { id: 1, name: "Home" },
    { id: 2, name: "Bible" },
    { id: 3, name: "Bible Quiz" },
    { id: 4, name: "Gospel" },
    { id: 5, name: "Help" },
  ];
  return baseConfig;
};

const defaultConfig = {
  selectedNav: 1,
  navConfig: getConfig(),
};

export const useConfigStore = create<configStore>((set) => ({
  ...defaultConfig,
  setSelectedNav: (navItem: number) =>
    set(() => ({
      selectedNav: navItem,
    })),
}));

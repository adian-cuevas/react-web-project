import { create } from 'zustand'

export interface GlobalStoreProp {
  drawerOpen: boolean
  toggleMode: boolean
  handleDrawer: () => void
  handleToggleMode: () => void
}

export const useGlobalStore = create<GlobalStoreProp>()((set) => ({
  drawerOpen: false,
  toggleMode: false,
  handleDrawer: () =>
    set((state) => ({ ...state, drawerOpen: !state.drawerOpen })),
  handleToggleMode: () =>
    set((state) => ({ ...state, toggleMode: !state.toggleMode })),
}))

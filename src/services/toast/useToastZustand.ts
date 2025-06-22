import {create} from 'zustand';

import {ToastService} from './toastTypes';

const useToastStore = create<ToastService>(set => ({
  toast: null,
  showToast: toast => set({toast}),
  hideToast: () => set({toast: null}),
}));

export function useToastZustand(): ToastService {
  const toast = useToastStore(state => state.toast);
  const showToast = useToastStore(state => state.showToast);
  const hideToast = useToastStore(state => state.hideToast);
  return {
    toast,
    showToast,
    hideToast,
  };
}

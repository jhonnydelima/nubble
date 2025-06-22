import {createContext, PropsWithChildren, useContext, useState} from 'react';

interface ToastProps {
  message: string;
  duration?: number; // Duration in milliseconds
  type?: 'success' | 'error';
  action: {
    title: string;
    onPress: () => void;
  };
}

interface ToastService {
  toast: ToastProps | null;
  showToast: (toast: ToastProps) => void;
  hideToast: () => void;
}

const ToastContext = createContext({} as ToastService);

export function ToastProvider({children}: PropsWithChildren) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showToast(_toast: ToastProps) {
    setToast(_toast);
  }

  function hideToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider
      value={{
        toast,
        showToast,
        hideToast,
      }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastService {
  const {toast, showToast, hideToast} = useContext(ToastContext);

  return {
    toast,
    showToast,
    hideToast,
  };
}

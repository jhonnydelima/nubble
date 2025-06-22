import {createContext, PropsWithChildren, useState} from 'react';

import {ToastProps, ToastService} from '@services';

export const ToastContext = createContext({} as ToastService);

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

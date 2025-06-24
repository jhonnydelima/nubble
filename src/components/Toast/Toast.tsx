import {useEffect} from 'react';

import {useToast} from '@services';

import {ToastContent} from './components/ToastContent';

const DEFAULT_DURATION = 2000;

export function Toast() {
  const {toast, hideToast} = useToast();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [toast, hideToast]);

  if (!toast) {
    return null;
  }

  return <ToastContent toast={toast} />;
}

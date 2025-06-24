export type ToastType = 'success' | 'error';
export type ToastPosition = 'top' | 'bottom';

export interface ToastProps {
  message: string;
  duration?: number; // Duration in milliseconds
  type?: ToastType;
  position?: ToastPosition;
  action?: {
    title: string;
    onPress: () => void;
  };
}

export interface ToastService {
  toast: ToastProps | null;
  showToast: (toast: ToastProps) => void;
  hideToast: () => void;
}

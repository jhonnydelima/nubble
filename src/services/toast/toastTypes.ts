export interface ToastProps {
  message: string;
  duration?: number; // Duration in milliseconds
  type?: 'success' | 'error';
  position?: 'top' | 'bottom';
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

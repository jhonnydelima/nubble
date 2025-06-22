import {ToastService, useToastContext} from '@services';

export function useToast(): ToastService {
  return useToastContext();
}

import {ToastService, useToastZustand} from '@services';

export function useToast(): ToastService {
  return useToastZustand();
}

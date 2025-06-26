import {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {useToast} from '@services';

import {ToastContent} from './components/ToastContent';

const DEFAULT_DURATION = 2000;

export function Toast() {
  const {toast, hideToast} = useToast();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const fadeOut = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim],
  );

  useEffect(() => {
    if (toast) {
      fadeIn();
      setTimeout(() => {
        fadeOut(hideToast);
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [toast, hideToast, fadeIn, fadeOut]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      style={{position: 'absolute', alignSelf: 'center', opacity: fadeAnim}}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}

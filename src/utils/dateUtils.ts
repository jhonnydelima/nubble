import {differenceInSeconds, parseISO, format} from 'date-fns';

function formatRelative(dateISO: string): string {
  const date = parseISO(dateISO);
  const now = new Date();
  const diffInSeconds = differenceInSeconds(now, date);
  if (diffInSeconds < 60) {
    return 'agora';
  }
  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} min`;
  }
  const diffInHours = Math.round(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} h`;
  }
  const diffInDays = Math.round(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} d`;
  }
  const diffInWeeks = Math.round(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} sem`;
  }
  const diffInMonths = Math.round(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} m`;
  }
  return format(date, 'dd/MM/yyyy');
}

export const dateUtils = {
  formatRelative,
};

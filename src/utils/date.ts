import { format, parseISO } from 'date-fns';

export function formatDateInDayMonthAndHour(date: string) {
  return format(parseISO(date), 'd/MM - k');
}

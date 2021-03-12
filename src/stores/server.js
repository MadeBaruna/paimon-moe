import { writable, get } from 'svelte/store';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const server = writable('Asia');
export const ar = writable(50);
export const wl = writable(7);
export const loading = writable(true);

const timeOffset = {
  Asia: 8,
  America: -5,
  Europe: 1,
};

const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export const getCurrentTime = () => {
  return dayjs().utcOffset(timeOffset[get(server)]);
}

export const getCurrentDay = () => {
  const time = dayjs().utcOffset(timeOffset[get(server)]);
  let day = time.day();
  if (time.hour() >= 0 && time.hour() < 4) {
    day -= 1;
  }

  if (day === -1) {
    day = 6;
  }

  return weekdays[day];
};

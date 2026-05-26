export type DaySchedule = {
  label: string;
  open: string;
  close: string;
  closed?: boolean;
};

export const openingHours: DaySchedule[] = [
  { label: 'Thứ 2 – Thứ 6', open: '07:00', close: '21:00' },
  { label: 'Thứ 7', open: '07:00', close: '22:00' },
  { label: 'Chủ nhật', open: '08:00', close: '21:00' },
];

export const todayIsOpen = (): boolean => {
  const day = new Date().getDay(); // 0 = CN, 1-6 = T2-T7
  const hour = new Date().getHours();
  if (day === 0) return hour >= 8 && hour < 21;
  return hour >= 7 && hour < 21;
};

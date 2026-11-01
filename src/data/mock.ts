export interface Meeting {
  id: number;
  title: string;
  day: string;
  time: string;
  location: string;
  volunteer: string;
  role: string;
  freq: string;
}

export const Meeting: Meeting[] = [
  { id: 0, title: "Midweek Prayer", day: "Mon", time: "18:30", location: "St. Mark's Hall", volunteer: "A. Njoroge", role: "Lead", freq: "Weekly" },
  { id: 1, title: "Morning Prayer", day: "Tue", time: "06:00", location: "Catholics' Hall", volunteer: "M. Wanjiku", role: "Intercessor", freq: "Daily" },
  { id: 2, title: "Evening Praise", day: "Wed", time: "19:00", location: "St. Mark's Hall", volunteer: "D. Ochieng", role: "Worship Lead", freq: "Weekly" },
  { id: 3, title: "Families' Prayer", day: "Thu", time: "18:00", location: "Baptist Church", volunteer: "L. Atielo", role: "Host", freq: "Bi-weekly" },
  { id: 4, title: "Scripture Meditation", day: "Fri", time: "18:30", location: "Online", volunteer: "P. Odhiambo", role: "Reader", freq: "Weekly" },
  { id: 5, title: "Fasting & Prayer", day: "Sat", time: "05:00", location: "Hillside Retreat", volunteer: "S. Kipyego", role: "Lead", freq: "Monthly" }
];

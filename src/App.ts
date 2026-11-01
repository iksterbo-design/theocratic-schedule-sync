import * as data from './data/mock';
import { AppShell, Card, Badge, Stat } from './components/ui';
const meetings = data.Meeting as any[];
const volunteers = data.Volunteer as any[];
const locations = data.Location as any[];

export function App(): HTMLElement {
  const root = document.createElement('div');
  root.className = 'tw-flex tw-flex-col tw-gap-4';
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const grid = days.map((d) => {
    const items = meetings.filter((m: any) => m.day === d);
    const body = items.map((m: any) =>
      '<div class="tw-flex tw-items-center tw-gap-3 tw-px-2 tw-rounded-md tw-bg-slate-50 tw-hover:bg-white tw-shadow-sm">' +
        '<div class="tw-w-16 tw-text-right tw-font-medium tw-text-sm tw-text-slate-600">' + m.time + '</div>' +
        '<div class="tw-flex-1 tw-text-sm tw-font-semibold tw-text-slate-800 dark:tw-text-white">' + m.title + '</div>' +
        '<div class="tw-text-xs tw-text-slate-500">' + m.freq + '</div>' +
      '</div>').join('');
    return '<div class="tw-border tw-border-slate-200 twrounded-lg tw-p-2 tw-bg-white tw-shadow-sm">' +
      '<div class="tw-font-semibold tw-text-sm tw-text-slate-700 tw-px-2 tw-py-1">' + d + '</div>' +
      '<div class="tw-mt-1 tw-max-h-24 tw-overflow-y-auto">' + (body || '<div class="tw-text-xs tw-text-slate-400 tw-px-2">No meeting</div>') + '</div>' +
    '</div>';
  }).join('');
  const vlist = volunteers.map((v: any) =>
    '<div class="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-py-1"><span class="tw-w-2 tw-h-2 tw-rounded-full tw-bg-violet-500"></span>' + v.name + '</div>').join('');
  const llist = locations.map((l: any) => '<div class="tw-text-sm tw-text-slate-600 tw-py-1">' + l.name + '</div>').join('');
  root.innerHTML = `
    <div id="clock" class="tw-text-xs tw-text-right tw-text-slate-400"></div>
    <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-4">
      <div class="lg:tw-span-2">
        <Card title="Theocratic Schedule" desc="Recurring prayer meetings synchronized across districts.">
          <div class="tw-grid tw-grid-cols-7 tw-gap-1 tw-mt-3">
            ${days.map((d) => '<div class="tw-py-1.5 tw-text-center tw-text-xs tw-font-medium tw-text-slate-500 tw-border-b tw-border-slate-100">' + d + '</div>').join('')}
          </div>
          <div class="tw-mt-2 tw-grid tw-grid-cols-1 tw-gap-1">${grid}</div>
        </Card>
      </div>
      <div class="lg:tw-w-72">
        <Card title="Volunteers" desc="Prayer partners & roles">
          <div class="tw-max-h-48 tw-overflow-y-auto tw-text-sm">${vlist}</div>
        </Card>
        <Card title="Locations" desc="Meeting venues">
          <div class="tw-max-h-24 tw-overflow-y-auto tw-text-sm">${llist}</div>
        </Card>
        <Card title="iCal Export" desc="Mock calendar file (read-only)">
          <div class="tw-text-xs tw-font-mono tw-bg-slate-800 tw-text-slate-200 tw-rounded-md tw-p-2 tw-max-h-24 tw-overflow-y-auto tw-text-slate-400">BEGIN:VCALENDAR ... VTIMEZONE UTC</div>
          <button class="tw-w-full tw-bg-violet-500 tw-text-white tw-rounded-md tw-px-3 tw-py-1.5 tw-text-sm" onclick="navigator.clipboard?.writeText('BEGIN:VCALENDAR')">Copy iCal</button>
        </Card>
      </div>
    </div>
  `;
  setInterval(() => { const d = new Date(); document.getElementById('clock')!.textContent = d.toLocaleTimeString(); }, 1000);
  return root;
}

// Calendar utilities for theocratic schedule synchronization
// Handles recurrence, date formatting, timezone, and meeting filtering.

export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end: Date
  type: string
  location: string
  notes: string
  congregationName: string
}

// Format a date to a localized string
export function formatDate(date: Date, locale: string = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Format a time string to 12-hour format
export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':').map(Number)
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const h12 = hours % 12 || 12
  return `${h12}:${minutes.toString().padStart(2, '0')} ${ampm}`
}

// Get days in month
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

// Get the first day of the week (Sunday = 0, Saturday = 6)
export function getFirstDayOfWeek(year: number, month: number): number {
  const date = new Date(year, month, 1)
  const day = date.getDay()
  return day === 0 ? 6 : day - 1 // Convert Sunday to Saturday (6) for ISO-ish week start
}

// Check if a date is within the next N days
export function isWithinDays(dateStr: string, days: number): boolean {
  const date = new Date(dateStr)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(date)
  target.setHours(0, 0, 0, 0)
  const diffTime = target.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays >= 0 && diffDays <= days
}

// Check if a date is today
export function isToday(dateStr: string): boolean {
  const date = new Date(dateStr)
  const today = new Date()
  return date.getFullYear() === today.getFullYear() &&
         date.getMonth() === today.getMonth() &&
         date.getDate() === today.getDate()
}

// Get tomorrow's date string
export function getTomorrow(): string {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
}

// Get 7 days from now
export function getFirstDay(days: number): Date {
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date
}

// Check if a date has already passed
export function isPastDate(dateStr: string): boolean {
  const date = new Date(dateStr)
  const today = new Date()
  return date < today
}

// Group meetings by congregation
export function groupMeetingsByCongregation(meetings: CalendarEvent[]): Map<string, CalendarEvent[]> {
  const groups = new Map<string, CalendarEvent[]>()
  for (const meeting of meetings) {
    if (!groups.has(meeting.congregationName)) {
      groups.set(meeting.congregationName, [])
    }
    groups.get(meeting.congregationName)!.push(meeting)
  }
  return groups
}

// Get unique congregation names from meeting events
export function getCongregationNames(meetings: CalendarEvent[]): string[] {
  const names = new Set<string>()
  for (const meeting of meetings) {
    names.add(meeting.congregationName)
  }
  return Array.from(names).sort()
}

// Get upcoming meetings (excluding past ones)
export function getUpcomingMeetings(meetings: CalendarEvent[], _fromDays: number = 90): CalendarEvent[] {
  const now = new Date()
  now.setHours(0, 0, 0, 0)

  const upcoming = meetings.filter(m => {
    const end = new Date(m.end)
    end.setHours(0, 0, 0, 0)
    return end >= now
  })

  return upcoming.sort((a, b) => a.start.getTime() - b.start.getTime())
}

// Get past meetings (for historical review)
export function getPastMeetings(meetings: CalendarEvent[]): CalendarEvent[] {
  const now = new Date()
  now.setHours(0, 0, 0, 0)

  return meetings.filter(m => {
    const end = new Date(m.end)
    end.setHours(0, 0, 0, 0)
    return end < now
  }).sort((a, b) => b.start.getTime() - a.start.getTime())
}

// Generate a unique ID
export function generateId(): string {
  return `e-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

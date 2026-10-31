import { Meeting, meetings } from '../data/schedules'
import { formatTime, isToday, isWithinDays, isPastDate } from '../utils/calendar'

export class MeetingList {
  private container: HTMLElement

  constructor(container: HTMLElement) {
    this.container = container
    this.render()
  }

  private render() {
    const upcoming = meetings
      .filter(m => !isPastDate(m.date))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    this.container.innerHTML = `
      <div class="meeting-header">
        <h2 class="section-title">Upcoming Meetings</h2>
        <div class="meeting-stats">
          <span>${upcoming.length} upcoming meeting${upcoming.length !== 1 ? 's' : ''}</span>
        </div>
      </div>
      <div class="meeting-list">
        ${upcoming.length === 0
          ? '<p class="empty-state">No upcoming meetings in the schedule.</p>'
          : upcoming.map(m => this.renderMeetingItem(m)).join('')}
      </div>
    `

    // Click handlers for action buttons
    this.container.querySelectorAll('.btn-detail').forEach((btn: Element) => {
      const id = btn.getAttribute('data-id')
      if (id) {
        const meeting = meetings.find(m => m.id === id)
        if (meeting) {
          alert(`Meeting Details:\nTitle: ${meeting.title}\nDate: ${meeting.date}\nTime: ${formatTime(meeting.startTime)}-${formatTime(meeting.endTime)}\nLocation: ${meeting.location}\nNotes: ${meeting.notes}`)
        }
      }
    })

    // Mark tomorrow's meetings as "Today"
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowStr = tomorrow.toISOString().split('T')[0]

    this.container.querySelectorAll('.meeting-item').forEach((item: Element) => {
      const dateEl = item.querySelector('.meeting-date')
      if (dateEl && (dateEl.textContent || '').includes(tomorrowStr)) {
        dateEl.classList.add('is-today')
      }
    })
  }

  private renderMeetingItem(m: Meeting): string {
    const isTodayDate = isToday(m.date)
    const isTomorrow = isWithinDays(m.date, 1)
    const urgency = isTomorrow ? 'tomorrow' : isTodayDate ? 'today' : 'upcoming'

    const typeBadge = this.getBadgeForType(m.type)

    return `
      <div class="meeting-item ${urgency}" data-id="${m.id}">
        <div class="meeting-left">
          <div class="meeting-header-row">
            <span class="meeting-type ${m.type}">${m.type}</span>
            <span class="meeting-date">${m.date}</span>
            <span class="meeting-time">${formatTime(m.startTime)} - ${formatTime(m.endTime)}</span>
          </div>
          <h3 class="meeting-title">${m.title}</h3>
          <p class="meeting-location">${m.location}</p>
          ${m.notes ? `<p class="meeting-notes">${m.notes}</p>` : ''}
        </div>
        <div class="meeting-right">
          <span class="badge ${typeBadge}">${m.type}</span>
          <button class="btn-icon btn-detail" data-id="${m.id}" title="View Details">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </button>
          <button class="btn-icon btn-edit" data-id="${m.id}" title="Edit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
              <path d="m15 5 4 4"/>
            </svg>
          </button>
          <button class="btn-icon btn-delete" data-id="${m.id}" title="Delete">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        </div>
      </div>
    `
  }

  private getBadgeForType(type: string): string {
    switch (type) {
      case 'assembly': return 'badge-assembly'
      case 'biblestudy': return 'badge-biblestudy'
      case 'watchtower': return 'badge-watchtower'
      case 'wedding': return 'badge-wedding'
      case 'funeral': return 'badge-funeral'
      default: return 'badge-other'
    }
  }
}

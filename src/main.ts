// Main application entry for theocratic-schedule-sync
import './style.css'
import { MeetingList } from './components/MeetingList'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app')
  if (!container) return

  new MeetingList(
    container.querySelector('#meeting-list') || container.appendChild(document.createElement('div'))
  )
})

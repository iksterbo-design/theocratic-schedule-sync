import { Congregation, congregations } from '../data/schedules'

// Congregation list component - renders the congregation directory
export class CongregationList {
  private container: HTMLElement
  private searchQuery: string = ''
  private statusFilter: string = 'all'

  constructor(container: HTMLElement) {
    this.container = container
    this.render()
  }

  private getFiltered(): Congregation[] {
    let filtered = congregations

    // Status filter
    if (this.statusFilter !== 'all') {
      filtered = filtered.filter(c => c.status === this.statusFilter)
    }

    // Search query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.trim().toLowerCase()
      filtered = filtered.filter(c =>
        c.congregationName.toLowerCase().includes(q) ||
        c.region.toLowerCase().includes(q) ||
        c.territory.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q)
      )
    }

    return filtered
  }

  private render() {
    const filtered = this.getFiltered()

    this.container.innerHTML = `
      <div class="congregation-header">
        <div class="search-box">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            id="congregation-search"
            placeholder="Search congregations, regions, countries..."
            autocomplete="off"
          />
        </div>
        <div class="filter-tabs">
          <button class="filter-tab active" data-filter="all">All</button>
          <button class="filter-tab" data-filter="active">Active</button>
          <button class="filter-tab" data-filter="pending">Pending</button>
        </div>
        <div class="stats">
          <span id="congregation-count">${filtered.length}</span>
          <span id="congregation-total">congregations</span>
        </div>
      </div>
      <ul class="congregation-list" id="congregation-list">
        ${filtered.map(c => this.renderCongregationItem(c)).join('')}
      </ul>
      ${filtered.length === 0 ? '<p class="empty-state">No congregations match your criteria.</p>' : ''}
    `

    // Search input
    const searchInput = this.container.querySelector('#congregation-search')
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = (e.target as HTMLInputElement).value
        this.render()
      })
    }

    // Filter tabs
    this.container.querySelectorAll('.filter-tab').forEach((tab: Element) => {
      tab.addEventListener('click', () => {
        this.container.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'))
        tab.classList.add('active')
        this.statusFilter = (tab.getAttribute('data-filter') as string) || 'all'
        this.render()
      })
    })
  }

  private renderCongregationItem(c: Congregation): string {
    const statusBadge = c.status === 'active'
      ? '<span class="badge badge-success">Active</span>'
      : c.status === 'pending'
        ? '<span class="badge badge-pending">Pending</span>'
        : '<span class="badge badge-inactive">Inactive</span>'

    const nextVisit = c.nextVisitDate
      ? `<span class="next-visit">Next: ${c.nextVisitDate}</span>`
      : ''

    return `
      <li class="congregation-item">
        <div class="congregation-body">
          <div class="congregation-info">
            <h3 class="congregation-name">${c.congregationName}</h3>
            <p class="congregation-detail">
              ${c.region} &mdash; ${c.territory}, ${c.country}
            </p>
            <p class="congregation-detail">${c.address}</p>
            <p class="congregation-detail">Phone: ${c.phone}</p>
            <p class="congregation-detail">
              Assigned: <strong>${c.assignedBrotherName}</strong>
            </p>
          </div>
          <div class="congregation-status">
            ${statusBadge}
            ${nextVisit}
          </div>
        </div>
        <div class="congregation-action">
          <button class="action-btn view-btn" data-id="${c.id}">View Details</button>
          <button class="action-btn edit-btn" data-id="${c.id}">Edit</button>
          <button class="action-btn delete-btn" data-id="${c.id}">Archive</button>
        </div>
      </li>
    `
  }
}

(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`mtg-001`,congregationId:`cust-001`,type:`assembly`,title:`Courtyard Assembly - Greater Boston`,date:`2026-11-10`,startTime:`10:00`,endTime:`12:00`,location:`Greater Boston Congregation Hall`,notes:`Mid-week assembly attendance check-in.`},{id:`mtg-002`,congregationId:`cust-001`,type:`biblestudy`,title:`Bible Study - Greater Boston`,date:`2026-11-13`,startTime:`15:30`,endTime:`16:30`,location:`Greater Boston Congregation Hall`,notes:`International Bible Study Course - Unit 4`},{id:`mtg-003`,congregationId:`cust-002`,type:`assembly`,title:`Mid-week Assembly - Atlanta`,date:`2026-11-12`,startTime:`10:00`,endTime:`12:00`,location:`Atlanta Georgia Congregation Hall`,notes:`Southwest US online attendance`},{id:`mtg-004`,congregationId:`cust-003`,type:`watchtower`,title:`Watchtower Study - London`,date:`2026-11-19`,startTime:`15:00`,endTime:`16:00`,location:`London Central Congregation Hall`,notes:`Annual meeting preparation`},{id:`mtg-005`,congregationId:`cust-004`,type:`biblestudy`,title:`Bible Study - Munich`,date:`2026-11-21`,startTime:`14:00`,endTime:`15:00`,location:`Munich Alois-Fischer Congregation Hall`,notes:`Regional meeting review`},{id:`mtg-006`,congregationId:`cust-005`,type:`assembly`,title:`Mid-week Assembly - Singapore`,date:`2026-11-28`,startTime:`10:30`,endTime:`12:30`,location:`Singapore Inter Faith Congregation Hall`,notes:`Multilingual translation available`},{id:`mtg-007`,congregationId:`cust-006`,type:`biblestudy`,title:`Bible Study - Sydney`,date:`2026-12-01`,startTime:`16:00`,endTime:`17:00`,location:`Sydney St George Congregation Hall`,notes:`End-of-year preparation`},{id:`mtg-008`,congregationId:`cust-007`,type:`assembly`,title:`Mid-week Assembly - Johannesburg`,date:`2026-12-03`,startTime:`10:00`,endTime:`12:00`,location:`Johannesburg Central Congregation Hall`,notes:`Southern Africa tour prep`},{id:`mtg-009`,congregationId:`cust-008`,type:`biblestudy`,title:`Bible Study - Lagos (Pending)`,date:`2026-12-10`,startTime:`14:00`,endTime:`15:00`,location:`Lagos Island Congregation Hall`,notes:`Pending brother assignment`},{id:`mtg-010`,congregationId:`cust-009`,type:`assembly`,title:`Mid-week Assembly - Manila`,date:`2026-12-12`,startTime:`10:00`,endTime:`12:00`,location:`Manila North Congregation Hall`,notes:`Regional coordination meeting`},{id:`mtg-011`,congregationId:`cust-010`,type:`watchtower`,title:`Watchtower Study - Barcelona`,date:`2026-12-15`,startTime:`15:00`,endTime:`16:00`,location:`Barcelona Eixample Congregation Hall`,notes:`Christmas season outreach prep`},{id:`mtg-012`,congregationId:`cust-011`,type:`biblestudy`,title:`Bible Study - São Paulo`,date:`2026-12-18`,startTime:`14:00`,endTime:`15:00`,location:`São Paulo Ibirapuera Congregation Hall`,notes:`Year-end report preparation`}];function t(e){let[t,n]=e.split(`:`).map(Number),r=t>=12?`PM`:`AM`;return`${t%12||12}:${n.toString().padStart(2,`0`)} ${r}`}function n(e,t){let n=new Date(e),r=new Date;r.setHours(0,0,0,0);let i=new Date(n);i.setHours(0,0,0,0);let a=i.getTime()-r.getTime(),o=Math.ceil(a/864e5);return o>=0&&o<=t}function r(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function i(e){return new Date(e)<new Date}var a=class{container;constructor(e){this.container=e,this.render()}render(){let n=e.filter(e=>!i(e.date)).sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime());this.container.innerHTML=`
      <div class="meeting-header">
        <h2 class="section-title">Upcoming Meetings</h2>
        <div class="meeting-stats">
          <span>${n.length} upcoming meeting${n.length===1?``:`s`}</span>
        </div>
      </div>
      <div class="meeting-list">
        ${n.length===0?`<p class="empty-state">No upcoming meetings in the schedule.</p>`:n.map(e=>this.renderMeetingItem(e)).join(``)}
      </div>
    `,this.container.querySelectorAll(`.btn-detail`).forEach(n=>{let r=n.getAttribute(`data-id`);if(r){let n=e.find(e=>e.id===r);n&&alert(`Meeting Details:\nTitle: ${n.title}\nDate: ${n.date}\nTime: ${t(n.startTime)}-${t(n.endTime)}\nLocation: ${n.location}\nNotes: ${n.notes}`)}});let r=new Date;r.setDate(r.getDate()+1);let a=r.toISOString().split(`T`)[0];this.container.querySelectorAll(`.meeting-item`).forEach(e=>{let t=e.querySelector(`.meeting-date`);t&&(t.textContent||``).includes(a)&&t.classList.add(`is-today`)})}renderMeetingItem(e){let i=r(e.date),a=n(e.date,1)?`tomorrow`:i?`today`:`upcoming`,o=this.getBadgeForType(e.type);return`
      <div class="meeting-item ${a}" data-id="${e.id}">
        <div class="meeting-left">
          <div class="meeting-header-row">
            <span class="meeting-type ${e.type}">${e.type}</span>
            <span class="meeting-date">${e.date}</span>
            <span class="meeting-time">${t(e.startTime)} - ${t(e.endTime)}</span>
          </div>
          <h3 class="meeting-title">${e.title}</h3>
          <p class="meeting-location">${e.location}</p>
          ${e.notes?`<p class="meeting-notes">${e.notes}</p>`:``}
        </div>
        <div class="meeting-right">
          <span class="badge ${o}">${e.type}</span>
          <button class="btn-icon btn-detail" data-id="${e.id}" title="View Details">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </button>
          <button class="btn-icon btn-edit" data-id="${e.id}" title="Edit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
              <path d="m15 5 4 4"/>
            </svg>
          </button>
          <button class="btn-icon btn-delete" data-id="${e.id}" title="Delete">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18"/>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        </div>
      </div>
    `}getBadgeForType(e){switch(e){case`assembly`:return`badge-assembly`;case`biblestudy`:return`badge-biblestudy`;case`watchtower`:return`badge-watchtower`;case`wedding`:return`badge-wedding`;case`funeral`:return`badge-funeral`;default:return`badge-other`}}};document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`app`);e&&new a(e.querySelector(`#meeting-list`)||e.appendChild(document.createElement(`div`)))});
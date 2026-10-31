// Congregation assignment data for theocratic schedule synchronization
// Each assignment includes: region, territory, congregation, its name, meeting times, and the Brother assigned.

export interface Congregation {
  id: string
  region: string
  territory: string
  congregationName: string
  address: string
  country: string
  phone: string
  status: 'active' | 'inactive' | 'pending'
  assignedBrotherId: string
  assignedBrotherName: string
  lastVisit: string | null
  nextVisitDate: string | null
}

export interface Meeting {
  id: string
  congregationId: string
  type: 'biblestudy' | 'assembly' | 'watchtower' | 'wedding' | 'funeral' | 'other'
  title: string
  date: string
  startTime: string
  endTime: string
  location: string
  notes: string
}

export interface AssignmentLog {
  id: string
  congregationId: string
  brotherId: string
  brotherName: string
  date: string
  activity: string
  status: 'pending' | 'completed' | 'failed' | 'contacted'
}

// Sample congregation data for the schedule sync app
export const congregations: Congregation[] = [
  {
    id: 'cust-001',
    region: 'Americas',
    territory: 'United States - Northeast',
    congregationName: 'Greater Boston Congregation',
    address: '123 Meeting Street, Boston, MA 02108',
    country: 'United States',
    phone: '+1-617-555-0198',
    status: 'active',
    assignedBrotherId: 'bro-001',
    assignedBrotherName: 'Brother John Martin',
    lastVisit: '2026-10-15',
    nextVisitDate: '2026-11-20'
  },
  {
    id: 'cust-002',
    region: 'Americas',
    territory: 'United States - Southeast',
    congregationName: 'Atlanta Georgia Congregation',
    address: '456 Peachtree Ave, Atlanta, GA 30301',
    country: 'United States',
    phone: '+1-404-555-0291',
    status: 'active',
    assignedBrotherId: 'bro-002',
    assignedBrotherName: 'Brother David Chen',
    lastVisit: '2026-10-20',
    nextVisitDate: '2026-11-18'
  },
  {
    id: 'cust-003',
    region: 'Europe',
    territory: 'United Kingdom - England',
    congregationName: 'London Central Congregation',
    address: '78 Victoria Road, London NW1 6XE',
    country: 'United Kingdom',
    phone: '+44-20-7946-0958',
    status: 'active',
    assignedBrotherId: 'bro-003',
    assignedBrotherName: 'Brother Mark Williams',
    lastVisit: '2026-09-30',
    nextVisitDate: '2026-11-15'
  },
  {
    id: 'cust-004',
    region: 'Europe',
    territory: 'Germany - Bavaria',
    congregationName: 'Munich Alois-Fischer Congregation',
    address: '24 Josefplatz, 80331 Munich, Germany',
    country: 'Germany',
    phone: '+49-89-555-0375',
    status: 'active',
    assignedBrotherId: 'bro-004',
    assignedBrotherName: 'Brother Peter Schmidt',
    lastVisit: '2026-10-10',
    nextVisitDate: '2026-11-22'
  },
  {
    id: 'cust-005',
    region: 'Asia-Pacific',
    territory: 'Singapore',
    congregationName: 'Singapore Inter Faith Congregation',
    address: '9 Jalan Besar, 208801, Singapore',
    country: 'Singapore',
    phone: '+65-6589-0172',
    status: 'active',
    assignedBrotherId: 'bro-005',
    assignedBrotherName: 'Brother Kenji Tanaka',
    lastVisit: '2026-10-05',
    nextVisitDate: '2026-11-25'
  },
  {
    id: 'cust-006',
    region: 'Asia-Pacific',
    territory: 'Australia - New South Wales',
    congregationName: 'Sydney St George Congregation',
    address: '15 King Street, Sydney NSW 2000',
    country: 'Australia',
    phone: '+61-2-9555-0442',
    status: 'active',
    assignedBrotherId: 'bro-006',
    assignedBrotherName: 'Brother James Wilson',
    lastVisit: '2026-10-18',
    nextVisitDate: '2026-11-30'
  },
  {
    id: 'cust-007',
    region: 'Africa',
    territory: 'South Africa - Gauteng',
    congregationName: 'Johannesburg Central Congregation',
    address: '32 Johannesburg Road, Johannesburg 2001',
    country: 'South Africa',
    phone: '+27-11-555-0567',
    status: 'active',
    assignedBrotherId: 'bro-007',
    assignedBrotherName: 'Brother Thabo Mokoena',
    lastVisit: '2026-10-12',
    nextVisitDate: '2026-12-01'
  },
  {
    id: 'cust-008',
    region: 'Africa',
    territory: 'Nigeria - Lagos',
    congregationName: 'Lagos Island Congregation',
    address: '8 Agidingbi Street, Ikeja, Lagos',
    country: 'Nigeria',
    phone: '+234-9-555-0681',
    status: 'pending',
    assignedBrotherId: 'bro-008',
    assignedBrotherName: 'Brother Chidi Okonkwo',
    lastVisit: null,
    nextVisitDate: '2026-12-10'
  },
  {
    id: 'cust-009',
    region: 'Asia-Pacific',
    territory: 'Philippines - Manila',
    congregationName: 'Manila North Congregation',
    address: '12 Beham Road, Ermita, Manila',
    country: 'Philippines',
    phone: '+63-2-555-0792',
    status: 'active',
    assignedBrotherId: 'bro-009',
    assignedBrotherName: 'Brother Miguel Santos',
    lastVisit: '2026-10-22',
    nextVisitDate: '2026-12-05'
  },
  {
    id: 'cust-010',
    region: 'Europe',
    territory: 'Spain - Catalonia',
    congregationName: 'Barcelona Eixample Congregation',
    address: '45 Passeig de Gràcia, 08007 Barcelona',
    country: 'Spain',
    phone: '+34-93-555-0815',
    status: 'active',
    assignedBrotherId: 'bro-010',
    assignedBrotherName: 'Brother Carlos García',
    lastVisit: '2026-10-14',
    nextVisitDate: '2026-12-12'
  },
  {
    id: 'cust-011',
    region: 'Americas',
    territory: 'Brazil - São Paulo',
    congregationName: 'São Paulo Ibirapuera Congregation',
    address: '777 Paulista Ave, São Paulo SP 01310-100',
    country: 'Brazil',
    phone: '+55-11-555-0922',
    status: 'active',
    assignedBrotherId: 'bro-011',
    assignedBrotherName: 'Brother Ricardo Silva',
    lastVisit: '2026-10-08',
    nextVisitDate: '2026-12-15'
  },
  {
    id: 'cust-012',
    region: 'Asia-Pacific',
    territory: 'India - Mumbai',
    congregationName: 'Mumbai Bombay Central Congregation',
    address: '5 Captain Saveral Road, Byculla East, Mumbai 400008',
    country: 'India',
    phone: '+91-22-555-1033',
    status: 'pending',
    assignedBrotherId: 'bro-012',
    assignedBrotherName: 'Brother Prakash Nair',
    lastVisit: null,
    nextVisitDate: '2027-01-10'
  },
  {
    id: 'cust-013',
    region: 'Europe',
    territory: 'France - Île-de-France',
    congregationName: 'Paris Bercy Congregation',
    address: '12 Parc de Bercy, 75012 Paris',
    country: 'France',
    phone: '+33-1-555-1144',
    status: 'active',
    assignedBrotherId: 'bro-013',
    assignedBrotherName: 'Brother François Moreau',
    lastVisit: '2026-10-03',
    nextVisitDate: '2026-12-18'
  },
  {
    id: 'cust-014',
    region: 'Americas',
    territory: 'Canada - Ontario',
    congregationName: 'Toronto Lawrence Park Congregation',
    address: '249 Lawrence Ave W, Toronto ON M6A 2T9',
    country: 'Canada',
    phone: '+1-416-555-1255',
    status: 'active',
    assignedBrotherId: 'bro-014',
    assignedBrotherName: 'Brother Robert Thompson',
    lastVisit: '2026-10-19',
    nextVisitDate: '2026-12-20'
  },
  {
    id: 'cust-015',
    region: 'Asia-Pacific',
    territory: 'Indonesia - Java',
    congregationName: 'Jakarta Selatan Congregation',
    address: '123 Jalan M.H. Thamrin, Jakarta 10350',
    country: 'Indonesia',
    phone: '+62-21-555-1362',
    status: 'active',
    assignedBrotherId: 'bro-015',
    assignedBrotherName: 'Brother Budi Santoso',
    lastVisit: '2026-10-07',
    nextVisitDate: '2026-12-22'
  },
];

// Sample meeting schedule for the next 30 days
export const meetings: Meeting[] = [
  {
    id: 'mtg-001',
    congregationId: 'cust-001',
    type: 'assembly',
    title: 'Courtyard Assembly - Greater Boston',
    date: '2026-11-10',
    startTime: '10:00',
    endTime: '12:00',
    location: 'Greater Boston Congregation Hall',
    notes: 'Mid-week assembly attendance check-in.'
  },
  {
    id: 'mtg-002',
    congregationId: 'cust-001',
    type: 'biblestudy',
    title: 'Bible Study - Greater Boston',
    date: '2026-11-13',
    startTime: '15:30',
    endTime: '16:30',
    location: 'Greater Boston Congregation Hall',
    notes: 'International Bible Study Course - Unit 4'
  },
  {
    id: 'mtg-003',
    congregationId: 'cust-002',
    type: 'assembly',
    title: 'Mid-week Assembly - Atlanta',
    date: '2026-11-12',
    startTime: '10:00',
    endTime: '12:00',
    location: 'Atlanta Georgia Congregation Hall',
    notes: 'Southwest US online attendance'
  },
  {
    id: 'mtg-004',
    congregationId: 'cust-003',
    type: 'watchtower',
    title: 'Watchtower Study - London',
    date: '2026-11-19',
    startTime: '15:00',
    endTime: '16:00',
    location: 'London Central Congregation Hall',
    notes: 'Annual meeting preparation'
  },
  {
    id: 'mtg-005',
    congregationId: 'cust-004',
    type: 'biblestudy',
    title: 'Bible Study - Munich',
    date: '2026-11-21',
    startTime: '14:00',
    endTime: '15:00',
    location: 'Munich Alois-Fischer Congregation Hall',
    notes: 'Regional meeting review'
  },
  {
    id: 'mtg-006',
    congregationId: 'cust-005',
    type: 'assembly',
    title: 'Mid-week Assembly - Singapore',
    date: '2026-11-28',
    startTime: '10:30',
    endTime: '12:30',
    location: 'Singapore Inter Faith Congregation Hall',
    notes: 'Multilingual translation available'
  },
  {
    id: 'mtg-007',
    congregationId: 'cust-006',
    type: 'biblestudy',
    title: 'Bible Study - Sydney',
    date: '2026-12-01',
    startTime: '16:00',
    endTime: '17:00',
    location: 'Sydney St George Congregation Hall',
    notes: 'End-of-year preparation'
  },
  {
    id: 'mtg-008',
    congregationId: 'cust-007',
    type: 'assembly',
    title: 'Mid-week Assembly - Johannesburg',
    date: '2026-12-03',
    startTime: '10:00',
    endTime: '12:00',
    location: 'Johannesburg Central Congregation Hall',
    notes: 'Southern Africa tour prep'
  },
  {
    id: 'mtg-009',
    congregationId: 'cust-008',
    type: 'biblestudy',
    title: 'Bible Study - Lagos (Pending)',
    date: '2026-12-10',
    startTime: '14:00',
    endTime: '15:00',
    location: 'Lagos Island Congregation Hall',
    notes: 'Pending brother assignment'
  },
  {
    id: 'mtg-010',
    congregationId: 'cust-009',
    type: 'assembly',
    title: 'Mid-week Assembly - Manila',
    date: '2026-12-12',
    startTime: '10:00',
    endTime: '12:00',
    location: 'Manila North Congregation Hall',
    notes: 'Regional coordination meeting'
  },
  {
    id: 'mtg-011',
    congregationId: 'cust-010',
    type: 'watchtower',
    title: 'Watchtower Study - Barcelona',
    date: '2026-12-15',
    startTime: '15:00',
    endTime: '16:00',
    location: 'Barcelona Eixample Congregation Hall',
    notes: 'Christmas season outreach prep'
  },
  {
    id: 'mtg-012',
    congregationId: 'cust-011',
    type: 'biblestudy',
    title: 'Bible Study - São Paulo',
    date: '2026-12-18',
    startTime: '14:00',
    endTime: '15:00',
    location: 'São Paulo Ibirapuera Congregation Hall',
    notes: 'Year-end report preparation'
  },
];

// Assignment log entries for tracking missionary activities
export const assignmentLogs: AssignmentLog[] = [
  { id: 'log-001', congregationId: 'cust-001', brotherId: 'bro-001', brotherName: 'Brother John Martin', date: '2026-10-15', activity: 'Did public talk on Ephesians', status: 'completed' },
  { id: 'log-002', congregationId: 'cust-002', brotherId: 'bro-002', brotherName: 'Brother David Chen', date: '2026-10-20', activity: 'Assoc. qualified for baptism', status: 'completed' },
  { id: 'log-003', congregationId: 'cust-003', brotherId: 'bro-003', brotherName: 'Brother Mark Williams', date: '2026-09-30', activity: 'Concluded 25-yr service year', status: 'completed' },
  { id: 'log-004', congregationId: 'cust-004', brotherId: 'bro-004', brotherName: 'Brother Peter Schmidt', date: '2026-10-10', activity: 'Regional meeting prep', status: 'completed' },
  { id: 'log-005', congregationId: 'cust-005', brotherId: 'bro-005', brotherName: 'Brother Kenji Tanaka', date: '2026-10-05', activity: 'School visit program intro', status: 'completed' },
  { id: 'log-006', congregationId: 'cust-006', brotherId: 'bro-006', brotherName: 'Brother James Wilson', date: '2026-10-18', activity: 'Association school visit', status: 'completed' },
  { id: 'log-007', congregationId: 'cust-007', brotherId: 'bro-007', brotherName: 'Brother Thabo Mokoena', date: '2026-10-12', activity: 'Southern Africa directors meeting', status: 'completed' },
  { id: 'log-008', congregationId: 'cust-008', brotherId: 'bro-008', brotherName: 'Brother Chidi Okonkwo', date: '2026-10-25', activity: 'Arrived Lagos - initial visit', status: 'completed' },
  { id: 'log-009', congregationId: 'cust-009', brotherId: 'bro-009', brotherName: 'Brother Miguel Santos', date: '2026-10-22', activity: 'Manila circuit assembly coordinator', status: 'completed' },
  { id: 'log-010', congregationId: 'cust-010', brotherId: 'bro-010', brotherName: 'Brother Carlos García', date: '2026-10-14', activity: 'Oriental Field School prep', status: 'completed' },
  { id: 'log-011', congregationId: 'cust-011', brotherId: 'bro-011', brotherName: 'Brother Ricardo Silva', date: '2026-10-08', activity: 'São Paulo District Convention tour coordination', status: 'completed' },
  { id: 'log-012', congregationId: 'cust-013', brotherId: 'bro-013', brotherName: 'Brother François Moreau', date: '2026-10-03', activity: 'French language school coordination', status: 'completed' },
];

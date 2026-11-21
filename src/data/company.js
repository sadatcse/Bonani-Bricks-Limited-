// Company content used across the public pages (products, process, licences, timeline…).
// Source: Bonani Bricks project profile, feasibility study (Nov 2026) and the HBRI
// "Guideline for Production and Use of Eco-friendly Concrete Blocks" (2023).
// Image paths point to /public/images — see IMAGE_PROMPTS.md for what each image should show.

export const stats = [
  { value: '107.8M', label: 'Blocks & pavers a year', note: 'designed capacity, 2 lines' },
  { value: '2', label: 'Fully automatic lines', note: 'Donyue QT18-15' },
  { value: '0', label: 'Kiln smoke & top-soil', note: 'non-fired process' },
  { value: '125', label: 'Jobs in Kushtia', note: 'direct & indirect' },
];

export const products = [
  {
    slug: 'solid-block',
    name: 'Solid Block',
    nameBn: 'সলিড ব্লক',
    image: '/images/products/solid-block.jpg',
    size: '240 × 115 × 70 mm',
    grade: 'Kha (Grade B)',
    strength: '10.01 – 15.00 MPa',
    absorption: '≤ 10%',
    perMould: 105,
    summary: 'A direct, stronger replacement for the traditional red clay brick — same size, so masons lay it the same way.',
    uses: ['Load-bearing & partition walls', 'Boundary walls', 'Brick-flat soling'],
  },
  {
    slug: 'hollow-block',
    name: 'Hollow Block',
    nameBn: 'হলো ব্লক',
    image: '/images/products/hollow-block.jpg',
    size: '400 × 200 × 200 mm',
    grade: 'Ka / Kha (Grade A / B)',
    strength: '≥ 6.51 MPa (gross area)',
    absorption: '≤ 7 – 10%',
    perMould: 18,
    summary: 'One hollow block replaces about 8–9 conventional bricks — lighter walls, less mortar and faster construction.',
    uses: ['External & internal walls of RCC-frame buildings', 'High-rise infill walls', 'Thermal & sound insulation'],
  },
  {
    slug: 'uni-block',
    name: 'Uni Block (Interlocking Paver)',
    nameBn: 'ইউনি ব্লক',
    image: '/images/products/uni-block.jpg',
    size: '200 × 163 × 60 mm',
    grade: 'Ka (Grade A)',
    strength: '> 35.00 MPa',
    absorption: '≤ 5%',
    perMould: 42,
    summary: 'High-strength interlocking pavers that spread load and stay locked in place under heavy traffic.',
    uses: ['Footpaths & parking', 'Filling stations', 'Roads & industrial yards'],
  },
  {
    slug: 'paving-block',
    name: 'Rectangular Paving Block',
    nameBn: 'পেভিং ব্লক',
    image: '/images/products/paving-block.jpg',
    size: '200 × 100 × 60 mm',
    grade: 'Kha (Grade B)',
    strength: '27.51 – 35.00 MPa',
    absorption: '≤ 5%',
    perMould: 66,
    summary: 'Clean, durable pavers for walkways and public spaces, laid in herring-bone, basket-weave or stretcher patterns.',
    uses: ['Walkways & parks', 'Campuses & bazaars', 'Residential streets'],
  },
];

export const moreProducts = ['Kerb stone', 'Grass paver', 'Coloured pavers', 'Custom sizes on order'];

export const benefits = [
  {
    key: 'eco',
    title: 'Eco-friendly',
    text: 'No firing, no coal or wood and no fertile top-soil. Zero kiln emissions — dust and noise are controlled at the plant.',
  },
  {
    key: 'strength',
    title: 'Uniform size & strength',
    text: 'Machine-moulded and vibro-compacted, graded to HBRI classes (Ka / Kha / Ga) with the grade stamped on each block.',
  },
  {
    key: 'cost',
    title: 'Lower construction cost',
    text: 'Less mortar and plaster, faster laying — HBRI reports 25–40% savings in wall construction cost.',
  },
  {
    key: 'light',
    title: 'Lighter & insulated',
    text: 'Hollow blocks cut the dead load of a building and keep rooms cooler and quieter.',
  },
  {
    key: 'supply',
    title: 'Year-round supply',
    text: 'Automatic lines with curing chambers produce all year — unlike seasonal kilns that only run in the dry season.',
  },
  {
    key: 'compliance',
    title: 'Tender compliant',
    text: 'Helps government contractors meet the mandatory block-use requirement in LGED, PWD and other tender specifications.',
  },
];

// Red clay brick vs Bonani concrete block
export const comparison = [
  { label: 'Raw material', brick: 'Fertile agricultural top-soil', block: 'Cement, sand, stone dust/chips, fly ash' },
  { label: 'Process', brick: 'Fired in kilns with coal & wood', block: 'Non-fired: vibro-compaction + controlled curing' },
  { label: 'Air pollution', brick: 'One of the largest sources in Bangladesh', block: 'No flue gas, zero kiln emissions' },
  { label: 'Size & quality', brick: 'Varies kiln to kiln', block: 'Uniform, machine-made, graded & stamped' },
  { label: 'Wall speed', brick: '1 brick at a time', block: '1 hollow block ≈ 8–9 bricks' },
  { label: 'Production season', brick: 'Dry season only', block: 'All year round' },
  { label: 'Government works', brick: 'Being phased out', block: 'Mandatory under the 2019 MoEFCC notification' },
];

export const processSteps = [
  { title: 'Raw material collection', text: 'Cement, river sand from the Padma & Gorai, stone chips / dust and fly ash from contracted suppliers.' },
  { title: 'Automatic batching', text: 'Every material is weighed automatically to the exact mix design.' },
  { title: 'Mixing', text: 'A high-efficiency mixer blends aggregates, cement and water into a uniform semi-dry mix.' },
  { title: 'Conveyor & hopper', text: 'The mix is carried by belt conveyor to the feeding hopper of the block machine.' },
  { title: 'Moulding — QT18-15', text: 'High-frequency vibration and hydraulic pressure form dense, accurate green blocks in steel moulds.' },
  { title: 'Stacking', text: 'An automatic stacker moves fresh blocks on pallets via elevator, finger cart and lowerator.' },
  { title: 'Curing', text: 'Blocks rest in curing chambers for controlled hydration and strength gain.' },
  { title: 'Quality control', text: 'Batch testing for compressive strength, size and water absorption in our own QC lab.' },
  { title: 'Storage & delivery', text: 'Cubed, palletised blocks are stored in the yard and dispatched by truck.' },
];

export const machine = {
  name: 'Donyue QT18-15 Fully Automatic Block Production Line',
  maker: 'Donyue Machinery Group, Linyi, Shandong, China — founded 1994, ISO & CE certified',
  points: [
    'Rated moulding cycle of 15 seconds (we plan at a conservative 20 s)',
    'Hydraulic pressure + high-frequency vibration for dense, strong blocks',
    'Siemens, Omron, Yuken, Schneider, Mitsubishi & ABB control and hydraulic parts',
    'Interchangeable moulds — solid, hollow, uni and paving blocks on one machine',
    'Automatic batching, cement silo, elevator / lowerator, finger cart and cuber',
    'Installation, commissioning and operator training by Donyue engineers',
  ],
};

export const facilities = [
  { title: 'Production shed', text: 'Pre-engineered steel shed housing the two QT18-15 lines.', image: '/images/factory/production-shed.jpg' },
  { title: 'Curing chambers', text: 'Insulated chambers for controlled, year-round curing.', image: '/images/factory/curing-chamber.jpg' },
  { title: 'QC laboratory', text: '2,000 kN compression testing machine — tests every batch to ASTM C140 / BDS EN 772-1.', image: '/images/factory/qc-lab.jpg' },
  { title: 'Stock & loading yard', text: 'Multi-tier palletised storage and direct truck loading.', image: '/images/factory/stock-yard.jpg' },
];

export const locationAdvantages = [
  'Direct access to the Kushtia–Rajbari and Kushtia–Jhenaidah highways',
  'Connected to Dhaka via the Padma Bridge',
  'Khulna, Mongla port & Benapole via Jhenaidah–Jashore',
  'North Bengal via the Lalon Shah Bridge',
  'Local river sand from the Padma and Gorai',
  'WZPDCL grid power and deep tube-well water on site',
];

export const serviceAreas = ['Kushtia', 'Jhenaidah', 'Chuadanga', 'Meherpur', 'Pabna', 'Rajbari', 'Magura', 'Dhaka'];

export const customers = [
  { title: 'Government contractors', text: 'LGED, PWD, EED, DPHE, HED, Roads & Highways, Upazila & Union Parishad and Paurashava works.' },
  { title: 'Real-estate developers', text: 'Apartment and commercial projects in Dhaka and the divisional towns.' },
  { title: 'Factories & institutions', text: 'Boundary walls, sheds, campuses, hospitals and warehouses.' },
  { title: 'Home builders & dealers', text: 'Individual house owners and building-material dealers across the region.' },
];

export const licences = [
  { title: 'Certificate of Incorporation', authority: 'RJSC & Firms, Bangladesh', ref: 'No. KHC-2670/2025 · 05 Jan 2025', status: 'Obtained' },
  { title: 'Memorandum & Articles of Association', authority: 'RJSC & Firms', ref: 'Issue No. 477335 · 05 Jan 2025', status: 'Obtained' },
  { title: 'Taxpayer Identification Number (TIN)', authority: 'National Board of Revenue', ref: '872054506051 · 17 Feb 2025', status: 'Obtained' },
  { title: 'Trade Licence', authority: 'Kushtia Paurashava', ref: 'No. 04511/1 · valid to 30 Jun 2027', status: 'Obtained' },
  { title: 'NOC for Location Clearance', authority: 'Kushtia Paurashava', ref: 'Memo Kupou-202 · 24 Jul 2026', status: 'Obtained' },
  { title: 'Location Clearance (Yellow category)', authority: 'Department of Environment, Kushtia', ref: 'No. 22.02.4050.300.070.050.26.422 · valid to 07 Oct 2028', status: 'Obtained' },
  { title: 'Fire Licence', authority: 'Fire Service & Civil Defence, Kushtia', ref: 'No. AD/Kush/9319/2025-2026 · 59,241 sq ft', status: 'Obtained' },
  { title: 'Environmental Clearance Certificate (ECC)', authority: 'Department of Environment', ref: 'After civil works & machinery installation', status: 'In process' },
];

export const standards = [
  'HBRI Guideline for Production and Use of Eco-friendly Concrete Blocks (2023)',
  'ASTM C90 / ASTM C140',
  'BDS EN 771-3 (masonry units)',
  'BDS EN 1338 (paving blocks)',
  'BDS EN 772-1 (compressive strength test)',
];

export const timeline = [
  { date: 'Jan 2025', title: 'Company incorporated', text: 'Bonani Bricks Limited registered with RJSC (KHC-2670).' },
  { date: 'Feb 2025', title: 'TIN & licences', text: 'Tax registration, trade licence and fire licence obtained.' },
  { date: 'Jul 2026', title: 'Paurashava NOC', text: 'Kushtia Paurashava clears the Jugia site for an eco-friendly block factory.' },
  { date: 'Oct 2026', title: 'DoE location clearance', text: 'Department of Environment issues Yellow-category location clearance.' },
  { date: 'Dec 2026 – Nov 2027', title: 'Plant construction', text: 'Civil works, curing chambers and installation of two Donyue QT18-15 lines.' },
  { date: 'Dec 2027', title: 'Commercial production', text: 'Target start of full-scale production and regional supply.' },
];

export const leadership = [
  { name: 'Md. Salim Khan', photo: '/images/team/salim-khan.jpg', role: 'Chairman', text: 'Founder-sponsor and principal shareholder. He contributed the Jugia brick-field land and leads the family’s move from fired bricks to eco-friendly blocks.' },
  { name: 'Md. Sadat Khan', photo: '/images/team/sadat-khan.jpg', role: 'Managing Director', text: 'Chief executive in charge of day-to-day operations, project execution, sales and digital growth. B.Sc. in Computer Science & Engineering.' },
  { name: 'Mohammad Sadik Khan, Ph.D., P.E.', photo: '/images/team/sadik-khan.jpg', role: 'Director', text: 'Geotechnical engineer and Professor of Civil & Environmental Engineering (Jackson State University, USA); B.Sc. from BUET. Guides technical quality.' },
  { name: 'Hasina Siddique', photo: '/images/team/hasina-siddique.jpg', role: 'Director', text: 'Member of the Board, supporting governance and long-term planning.' },
  { name: 'Dr. Sifat Khanom', photo: '/images/team/sifat-khanom.jpg', role: 'Director', text: 'Member of the Board, supporting governance and corporate oversight.' },
];

export const policy = [
  {
    title: 'Brick Kiln (Control) Act 2013 — amended 2019',
    text: 'The amendment brought concrete blocks and other non-fired units into the legal definition of “brick”.',
  },
  {
    title: 'MoEFCC notification — 24 November 2019',
    text: 'Use of blocks is mandatory, on a time-bound basis, in all government construction, repair and renovation work — building and boundary walls, herring-bone-bond roads and type-B village roads.',
  },
  {
    title: 'HBRI Guideline — 2023',
    text: 'The Housing and Building Research Institute (Ministry of Housing & Public Works) sets block sizes, grades, strength and water-absorption limits. Our products follow it.',
  },
  {
    title: 'Green finance',
    text: 'Non-fired block bricks are eligible for Bangladesh Bank green refinance schemes.',
  },
];

export const news = [
  {
    title: 'Govt to provide loans for producing eco-friendly bricks',
    source: 'New Age',
    url: 'https://www.newagebd.net/article/192640/govt-to-provide-loans-for-producing-eco-friendly-bricks-minister',
  },
  {
    title: 'Eco-friendly blocks made mandatory in govt projects',
    source: 'The Daily Star',
    url: 'https://www.thedailystar.net/business/news/eco-friendly-blocks-made-mandatory-govt-projects-1840870',
  },
  {
    title: 'Govt allocates funds for eco-friendly block bricks',
    source: 'Dhaka Tribune',
    url: 'https://www.dhakatribune.com/bangladesh/326302/govt-allocates-50m-for-eco-friendly-block-brick',
  },
];


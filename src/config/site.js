// Central place for the site identity. Edit here — every page reads from this file.
export const siteConfig = {
  name: 'Bonani Bricks Limited',
  shortName: 'Bonani Bricks',
  tagline: 'Bricks That Build Your Future',
  taglineBn: 'ইটের বদলে ব্লক — মজবুত, সাশ্রয়ী, পরিবেশবান্ধব',
  // Used in the browser-tab / search-result title of the home page and in link previews
  slogan: 'Eco-friendly Concrete Blocks & Pavers, Kushtia',
  description:
    'Bonani Bricks Limited manufactures non-fired, eco-friendly concrete solid blocks, hollow blocks, uni blocks and paving blocks in Kushtia, Bangladesh — machine-made on fully automatic Donyue QT18-15 lines to the HBRI guideline.',
  keywords: [
    'Bonani Bricks',
    'eco-friendly bricks Bangladesh',
    'concrete block Kushtia',
    'hollow block',
    'solid block',
    'paving block',
    'uni block',
    'block brick',
    'ব্লক ইট',
    'পরিবেশবান্ধব ইট',
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  registration: {
    rjsc: 'KHC-2670',
    incorporated: '5 January 2025',
    tin: '872054506051',
  },
  contact: {
    email: 'sadatcse@gmail.com',
    phones: ['+880 1715-384539'],
    address: 'Dr. Anwarul Karim Road, Jugia (Vatapara), Kushtia Sadar, Kushtia-7000',
    // "Open in Maps" link and the map embedded on /contact. Leave empty to hide.
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jugia+Vatapara+Kushtia',
    mapEmbed: 'https://www.google.com/maps?q=Jugia+Vatapara,+Kushtia,+Bangladesh&output=embed',
    hours: 'Saturday – Thursday, 9:00 AM – 6:00 PM',
  },
  offices: [
    {
      key: 'head',
      title: 'Head Office',
      lines: ['29, A.C.M. Street, Thanapara', 'Kushtia-7000'],
    },
    {
      key: 'dhaka',
      title: 'Dhaka Office',
      lines: ['House 20, Road 11, Mohammadi Housing Society', 'Mohammadpur, Dhaka'],
    },
    {
      key: 'factory',
      title: 'Main Factory',
      lines: ['Dr. Anwarul Karim Road, Jugia (Vatapara)', 'Kushtia Sadar, Kushtia-7000'],
    },
  ],
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61572977921679',
    linkedin: '',
    github: '',
    youtube: '',
  },
};

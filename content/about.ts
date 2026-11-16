import type { TimelineEntry } from '../src/types'

export const about = {
  intro: 'I’m a product builder based in Houston, Texas. Most of my career has been spent inside the operations that software is supposed to help.',
  bio: [
    'I grew up in Kosovo and studied computer science (AI) and business at Minerva University, which meant living and working in several countries along the way, with internships in Berlin, Seoul and Abu Dhabi.',
    'Since 2023 I’ve been Director of Innovation & Business Operations at a new private K–12 school in Houston. I built its operating systems from zero: finance, HR, procurement, admissions, financial aid and tuition collection, mostly on Google Workspace. Over three years the school’s revenue grew from $650K to $1.9 million and enrollment grew 80% in two years.',
    'Before that I led payroll automation at Minerva University, co-founded an AI math learning platform in the SoftBank Masason Foundation AI Lab, and was a research mentee in Google’s Computer Science Research Mentorship Program.',
    'Now I’m building SeedPay, a school finance product for tuition, financial aid and donations. The first launch is planned for 2027.',
  ],
  timeline: [
    {
      period: '2024 – now',
      title: 'Founder',
      org: 'SeedPay',
      text: 'A school finance product for tuition, financial aid and donations. In development; first launch planned for 2027.',
    },
    {
      period: '2023 – now',
      title: 'Director of Innovation & Business Operations',
      org: 'Horizon Leadership Academy',
      place: 'Houston, Texas',
      text: 'Built the operational infrastructure of a new private K–12 school. 12+ automation workflows cut manual processing by about 70%.',
    },
    {
      period: '2022 – 2023',
      title: 'Co-founder & Product Lead, AI math learning platform',
      org: 'SoftBank Masason Foundation AI Lab',
      place: 'San Francisco',
      text: 'Led 0-to-1 development with 5 engineers and 2 researchers, grounded in 50+ user interviews.',
    },
    {
      period: '2019 – 2023',
      title: 'Lead Payroll & Automation Coordinator',
      org: 'Minerva University',
      place: 'San Francisco',
      text: 'Automated payroll and compliance workflows for 500+ employees with Google Apps Script.',
    },
    {
      period: '2021',
      title: 'Computer Science Research Mentee',
      org: 'Google CSRMP',
      text: 'A twelve-week research mentorship program.',
    },
    {
      period: '2019 – 2022',
      title: 'Internships',
      org: 'Gensler, teethlovers, The Bridge International, Zayed University, Expatrio',
      place: 'San Francisco, Berlin, Seoul, Abu Dhabi',
      text: 'UX research, product design, product marketing, admissions operations and survey research.',
    },
    {
      period: '2019 – 2023',
      title: 'B.S., Computational Sciences (AI) and Business',
      org: 'Minerva University',
    },
    {
      period: '2016 – 2019',
      title: 'Natural sciences diploma',
      org: 'Gjimnazi Hasan Nahi',
      place: 'Pristina, Kosovo',
      text: 'Research assistant at the University of Prishtina; represented Kosovo at international science olympiads.',
    },
  ] satisfies TimelineEntry[],
  recognition: [
    { title: 'Presidential Medal', detail: 'Awarded by the President of Kosovo for work in international education.' },
    { title: 'Silver medal, GENIUS Olympiad 2018', detail: 'International science olympiad, Oswego, New York.' },
    { title: 'Silver medal, Golden Climate Olympiad', detail: 'International science olympiad, Nairobi, Kenya.' },
    { title: 'Gold medal, National Chemistry Olympiad', detail: 'Pristina, Kosovo.' },
  ],
  languages: [
    { name: 'Albanian', level: 'Native' },
    { name: 'English', level: 'Full professional' },
    { name: 'Turkish', level: 'Full professional' },
    { name: 'Spanish', level: 'Elementary' },
    { name: 'Arabic', level: 'Elementary' },
  ],
  /**
   * Photo story from the Minerva years. Add media ids from content/media.ts.
   * The section only appears once at least three photos are listed here.
   */
  gallery: [] as string[],
  galleryHeading: 'Places along the way',
}

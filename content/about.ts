import type { TimelineEntry } from '../src/types'

export const about = {
  intro: 'I’m a product builder. Most of my career has been spent inside the operations that software is supposed to help.',
  bio: [
    'I grew up in Kosovo and studied computer science (AI) and business at Minerva University, which meant living and working in several countries along the way, with internships in Berlin, Seoul and Abu Dhabi.',
    'Since 2023 I’ve been the founding business manager at a new private K–12 school in Houston. Much of that job has been building the school’s operational workflows on Google Workspace: finance, HR, admissions and academic oversight.',
    'Before that I spent four years at Minerva Project coordinating student payroll and finance operations, worked on an AI-assisted math learning app with the Masason Foundation in Tokyo, and was a research mentee in Google’s Computer Science Research Mentorship Program.',
    'Now I’m building SeedPay, a school finance product for tuition, financial aid and donations.',
  ],
  timeline: [
    {
      period: '2025 – now',
      title: 'Founder',
      org: 'SeedPay',
      text: 'A school finance product for tuition, financial aid and donations. In development.',
    },
    {
      period: '2023 – now',
      title: 'Founding Business Manager · Business Analyst',
      org: 'Horizon Leadership Academy',
      place: 'Houston, Texas',
      text: 'Operations, finance and internal systems for a new private K–12 school.',
    },
    {
      period: '2022 – 2023',
      title: 'Co-founder, math learning app',
      org: 'Masason Foundation and Deepcore',
      place: 'Tokyo',
      text: 'Product discovery, user interviews and weekly sprints for an AI-assisted math app.',
    },
    {
      period: '2019 – 2023',
      title: 'Lead Finance Coordinator',
      org: 'Minerva Project',
      place: 'San Francisco',
      text: 'Student payroll and finance operations; automated reporting with Google Apps Script.',
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

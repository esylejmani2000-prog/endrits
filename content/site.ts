// Site-wide copy and settings. Edit freely; layout code reads from here.

export const site = {
  name: 'Endrit Sylejmani',
  url: 'https://endrits.com',
  locale: 'en_US',
  email: 'endrit@uni.minerva.edu',
  linkedin: 'https://www.linkedin.com/in/endrit-sylejmani/',
  /** Set to a path under public/ (e.g. "/resume.pdf") once a current, public-ready PDF exists. */
  resume: null as string | null,
  defaultDescription:
    'Endrit Sylejmani builds products for everyday work, with hands-on experience in software, finance and school operations.',
  ogImage: '/og.png',
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
]

export const home = {
  eyebrow: 'Endrit Sylejmani',
  headline: 'I build products for the work people do every day.',
  intro:
    'My work spans school operations, finance, and software. I’m especially interested in making complex workflows easier for the people who use them.',
  primaryAction: { label: 'View selected work', href: '#work' },
  secondaryAction: { label: 'About me', href: '/about/' },
  /** Shown next to the headline when there is no portrait yet, and under it when there is. */
  now: [
    { label: 'Building', text: 'SeedPay, a school finance product for tuition, financial aid and donations.' },
    { label: 'Working', text: 'Founding business manager at a private K–12 school in Houston, since 2023.' },
  ],
  workHeading: 'Selected work',
  workIntro: 'Two projects, each told from the problem to what actually shipped.',
  aboutHeading: 'About',
  about: [
    'I studied computer science and business at Minerva University, then joined the founding team of a new K–12 school as its business manager.',
    'Most of my work since has been turning paper forms, email threads and spreadsheets into systems a small staff can rely on. SeedPay grew out of that work.',
  ],
  aboutLink: { label: 'More about me', href: '/about/' },
}

export const contact = {
  heading: 'Get in touch',
  text: 'Email is the best way to reach me. I’m also on LinkedIn.',
}

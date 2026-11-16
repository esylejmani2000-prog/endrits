// Site-wide copy and settings. Edit freely; layout code reads from here.

export const site = {
  name: 'Endrit Sylejmani',
  url: 'https://endrits.com',
  locale: 'en_US',
  location: 'Houston, Texas',
  email: 'esylejmani2000@gmail.com',
  linkedin: 'https://www.linkedin.com/in/endrit-sylejmani/',
  /** Path under public/ to a current, public-ready PDF, or null to hide every résumé link. */
  resume: '/endrit-sylejmani-resume.pdf' as string | null,
  defaultDescription:
    'Endrit Sylejmani builds products for everyday work, with hands-on experience in software, finance and school operations. Based in Houston, Texas.',
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
    { label: 'Working', text: 'Director of Innovation & Business Operations at a private K–12 school, since 2023.' },
    { label: 'Building', text: 'SeedPay, a school finance product for tuition, financial aid and donations. Launching in 2027.' },
    { label: 'Based', text: 'Houston, Texas.' },
  ],
  workHeading: 'Selected work',
  workIntro: 'Two projects, each told from the problem to what actually shipped.',
  aboutHeading: 'About',
  about: [
    'I studied computer science and business at Minerva University, then joined the founding team of a new K–12 school in Houston, where I run business operations.',
    'Most of my work since has been turning paper forms, email threads and spreadsheets into systems a small staff can rely on. SeedPay grew out of that work.',
  ],
  aboutLink: { label: 'More about me', href: '/about/' },
}

export const contact = {
  heading: 'Get in touch',
  text: 'Email is the best way to reach me. You can also find me on LinkedIn or download my résumé.',
}

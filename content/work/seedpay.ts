import type { Project } from '../../src/types'

// Sources: SeedPay build plan (Oct 2026), the SeedPay prototype repository, and the
// Operational Systems Portfolio (May 2026). Confidential material (business plans,
// financial models, agreements, letters) is deliberately not used.

export const seedpay: Project = {
  slug: 'seedpay',
  published: true,
  title: 'SeedPay',
  summary:
    'A school finance product that brings tuition and fees, financial aid and donations into one place for school staff and families.',
  kicker: 'School finance · Founder',
  role: 'Founder. I define the product and its workflows and build the prototype.',
  status: 'In development. The current prototype runs on fictional data.',
  timeframe: '2025 – present',
  context: 'Grew out of my work on finance operations at a new K–12 school.',
  cover: 'seedpay-homepage',
  sections: [
    {
      heading: 'The problem',
      body: [
        'A private school’s tuition rarely comes from one place. A single family’s bill can combine private payments, a school financial-aid award, and state education savings account funds such as Texas’s TEFA program. Donations add another stream on top.',
        'At the school where I work, each source was tracked by hand. Late payments slipped through, and reconciling what had arrived against what was owed took days of staff time each month.',
      ],
    },
    {
      heading: 'Constraints',
      points: [
        {
          title: 'One founder, about an hour a day.',
          text: 'The current plan budgets roughly 95 hours across a term, so scope has to be cut on purpose rather than by accident.',
        },
        {
          title: 'Money and privacy can’t be mostly right.',
          text: 'A family must never see another family’s records, and a payment that is retried must never post twice.',
        },
        {
          title: 'No confirmed integration with the state funding platform.',
          text: 'I couldn’t assume an API existed, so the product has to work from school-verified records first.',
        },
        {
          title: 'No real school data until release checks pass.',
          text: 'Everything so far has been built and tested with fictional schools and families.',
        },
      ],
    },
    {
      heading: 'Key decisions',
      numbered: true,
      points: [
        {
          title: 'Release financial aid first.',
          text: 'Aid comes first, fee collection second and donations later. An accepted award becomes exactly one credit that billing depends on, so getting aid right first keeps everything after it simpler.',
        },
        {
          title: 'Keep four kinds of money separate.',
          text: 'School aid, expected state funding, state funding actually received, and private payments are recorded separately. Expected funding is a plan, not cash, so it is never shown to a family as paid.',
        },
        {
          title: 'Work with the integration that exists.',
          text: 'Until an approved data route is in place, staff record verified state-funding receipts with a review step. Imports will be added only against a real, permitted export format.',
        },
        {
          title: 'Never erase financial history.',
          text: 'Amounts are stored in whole cents. Corrections are recorded as reversals, appeals keep the original decision, and repeated actions can’t create duplicate records.',
        },
        {
          title: 'Decide the scope cuts in advance.',
          text: 'If dates slip, bank transfers, autopay and extra form fields go first. Access tests and money checks don’t. Dates never override correctness.',
        },
      ],
    },
    {
      heading: 'Making a balance legible',
      body: [
        'The hardest screen is the one that tells a family what they owe. This worked example from the product plan shows why expected and received funding have to stay apart.',
      ],
      table: {
        caption:
          'Illustrative numbers. $6,000 of state funding is expected for the year, but only the $1,500 actually received reduces the balance.',
        rows: [
          ['Tuition for the year', '$12,000'],
          ['Accepted school aid', '−$2,000'],
          ['Net charges', '$10,000', 'total'],
          ['State funding received so far', '−$1,500'],
          ['Still owed to the school', '$8,500', 'total'],
          ['Expected state funding, not yet received', '$4,500', 'sub'],
          ['The family’s agreed share', '$4,000', 'sub'],
        ],
      },
    },
    {
      heading: 'The prototype',
      body: [
        'The prototype covers billing, financial aid and giving, for both school staff and families. These screens come from its public pages and use fictional sample data.',
      ],
      figures: ['seedpay-parent-bill', 'seedpay-aid-status', 'seedpay-admin-queue', 'seedpay-giving'],
    },
    {
      heading: 'Where it stands',
      points: [
        { text: 'A working prototype of billing, financial aid and giving, with unit and integration tests for the money rules.' },
        { text: 'It runs on fictional data. The planned next step is a controlled financial-aid pilot with one school, once release checks pass.' },
        { text: 'Fee collection follows aid. Donations are planned after that.' },
      ],
    },
  ],
  seo: {
    title: 'SeedPay case study',
    description:
      'How Endrit Sylejmani is building SeedPay, a school finance product for tuition, financial aid and donations: the problem, constraints and key product decisions.',
  },
}

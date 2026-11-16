import type { Project } from '../../src/types'

// Sources: Operational Systems Portfolio (May 2026) and the current résumé. Only
// public-safe, process-level details are used: no student or family data, internal
// dashboards, financial records or school documents. Figures confirmed by Endrit.

export const schoolOperations: Project = {
  slug: 'school-operations',
  published: true,
  title: 'From paper forms to a school operations system',
  summary:
    'Connected workflows for purchasing, reimbursements, HR requests, admissions and classroom observations that replaced paper forms and email threads at a new private K–12 school.',
  kicker: 'School operations · Systems',
  highlights: [
    { value: '~70%', label: 'less manual processing' },
    { value: '+80%', label: 'enrollment in two years' },
    { value: '$650K → $1.9M', label: 'revenue over three years' },
  ],
  role: 'Director of Innovation & Business Operations, Horizon Leadership Academy. I designed and built the systems and trained staff to use them.',
  status: 'In use at the school.',
  timeframe: '2023 – present',
  context: 'A newly founded private K–12 school in Houston. Built on Google Workspace with Apps Script.',
  sections: [
    {
      heading: 'The problem',
      body: [
        'A new school starts with plenty of processes and no system behind them. Purchase approvals, reimbursements, time-off requests and onboarding ran through paper forms and email threads.',
        'Approvals stalled because nobody could see where a request was. Records were inconsistent, and accreditation evidence had to be pieced together from memory and email archives at the deadline.',
      ],
    },
    {
      heading: 'Constraints',
      points: [
        {
          title: 'No budget for enterprise software.',
          text: 'The school already paid for Google Workspace, so the systems had to be built there.',
        },
        {
          title: 'Processes had to survive staff changes.',
          text: 'Each workflow needed to be documented and teachable, not dependent on whoever set it up.',
        },
        {
          title: 'Privacy by default.',
          text: 'Family and staff records needed controlled access, down to who is allowed to email the whole parent community.',
        },
      ],
    },
    {
      heading: 'One workflow, start to finish',
      body: [
        'Purchasing is a good example. A request used to be an email, a printed form and a follow-up conversation. Now it moves through the same five steps every time, and anyone involved can see where it is.',
      ],
      flow: {
        caption: 'Simplified flow of a purchase request, built with Google Forms, Sheets, Apps Script and Gmail.',
        steps: [
          { title: 'Request', text: 'Staff submit one form instead of an email thread.' },
          { title: 'Context', text: 'The request is logged with the relevant budget in view.' },
          { title: 'Approval', text: 'It is routed to the right approver, who approves or returns it.' },
          { title: 'Record', text: 'The decision and documents are filed automatically.' },
          { title: 'Reimbursement', text: 'Receipts and payments are tracked against the request.' },
        ],
      },
    },
    {
      heading: 'Key decisions',
      numbered: true,
      points: [
        {
          title: 'Build on what the school already owns.',
          text: 'Google Forms is the front door for each request, Sheets is the record of what happened, and Apps Script routes approvals, sends notifications and generates documents.',
        },
        {
          title: 'Put the context next to the decision.',
          text: 'Purchase requests show the relevant budget to the approver, so decisions are made with the numbers in view.',
        },
        {
          title: 'Generate the paperwork instead of typing it.',
          text: 'Contractor agreements, financial-aid award letters and donor acknowledgments are produced from the records and filed into structured folders automatically.',
        },
        {
          title: 'Write it down and teach it.',
          text: 'Each workflow came with documentation and staff training, so it kept working as roles changed.',
        },
      ],
    },
    {
      heading: 'What the system covers',
      points: [
        { title: 'Finance.', text: 'Tuition planning and installments, late-fee triggers, financial-aid intake and award letters, donor acknowledgments, budget tracking.' },
        { title: 'HR.', text: 'Time-off requests, short-term leave and substitute coordination, purchase requests, reimbursements, contractor agreements.' },
        { title: 'Admissions.', text: 'Document tracking, structured family follow-up and a clear enrollment-status workflow.' },
        { title: 'Communication.', text: 'Grade-level parent groups with restricted posting, attendance notices and enrollment follow-ups.' },
        { title: 'Academics and accreditation.', text: 'Rubric-based classroom observation forms with feedback workflows, and an organized evidence library for accreditation.' },
      ],
    },
    {
      heading: 'Outcomes',
      points: [
        { text: 'Across 12+ automated workflows, manual processing time fell by about 70%.' },
        { text: 'Every purchase, reimbursement and time-off request now has a record and an approval history.' },
        { text: 'The systems had to keep up with a fast-growing school: enrollment grew 80% in two years, and revenue grew from $650K to $1.9 million over three years.' },
        { text: 'Accreditation evidence is collected as the year goes, not rebuilt at the deadline. The school earned three accreditations: Cognia, in its first operational year, and State and National Schools of Character.' },
        { text: 'No new licence costs: everything runs on the school’s existing Google Workspace.' },
        { text: 'The finance workflows showed how hard multi-source tuition is to manage by hand. That is where SeedPay started.' },
      ],
    },
  ],
  seo: {
    title: 'School operations case study',
    description:
      'How Endrit Sylejmani replaced paper forms and email threads at a new K–12 school with connected workflows built on Google Workspace.',
  },
}

import type { MediaEntry } from '../src/types'

// Image registry. Put source files in content/media/ and describe them here.
// `npm run dev` and `npm run build` generate resized AVIF/WebP copies with all
// metadata (including GPS) removed. Entries whose file is missing are skipped,
// and the pages fall back to a text-first layout.
//
// focal: where the subject is, as fractions from the top-left. Used when an
// image is cropped to fit a frame (portrait 4:5, candid 3:2, cards 16:10).

export const media: Record<string, MediaEntry> = {
  // Homepage portrait. Add content/media/portrait.jpg (at least 1200 px wide, 4:5 or taller).
  portrait: {
    file: 'portrait.jpg',
    alt: 'Endrit Sylejmani',
    focal: { x: 0.5, y: 0.3 },
  },
  // About preview and About page. Add content/media/candid.jpg (landscape, at least 1600 px wide)
  // and replace the alt text with a description of the photo before publishing.
  candid: {
    file: 'candid.jpg',
    alt: 'TODO: describe the photo',
    focal: { x: 0.5, y: 0.5 },
  },

  'seedpay-homepage': {
    file: 'seedpay-homepage.png',
    kind: 'screenshot',
    alt: 'SeedPay prototype homepage: the headline “Tuition, fees and giving, all in one place” beside a sample parent bill showing $550.00 to pay.',
    caption: 'Prototype homepage. All school, family and payment details are fictional.',
  },
  'seedpay-parent-bill': {
    file: 'seedpay-parent-bill.png',
    kind: 'screenshot',
    alt: 'Sample parent bill: December tuition $1,150 and an activity fee of $100, minus a $200 school award and $500 of outside funding received, leaving $550.00 to pay.',
    caption: 'A parent’s bill shows what was charged, what has already been applied, and what is left to pay.',
  },
  'seedpay-aid-status': {
    file: 'seedpay-aid-status.png',
    kind: 'screenshot',
    alt: 'Sample financial aid status: submitted, under review and decision complete, with a $400.00 award waiting for the family to accept.',
    caption: 'Financial aid status. Accepting an award posts one credit to tuition; declined or expired offers never change a balance.',
  },
  'seedpay-admin-queue': {
    file: 'seedpay-admin-queue.png',
    kind: 'screenshot',
    alt: 'Sample school admin overview: outstanding, overdue and collected totals, then a list of items needing attention including a failed payment, an overdue invoice, aid reviews and unmatched state funding.',
    caption: 'The business office starts from exceptions: failed payments, overdue invoices, aid reviews and funding not yet matched to a bill.',
  },
  'seedpay-giving': {
    file: 'seedpay-giving.png',
    kind: 'screenshot',
    alt: 'Sample donation page for a library renewal fund: $400 raised of a $15,000 goal, with suggested gift amounts and a “Give $50.00” button.',
    caption: 'Donations stay separate from tuition and aid. This part of the plan is scheduled after fee collection.',
  },
}

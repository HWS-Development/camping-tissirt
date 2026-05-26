const pub = (path) => `${process.env.PUBLIC_URL}${path}`

const galleryEntries = [
  { folder: 'camp', file: 'WhatsApp Image 2026-05-26 at 11.17.50 (1).jpeg', alt: 'Camping Tissirt property view' },
  { folder: 'hall', file: '_DSC3564-HDR.jpg', alt: 'Camping Tissirt common area' },
  { folder: 'hall', file: '_DSC3559-HDR.jpg', alt: 'Camping Tissirt lounge area' },
  { folder: 'hall', file: '_DSC3554-HDR.jpg', alt: 'Camping Tissirt seating area' },
  { folder: 'hall', file: '_DSC3570-HDR.jpg', alt: 'Camping Tissirt interior detail' },
  { folder: 'hall', file: '_DSC3549-HDR.jpg', alt: 'Camping Tissirt guest area' },
  { folder: 'hall', file: '_DSC3539-HDR.jpg', alt: 'Camping Tissirt property ambience' },
  { folder: 'hall', file: '_DSC3534-HDR.jpg', alt: 'Camping Tissirt shared space' },
  { folder: 'camp', file: 'WhatsApp Image 2026-05-26 at 11.17.50.jpeg', alt: 'Camping Tissirt exterior setting' },
  { folder: 'camp', file: 'WhatsApp Image 2026-05-26 at 11.17.49 (3).jpeg', alt: 'Camping Tissirt grounds' },
  { folder: 'camp', file: 'WhatsApp Image 2026-05-26 at 11.17.49 (2).jpeg', alt: 'Camping Tissirt palm grove scene' },
  { folder: 'camp', file: 'WhatsApp Image 2026-05-26 at 11.17.49 (1).jpeg', alt: 'Camping Tissirt campsite area' },
  { folder: 'camp', file: 'WhatsApp Image 2026-05-26 at 11.17.49.jpeg', alt: 'Camping Tissirt outdoor atmosphere' }
]

export const galleryImages = galleryEntries.map(({ folder, file, alt }) => ({
  src: pub(`/images/${folder}/${encodeURIComponent(file)}`),
  alt
}))

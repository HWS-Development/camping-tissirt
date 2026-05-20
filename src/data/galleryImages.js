const galleryFiles = [
  'Screenshot 2025-09-24 164554.png',
  'Screenshot 2025-09-24 164537.png',
  'Screenshot 2025-09-24 164510.png',
  'Screenshot 2025-09-24 164450.png',
  'Screenshot 2025-09-24 164429.png',
  'Screenshot 2025-09-24 164343.png',
  'Screenshot 2025-09-24 164306.png',
  'Screenshot 2025-09-24 164230.png',
  'Screenshot 2025-09-24 164153.png',
  'Screenshot 2025-09-24 164129.png',
  'Screenshot 2025-09-24 164100.png',
  'Screenshot 2025-09-15 160955.png'
]

export const galleryImages = galleryFiles.map((file) => ({
  src: `${process.env.PUBLIC_URL}/images/tout/${encodeURIComponent(file)}`,
  alt: 'Camping Tissirt gallery view'
}))

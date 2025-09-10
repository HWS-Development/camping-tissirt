// Build URLs for images stored in public/images/<folder>/<file>
const pub = (path) => `${process.env.PUBLIC_URL}${path}`

/**
 * Map room keys -> folder name in /public/images and file list.
 * Keep this list in sync with your /public/images folders.
 */
export const ROOM_IMAGES = {
  double: {
    folder: 'chambreStandard',
    files: [
      
      '9b04cdd3-38fb-4913-8104-173d2cb5d1e7.jpg',
      '314ffdbc-2c84-45fb-89f4-ff603ada4a74.jpg',
      '393c8f10-04b1-4de5-8dea-fb4807dfc264.jpg',
      'e34fc386-d995-4b88-a4aa-d759bdef18ac.jpg'
    ]
  },
  familySuite: {
    folder: 'suiteFamill', // <- folder name exactly as in your tree
    files: [
      '2b544e45-02eb-4d3b-832a-504f6e5085a2.jpg',
      '5f76a369-3890-4127-99d9-c195f3b29a8b.jpg',
      '34c2da0e-81b1-427a-8255-f5dc4cfae356.jpg',
      '75fb04ea-91a0-401b-a64e-9788d33f6929.jpg',
      'fda7d68f-9278-4c8d-9330-da364cef9277.jpg'
    ]
  },
  juniorSuite: {
    folder: 'suiteJunior',
    files: [
      '43bc7c69-8a3e-4307-bdf3-3600de8d6def.jpg',
      '107da34b-e0b8-430d-9bb6-1692997692e0.jpg',
      '06243471-50cb-4a8e-9458-30dfa28c0d53.jpg',
    ]
  },
  triplePool: {
    folder: 'tripleRoom',
    files: [
      '5ebe11c3-a891-42c5-ab80-e306299eadda.jpg',
      '5ebe11c3-a891-42c5-ab80-e306299eadda.jpg',
      '7f3300d4-6cde-4c08-838e-b63b7aa12aa4.jpg',
      'c85f34d5-9996-45d4-a7a8-9ab174fc3a83.jpg',
    
    ]
  }
}

export const getRoomImages = (key) => {
  const entry = ROOM_IMAGES[key]
  if (!entry) return []
  return entry.files.map((f) => pub(`/images/${entry.folder}/${f}`))
}

export const getCover = (key) => {
  const imgs = getRoomImages(key)
  return imgs[0] || pub('/images/placeholder.jpg')
}

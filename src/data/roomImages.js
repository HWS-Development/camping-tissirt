const pub = (path) => `${process.env.PUBLIC_URL}${path}`

export const ROOM_IMAGES = {
  double: {
    folder: 'rooms/01',
    files: [
      '_DSC3484-HDR.jpg',
      '_DSC3489-HDR.jpg',
      '_DSC3479-HDR.jpg',
      '_DSC3494-HDR.jpg',
      '_DSC3474-HDR.jpg'
    ]
  },
  triplePool: {
    folder: 'rooms/02',
    files: [
      '_DSC3509-HDR.jpg',
      '_DSC3499-HDR.jpg',
      '_DSC3504-HDR.jpg'
    ]
  },
  juniorSuite: {
    folder: 'rooms/03',
    files: [
      '_DSC3524-HDR.jpg',
      '_DSC3514-HDR.jpg',
      '_DSC3519-HDR.jpg',
      '_DSC3529-HDR.jpg'
    ]
  },
  familySuite: {
    folder: 'rooms/01',
    files: [
      '_DSC3474-HDR.jpg',
      '_DSC3494-HDR.jpg',
      '_DSC3489-HDR.jpg',
      '_DSC3484-HDR.jpg',
      '_DSC3479-HDR.jpg'
    ]
  }
}

export const getRoomImages = (key) => {
  const entry = ROOM_IMAGES[key]
  if (!entry) return []

  return entry.files.map((file) => pub(`/images/${entry.folder}/${encodeURIComponent(file)}`))
}

export const getCover = (key) => getRoomImages(key)[0] || pub(`/images/camp/${encodeURIComponent('WhatsApp Image 2026-05-26 at 11.17.50 (1).jpeg')}`)

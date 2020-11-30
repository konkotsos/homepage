export const getPhotoGalleryItems = function () {
  return new Promise((resolve) => {
    const galleryData = {
      items: [
        {
          src: '/img/photogallery/gallery-item-1.png',
          title: 'Photo 1y',
          path: '#gallery-1',
        },
        {
          src: '/img/photogallery/gallery-item-2.png',
          title: 'Photo 2',
          path: '#gallery-2',
        },
        {
          src: '/img/photogallery/gallery-item-3.png',
          title: 'Photo 3',
          path: '#gallery-3',
        },
        {
          src: '/img/photogallery/gallery-item-4.png',
          title: 'Photo 4',
          path: '#gallery-4',
        },
      ],
      btnLabel: 'View More',
      btnPath: '#galleries',
      title: 'Customer Gallery',
    }

    resolve(galleryData)
  })
}

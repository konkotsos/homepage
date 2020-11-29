export const getSlides = function () {
  return new Promise((resolve) => {
    const slides = [
      {
        src: '/img/mainslider/slide1.png',
        superTitle: 'Design and order your new kitchen online today',
        title: 'Bespoke & made to measure handmade kitchen design 1',
        path: '#slide1',
        btnLabel: 'Order Now',
      },
      {
        src: '/img/mainslider/slide1.png',
        superTitle: 'Design and order your new kitchen online today',
        title: 'Bespoke & made to measure handmade kitchen design 2',
        path: '#slide2',
        btnLabel: 'Order Now',
      },
      {
        src: '/img/mainslider/slide1.png',
        superTitle: 'Design and order your new kitchen online today',
        title: 'Bespoke & made to measure handmade kitchen design 3',
        path: '#slide3',
        btnLabel: 'Order Now',
      },
    ]

    resolve(slides)
  })
}

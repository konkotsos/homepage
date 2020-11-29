export const getIntroContent = function () {
  return new Promise((resolve) => {
    const introContent = {
      src: '/img/intro/intro-image.png',
      superTitle: 'Quality Craftmanship from build to delivery',
      title: 'Discover the beauty of a handmade kitchen',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.',
      path: '#aboutus',
      btnLabel: 'About Us',
    }

    resolve(introContent)
  })
}

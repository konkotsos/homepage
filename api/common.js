export const getSocialsList = function () {
  return new Promise((resolve, reject) => {
    const socialsList = [
      {
        name: 'facebook',
        icon: 'fab fa-facebook-f',
        url: 'https://facebook.com/',
      },
      {
        name: 'twitter',
        icon: 'fab fa-twitter',
        url: 'https://twitter.com/',
      },
      {
        name: 'instagram',
        icon: 'fab fa-instagram',
        url: 'https://instagram.com/',
      },
    ]

    resolve(socialsList)
  })
}
export const getHeaderMenuListLeft = function () {
  return new Promise((resolve, reject) => {
    const socialsList = [
      {
        name: 'shop',
        label: 'Shop',
        path: '#l1',
      },
      {
        name: 'plan my kitchen',
        label: 'Shop Plan My Kitchen',
        path: '#l2',
      },
    ]

    resolve(socialsList)
  })
}

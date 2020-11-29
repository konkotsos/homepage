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

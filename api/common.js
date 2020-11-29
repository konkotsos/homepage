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
    const list = [
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

    resolve(list)
  })
}

export const getHeaderMenuListRight = function () {
  return new Promise((resolve, reject) => {
    const list = [
      {
        name: 'about us',
        label: 'About us',
        path: '#r1',
      },
      {
        name: 'gallery',
        label: 'Gallery',
        path: '#r2',
      },
    ]

    resolve(list)
  })
}

export const getHeaderMyOrderMenuItem = function () {
  return new Promise((resolve, reject) => {
    const menuItem = {
      name: 'my order',
      label: 'My Order',
      path: '#myorder',
    }

    resolve(menuItem)
  })
}

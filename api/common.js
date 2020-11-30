export const getSocialsList = function () {
  return new Promise((resolve) => {
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
  return new Promise((resolve) => {
    const list = [
      {
        name: 'shop',
        label: 'Shop',
        path: '#l1',
      },
      {
        name: 'plan my kitchen',
        label: 'Plan My Kitchen',
        path: '#l2',
      },
    ]

    resolve(list)
  })
}

export const getHeaderMenuListRight = function () {
  return new Promise((resolve) => {
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
  return new Promise((resolve) => {
    const menuItem = {
      name: 'my order',
      label: 'My Order',
      path: '#myorder',
    }

    resolve(menuItem)
  })
}

export const getFooterMenus = function () {
  return new Promise((resolve) => {
    const menus = {
      menus: [
        {
          title: 'About',
          items: [
            { label: 'Shop', path: '#shop' },
            { label: 'Plan My Kitchen', path: '#planmykitchen' },
            { label: 'About Us', path: '#aboutus' },
            { label: 'Gallery', path: '#Gallery' },
          ],
        },
        {
          title: 'Service',
          items: [
            { label: 'FAQ', path: '#faq' },
            { label: 'Contact', path: '#contact' },
            { label: 'How to Buy', path: '#howtobuy' },
            { label: 'Downloads', path: '#downloads' },
          ],
        },
        {
          title: 'Info',
          items: [
            { label: 'Delivery', path: '#delivery' },
            { label: 'Terms', path: '#terms' },
            { label: 'Privacy', path: '#privacy' },
          ],
        },
      ],
      socialsMenu: {
        title: 'Follow',
        items: [
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
        ],
      },
    }

    resolve(menus)
  })
}

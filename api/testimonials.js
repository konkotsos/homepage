export const getTestimonials = function () {
  return new Promise((resolve) => {
    const testimonials = {
      testimonials: [
        {
          superTitle: 'What Our Customers Say',
          title: 'Over 35 years experience designing handmade kitchens 1',
          description:
            'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
          customerName: 'Jane, Dundee',
        },
        {
          superTitle: 'What Our Customers Say',
          title: 'Over 35 years experience designing handmade kitchens 2',
          description:
            'Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.',
          customerName: 'Jane, Dundee',
        },
      ],
      path: '#faq',
      btnLabel: 'Frequently Asked Questions',
    }

    resolve(testimonials)
  })
}

const FromPriceOrPricePerNight = {
  name: 'From Price Or Price Per Night',
  examples: [
    {
      label: 'Relatively price',
      props: {
        price: 32,
        calculatePriceType: 'relatively',
      },
    },
    {
      label: 'Relatively price with suffix',
      props: {
        price: 32,
        calculatePriceType: 'relatively',
        suffixAverage: true,
      },
    },
    {
      label: 'Relatively price with suffix inside Body',
      props: {
        price: 32,
        calculatePriceType: 'relatively',
        suffixAverage: true,
        useInsideBody: true,
      },
    },
    {
      label: 'Nightly price',
      props: {
        price: 32,
        calculatePriceType: 'nightly',
      },
    },
    {
      label: 'Nightly price with suffix',
      props: {
        price: 32,
        calculatePriceType: 'nightly',
        suffixAverage: true,
      },
    },

    {
      label: 'Nightly price with suffix inside Body',
      props: {
        price: 32,
        calculatePriceType: 'nightly',
        suffixAverage: true,
        useInsideBody: true,
      },
    },
  ],
};

export default FromPriceOrPricePerNight;

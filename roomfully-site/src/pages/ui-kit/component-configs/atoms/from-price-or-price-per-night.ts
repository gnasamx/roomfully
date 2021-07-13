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
  ],
};

export default FromPriceOrPricePerNight;

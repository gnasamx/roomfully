const ListingDescriptionReviews = {
  name: 'Listing Description Reviews',
  examples: [
    {
      label: 'Default',
      props: {
        reviewsScorePerMonth: 4.96,
        numberOfReviews: 235,
        allReviewsButton: 'All Reviews',
        reviewSentiments: [
          {
            type: 'Positive',
            category: '4 stars and above',
            value: 80,
          },
          {
            type: 'Neutral',
            category: '3 stars and above',
            value: 15,
          },
          {
            type: 'Negative',
            category: 'under 2 stars',
            value: 5,
          },
        ],
      },
    },
  ],
};

export default ListingDescriptionReviews;

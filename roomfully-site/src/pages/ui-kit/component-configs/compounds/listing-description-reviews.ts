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
            category: 'Under 2 stars',
            value: 5,
          },
        ],
        guestsReviews: [
          {
            shortReviewTitle: 'The loft was great and exactly as pictured.',
            reviewScore: 4.96,
            reviewDescription:
              'We felt right at home in this beautiful loft! It was exactly like the photos, if not, more stunning in person! Simon was very quick to respond to any questions we had and was just and overall wonderful host. We really enjoyed our stay would love to stay again whenever we venture back to Philly!',
            profilePicture: {
              src: 'https://bit.ly/3z3pAsT',
              alt: 'Man smiling in profile picture',
            },
            name: 'Shadeen McDowell',
            reviewAddedOn: 'June 2021',
          },
          {
            shortReviewTitle: 'We had a great stay.',
            reviewScore: 4.84,
            reviewDescription:
              'The property was beautiful and the front desk staff was friendly. The pictures are exactly what you are getting. We really enjoyed our stay!',
            profilePicture: {
              src: 'https://bit.ly/2UmhZqu',
              alt: 'Smiling girl in snow',
            },
            name: 'Joann Leith',
            reviewAddedOn: 'August 2021',
          },
        ],
      },
    },
  ],
};

export default ListingDescriptionReviews;

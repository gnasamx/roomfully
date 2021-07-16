const ReviewSentiment = {
  name: 'Review Sentiment',
  examples: [
    {
      label: 'Positive sentiment',
      props: {
        type: 'Positive',
        category: '4 stars and above',
        value: 80,
      },
    },
    {
      label: 'Neutral sentiment',
      props: {
        type: 'Neutral',
        category: '3 stars and above',
        value: 15,
      },
    },
    {
      label: 'Negative sentiment',
      props: {
        type: 'Negative',
        category: 'Under 2 stars',
        value: 5,
      },
    },
  ],
};

export default ReviewSentiment;

const ListingDescriptionHostedBy = {
  name: 'Listing Description Hosted By',
  examples: [
    {
      label: 'Default',
      props: {
        hostProfilePicture: {
          src: 'https://bit.ly/3euQ9PX',
          alt: 'A face of a girl',
        },
        hostName: 'Jushawn McDowell',
        hostSince: '2016',
        hostAbout:
          'I live with my husband who is a doctor at Stanford. I like to bike, run, travel, and have adventures.',
        hostIsVerified: true,
        hostUrl: '#',
        particulars: [
          {
            title: '26 Reviews',
            caption: '4.96 Overall score',
            particularType: 'reviews',
          },
          {
            title: 'Identity verified',
            caption: 'All documents verified',
            particularType: 'documents',
          },
          {
            title: 'English, German',
            caption: 'Speak languages',
            particularType: 'languages',
          },
        ],
      },
    },
  ],
};

export default ListingDescriptionHostedBy;

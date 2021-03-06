import { Center, HStack, Text } from '@chakra-ui/react';
import * as React from 'react';
import { HiStar } from 'react-icons/hi';

interface AbstractReviewsScoreProps {
  reviewsScorePerMonth: number;
}

/** Atom */

const decideRatingAppearance = (reviewsScorePerMonth: number) => {
  if (reviewsScorePerMonth > 4) {
    return {
      backgroundColor: 'green.300',
      label: 'Excellent',
    };
  } else if (reviewsScorePerMonth > 3) {
    return {
      backgroundColor: 'yellow.300',
      label: 'Good',
    };
  } else {
    return {
      backgroundColor: 'pink.300',
      label: 'Regular',
    };
  }
};

const AbstractReviewsScore: React.FC<AbstractReviewsScoreProps> = React.memo(
  ({ reviewsScorePerMonth }) => {
    const { backgroundColor, label } =
      decideRatingAppearance(reviewsScorePerMonth);
    return (
      <HStack alignItems='stretch'>
        <Center
          backgroundColor={backgroundColor}
          width={6}
          height={6}
          borderRadius='md'
        >
          <HiStar color='white' />
        </Center>
        <Text fontSize='sm' fontWeight='semibold'>
          {label}
        </Text>
      </HStack>
    );
  }
);

export default AbstractReviewsScore;

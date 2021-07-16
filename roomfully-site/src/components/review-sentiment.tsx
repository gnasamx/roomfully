import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import * as React from 'react';
import type { ReviewSentimentProps } from '../models/review-sentiment';
import SentimentVisualization from './sentiment-visualization';

/** Molecule */

const ReviewSentiment: React.FC<ReviewSentimentProps> = React.memo(
  ({ type, category, value }) => {
    return (
      <Grid
        templateColumns='1fr 20%'
        columnGap={3}
        alignItems='stretch'
        width='full'
      >
        <Box>
          <Text fontWeight='bold'>{type}</Text>
          <Text color='gray.600'>{category}</Text>
        </Box>
        <VStack alignItems='center'>
          <Heading as='h3' size='md'>
            {value}%
          </Heading>
          <SentimentVisualization value={value} />
        </VStack>
      </Grid>
    );
  }
);

export default ReviewSentiment;

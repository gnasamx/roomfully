import * as React from 'react';
import { Progress } from '@chakra-ui/react';
import type { SentimentVisualizationProps } from '../models/sentiment-visualization';

/** Atom */

const SentimentVisualization: React.FC<SentimentVisualizationProps> =
  React.memo(({ value }) => {
    return (
      <Progress
        value={value}
        borderRadius='lg'
        size='xs'
        width='full'
        backgroundColor={
          value > 50 ? 'green.100' : value > 10 ? 'yellow.100' : 'red.100'
        }
        colorScheme={value > 50 ? 'green' : value > 10 ? 'yellow' : 'red'}
      />
    );
  });

export default SentimentVisualization;

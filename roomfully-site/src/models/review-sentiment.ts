import type { SentimentVisualizationProps } from './sentiment-visualization';

export interface ReviewSentimentProps extends SentimentVisualizationProps {
  type: string;
  category: string;
}

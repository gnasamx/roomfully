import type { SentimentVisualizationProps } from './sentiment-visualization';

export interface ReviewSentiment extends SentimentVisualizationProps {
  type: string;
  category: string;
}

import { ReviewCardProps } from './review-card';
import type { ReviewSentimentProps } from './review-sentiment';
import type { ReviewsIconWithCountsAndNoOfReviewsProps } from './reviews-icon-with-counts-and-no-of-reviews';

export interface ListingDescriptionReviewsProps
  extends ReviewsIconWithCountsAndNoOfReviewsProps {
  allReviewsButton: string;
  reviewSentiments: ReviewSentimentProps[];
  guestsReviews: ReviewCardProps[];
}

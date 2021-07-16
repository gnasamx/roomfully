import type { UserDetailsProps } from './user-details';

export interface ReviewCardProps extends UserDetailsProps {
  shortReviewTitle: string;
  reviewScore: number;
  reviewDescription: string;
}

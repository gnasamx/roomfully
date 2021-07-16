import { Url } from 'url';

export interface ReviewCardProps {
  shortReviewTitle: string;
  reviewScore: number;
  reviewDescription: string;
  profilePicture: Url;
  name: string;
  reviewAddedOn: string;
}

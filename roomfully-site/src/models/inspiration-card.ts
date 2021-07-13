import { FromPriceOrPricePerNightProps } from "./from-price-or-price-per-night";

export interface InspirationCardProps extends Pick<FromPriceOrPricePerNightProps, 'price'> {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  url: string;
}

export interface FromPriceOrPricePerNightProps {
  price: number;
  calculatePriceType: 'relatively' | 'nightly';
  suffixAverage?: boolean;
}

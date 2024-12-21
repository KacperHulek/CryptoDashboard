export type RawTickerData = {
  symbol: string;
  lastPrice: string;
  fundingRate: string;
  prevPrice1h: string;
  turnover24h: string;
};

export type TickerData = {
  symbol: string;
  lastPrice: number;
  fundingRate: number;
  priceChange1h: number;
  volume24h: number;
};

import { RawTickerData, TickerData } from "@/types";
import { safeParseFloat } from "./numberUtils";

export const calculatePriceChange = (
  currentPrice: number,
  previousPrice: number
): number => {
  const change = ((currentPrice - previousPrice) * 100) / previousPrice;
  return isNaN(change) ? 0 : Number(change.toFixed(2));
};

export const formatFundingRate = (rate: string): number => {
  const parsed = safeParseFloat(rate);
  return Number((parsed * 100).toFixed(4));
};

export const transformTickerData = (rawTicker: RawTickerData): TickerData => {
  const lastPrice = safeParseFloat(rawTicker.lastPrice);
  const prevPrice1h = safeParseFloat(rawTicker.prevPrice1h);

  return {
    symbol: rawTicker.symbol,
    lastPrice,
    fundingRate: formatFundingRate(rawTicker.fundingRate),
    priceChange1h: calculatePriceChange(lastPrice, prevPrice1h),
    volume24h: safeParseFloat(rawTicker.turnover24h),
  };
};

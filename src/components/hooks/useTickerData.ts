import { useState, useEffect } from "react";
import axios from "axios";
import { TickerData } from "@/types";
import { API_ENDPOINTS, REFRESH_INTERVAL } from "@/constants";
import { transformTickerData } from "@/utils/tickerUtils";

interface UseTickerDataReturn {
  tickerData: TickerData[];
  loading: boolean;
  error: string | null;
}

export const useTickerData = (): UseTickerDataReturn => {
  const [tickerData, setTickerData] = useState<TickerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filterUSDTPairs = (tickers: TickerData[]): TickerData[] => {
    return tickers.filter((ticker) => ticker.symbol.endsWith("USDT"));
  };

  useEffect(() => {
    const fetchTickerData = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.tickers, {
          params: { category: "linear" },
        });

        if (response.data?.result?.list) {
          const formattedData = filterUSDTPairs(
            response.data.result.list.map(transformTickerData)
          );
          setTickerData(formattedData);
        }
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTickerData();
    const intervalId = setInterval(fetchTickerData, REFRESH_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  return { tickerData, loading, error };
};

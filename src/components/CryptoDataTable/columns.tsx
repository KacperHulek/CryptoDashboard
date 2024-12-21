"use client";
import { ColumnDef } from "@tanstack/react-table";
import { TickerData } from "@/types";
import {
  createSortableHeader,
  createSortingFn,
  getColorForValue,
} from "@/utils/tableUtils";

const createPercentageCell = (
  key: keyof TickerData,
  yellowThreshold?: number
) => {
  return ({ row }: { row: any }) => {
    const value = parseFloat(row.getValue(key));
    const textColor = getColorForValue(value, { yellowThreshold });
    return <div className={`text-left font-medium ${textColor}`}>{value}%</div>;
  };
};

export const columns: ColumnDef<TickerData>[] = [
  {
    accessorKey: "symbol",
    header: "Symbol",
    cell: ({ row }) => (
      <a
        href={`https://www.bybit.com/trade/usdt/${row.getValue("symbol")}`}
        className="text-left font-medium"
        target="_blank"
      >
        {row.getValue("symbol")}
      </a>
    ),
  },
  {
    accessorKey: "lastPrice",
    header: createSortableHeader("Last Price"),
  },
  {
    accessorKey: "fundingRate",
    header: createSortableHeader("Funding Rate"),
    cell: createPercentageCell("fundingRate"),
    sortingFn: createSortingFn(),
  },
  {
    accessorKey: "priceChange1h",
    header: createSortableHeader("Price Change 1h"),
    cell: createPercentageCell("priceChange1h", 8),
    sortingFn: createSortingFn(),
  },
  {
    accessorKey: "volume24h",
    header: createSortableHeader("Volume 24h"),
    sortingFn: createSortingFn(),
  },
];

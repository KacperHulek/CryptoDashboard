import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const createSortingFn = () => {
  return (rowA: any, rowB: any, columnId: string) => {
    const a = parseFloat(rowA.getValue(columnId));
    const b = parseFloat(rowB.getValue(columnId));
    if (isNaN(a) && isNaN(b)) return 0;
    if (isNaN(a)) return 1;
    if (isNaN(b)) return -1;
    return a - b;
  };
};

export const getColorForValue = (
  value: number,
  { yellowThreshold = 8 } = {}
): string => {
  if (value > yellowThreshold) return "text-yellow-500";
  if (value > 0) return "text-green-500";
  if (value < 0) return "text-red-500";
  return "text-gray-500";
};

export const createSortableHeader = (title: string) => {
  return ({ column }: { column: any }) => (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

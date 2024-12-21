import { useTickerData } from "../hooks/useTickerData";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const CryptoDataTable = () => {
  const { tickerData, loading, error } = useTickerData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={tickerData} />
    </div>
  );
};

export default CryptoDataTable;

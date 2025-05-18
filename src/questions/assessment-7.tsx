import React, { useEffect, useState, useCallback, ChangeEvent } from "react";
// There are some bad practices in the code below. Can you find them and fix them?
// Bonus: Fix all any types in the code below.

type Column = {
  key: string;
  label: string;
  render?: (row: any) => React.ReactNode;
};
type TableProps = {
  columns: Column[];
  fetchData: () => Promise<any[]>;
  filters?: {
    [key: string]: {
      label: string;
      placeholder?: string;
    };
  };
};
export function Table({ columns, fetchData, filters = {} }: TableProps) {
  const [data, setData] = useState<any[]>([]);
  const [filterState, setFilterState] = useState<{ [key: string]: string }>({});
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData()
      .then((fetchedData) => {
        setData(fetchedData);
        setFilteredData(fetchedData);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [fetchData]);

  useEffect(() => {
    setFilteredData(
      data.filter((row) =>
        Object.entries(filterState).every(([key, value]) =>
          String(row[key]).toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  }, [data, filterState]);

  const updateFilter = useCallback((key: string, value: string) => {
    const newFilterState = { ...filterState, [key]: value };
    setFilterState(newFilterState);
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        {Object.entries(filters).map(([key, config]) => (
          <div
            key={key}
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            <label>
              {config.label}:
              <input
                placeholder={config.placeholder}
                value={filterState[key] || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateFilter(key, e.target.value)
                }
              />
            </label>
          </div>
        ))}
      </div>

      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{ border: "1px solid black", padding: "5px" }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  style={{ border: "1px solid gray", padding: "5px" }}
                >
                  {col.render ? col.render(row) : String(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

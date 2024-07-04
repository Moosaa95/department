import React from 'react';

interface TableRow {
  [key: string]: string | number | string[]; // Adjusted to include string array for image lists
}

interface TableBodyProps {
  headers: string[];
  rows: TableRow[];
}

const TableBody: React.FC<TableBodyProps> = ({ headers, rows }) => {
  const truncateDescription = (description: string, length: number) => {
    if (description.length <= length) return description;
    return description.substring(0, length) + '...';
  };

  return (
    <div className="bg-white w-full">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-between items-center gap-[10px] px-4 py-[10px] border-b">
          <div className="w-[150px] flex space-x-4">
            <input type="checkbox" />
            <p>{rowIndex + 1}</p>
          </div>
          
          {headers.map((header, headerIndex) => (
            <div key={headerIndex} className="text-center w-[250px]">
              {
                header === "Title" ? (
                <p>{truncateDescription(row[header] as string, 5)}</p>
                ): header === "Description" ? (
                <p>{truncateDescription(row[header] as string, 5)}</p>
              ) : header === "Image_1" ? (
                Array.isArray(row[header]) ? (
                  <img src={(row[header] as string[])[0]} alt="Product" className='w-[40px] h-[40px]' />
                ) : (
                  <img src={row[header] as string} alt="Product" className='w-[40px] h-[40px]' />
                )
              ) : (
                <p>{row[header]}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TableBody;

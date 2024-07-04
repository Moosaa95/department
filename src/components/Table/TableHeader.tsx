import React from 'react';

interface TableHeaderProps {
  headers: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <div className="bg-[#f0f4fe] justify-between w-full px-4 py-[10px] h-[43px] flex items-center gap-[10px] border rounded-md shadow-md">
      <div className="w-[50px] flex space-x-4">
        <input type="checkbox" />
        <p>S/N</p>
      </div>
      {headers.map((header, index) => (
        <div key={index} className="text-center w-[300px]">
          <p>{header}</p>
        </div>
      ))}
    </div>
  );
}

export default TableHeader;

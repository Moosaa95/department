import React, { useState, ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBoxProps {
  placeholder: string; 
  initialSearchText?: string; 
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder, initialSearchText = '' }) => {
  const [searchText, setSearchText] = useState<string>(initialSearchText);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex items-center border rounded-[7px] shadow-sm p-2">
      <FaSearch className="text-[#CDCFD4] mr-2" />
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-1 outline-none"
      />
    </div>
  );
};

export default SearchBox;

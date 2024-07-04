import React from 'react';
import { HomeIcon, UserIcon } from 'assets';
import {SearchBox, Icon} from "components"


const Header: React.FC = () => {
  return (
    <div className="bg-white w-full h-[90px] flex items-center shadow-lg px-4">
      {/* home logo */}
      <div className="flex items-center w-full sm:w-1/6">
        <img src={HomeIcon} alt="Home Icon" className="w-[206px] h-[58px]" />
      </div>

      {/* vertical line */}
      <div className="h-full border-l border-gray-200 mx-4"></div>

      {/* other */}
      <div className="flex items-center justify-between w-full px-5">
        <SearchBox placeholder="Search by patients..." />
        <div className="flex space-x-4 items-center">
          <div>
            <Icon name='bell'  color='gray' />
          </div>
          <div className='flex items-center space-x-4'>
            <div>
              <img src={UserIcon} className='w-[34px] h-[34px]' />
            </div>
            <p>Deko</p>
          </div>
          <div>
            <Icon name='arrowDown' color='gray' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

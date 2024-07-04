import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from 'components';

const Layout: React.FC = () => {
  return (
    <div className="bg-[#F6F6F6] flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full py-4 px-[52px] overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;


import Sidebar from '@/components/common/sidebar';
import React from 'react';


const Layout = ({ children }) => {
  return (
    <div>
        <Sidebar/>
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default Layout;
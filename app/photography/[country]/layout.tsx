import React from 'react';

const Layout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='items-center min-h-screen p-8 sm:px-32 sm:py-20 font-[family-name:var(--font-inter)]'>
      {children}
    </div>
  );
};

export default Layout;

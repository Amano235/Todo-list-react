import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-x1 mx-9'>iTask</span>
      </div>
       <ul className="flex gap-8" > 

        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        
        <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
        </ul> 
    </nav>
  );
};

export default Navbar;

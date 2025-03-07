import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    function pathMathRoute(route){
      if(route === location.pathname){
        return true;
      }
    }
  return (
    <div className='bg-blue-100 border-b shadow-sm sticky top-0 z-50'>
      <header className="flex justify-between items-center px-3 mx-auto">
        <div>
          <img src='src\assets\fishpet-header.png' alt='fishpet_banner' className='h-20 cursor-pointer ml-10' onClick={()=>navigate("/")}/>
        </div>
        <div className='mr-10'>
          <ul className='flex space-x-10'>
            <li className={`cursor-pointer p-2 py-3 text-base font-semibold text-gray-400 border-b-[4px] border-b-transparent ${pathMathRoute("/") && "text-slate-950 border-b-blue-500"}`}
            onClick={()=>navigate("/")}>Home</li>
            <li className={`cursor-pointer p-2 py-3 text-base font-semibold text-gray-400 border-b-[4px] border-b-transparent ${pathMathRoute("/stock") && "text-slate-950 border-b-blue-500"}`}
            onClick={()=>navigate("/stock")}>Stock</li>
            <li className={`cursor-pointer p-2 py-3 text-base font-semibold text-gray-400 border-b-[4px] border-b-transparent ${pathMathRoute("/sign-in") && "text-slate-950 border-b-blue-500"}`}
            onClick={()=>navigate("/sign-in")}>Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

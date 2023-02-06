import React from 'react'

interface Props{
    title : string;
    isActive? : boolean;
}


function NavButton({title , isActive} : Props) {
  return (
    <button 
    className={`${
        isActive && "bg-green-400"
    } hover:bg-green-400 text-white py-2 px-4 rounded font-bold`}
    >

        {title}
    </button>
  );
}

export default NavButton
import React, { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full flex flex-col justify-center xl:items-center mt-5 relative">
      <nav className="w-[50%] z-10 hidden xl:block">
        <ul className="flex justify-between">
          <li className="text-3xl text-white font-semibold font-Montserrat cursor-pointer">
            Home
          </li>
          <li className="text-3xl text-white font-semibold font-Montserrat cursor-pointer">
            Haircuts
          </li>
        </ul>
      </nav>
      <div className="w-[60%] lg:w-[30%] flex items-center justify-start lg:justify-center ml-4 xl:ml-0 lg:gap-5">
        <img
          src="/icons/comb.png"
          alt=""
          className="h-[3rem] transform rotate-90"
        />
        <h2 className="pl-6 text-4xl xl:text-6xl font-bold flex items-center font-Rye relative z-10">
          Al <img src="/icons/barberpole.svg" alt="" className="h-14 w-8" />
          Kapper
        </h2>
        <img
          src="/icons/scissors.svg"
          alt=""
          className="h-[3rem] transform rotate-90"
        />
      </div>
      <div className="xl:hidden h-[4rem] w-[4rem] absolute right-6 cursor-pointer">
        <img
          src="/icons/burger.svg"
          alt=""
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      <div className={`h-[20rem] w-[40%] rounded-sm bg-white absolute right-0 top-[0.5rem] ${showMenu ? 'block' : 'hidden'}`}>
        <div className="text-6xl font-semibold text-right pt-2 pr-2" onClick={() => setShowMenu(false)}>X</div>
        <ul className="h-full w-full flex flex-col gap-1 pt-[2rem]">
          <li className="h-[30%] flex items-center pl-2 text-5xl font-Montserrat bg-[#AB9950]">Home</li>
          <li className="h-[30%] flex items-center pl-2 text-5xl font-Montserrat bg-[#AB9950]">Haircuts</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
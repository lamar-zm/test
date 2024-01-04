function Header (){
  return(
    <header className="w-full flex flex-col justify-center xl:items-center mt-5 relative">
    <nav className="w-[50%] z-10 hidden xl:block">
      <ul className="flex justify-between">
        <li className="text-3xl text-white font-semibold font-Montserrat">
          Home
        </li>
        <li className="text-3xl text-white font-semibold font-Montserrat">
          Haircuts
        </li>
      </ul>
    </nav>
    <h2 className="pl-6 text-3xl xl:text-6xl font-bold flex items-center font-Rye relative z-10">
      Ali Kapper
    </h2>
    <div className="xl:hidden h-[4rem] w-[4rem] absolute right-6  cursor-pointer">
      <img src="/icons/burger.svg" alt="" />
    </div>
  </header>
  )
}
export default Header;
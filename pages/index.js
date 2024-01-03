import hamburgerMenu from "../public/icons/hamburgerMenu.svg";

function Home() {
  
  return (
    <div className="h-screen flex items-center">
      <div className="h-full w-full relative">
        <div
          className="bg-black w-full h-full absolute"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('https://cdn.camberwellshopping.com.au/wp-content/uploads/2021/07/13111806/The-best-barbers-in-Camberwell.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <header className="w-full flex flex-col justify-center items-center mt-2 relative">
          <nav className="w-[50%] z-10 hidden xl:block">
            <ul className="flex justify-between">
              <li className="text-xl text-white font-semibold font-Montserrat">
                Home
              </li>
              <li className="text-xl text-white font-semibold font-Montserrat">
                Haircuts
              </li>
            </ul>
          </nav>
          <h2 className="text-6xl font-bold flex items-center font-Rye relative z-10">
            Ali Kapper
          </h2>
          <div className="xl:hidden h-12 w-12 absolute right-6 bg-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </header>
        <div className="h-[80%] w-[100%] flex items-center justify-center relative z-10">
          <div className="h-[70%] w-[70%] flex flex-col justify-center items-center gap-[25px]">
            <h1 className="text-8xl text-white font-Rye text-center">
              Ali Kapper
            </h1>
            <p className="text-4xl text-white font-Montserrat text-center">
              BarberShop & HairSalon
            </p>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                viewBox="0 0 500 500"
                id="star"
                className="h-10 w-10"
              >
                <path
                  fill="#AB9950"
                  d="M250,25L305.112,148.906C307.229,153.665 310.562,157.782 314.776,160.844C318.99,163.906 323.936,165.803 329.116,166.346L463.988,180.471L363.177,271.175C359.305,274.659 356.419,279.101 354.809,284.055C353.2,289.008 352.923,294.299 354.008,299.393L382.252,432.029L264.835,364.181C260.325,361.575 255.209,360.203 250,360.203C244.791,360.203 239.675,361.575 235.165,364.181L117.748,432.029L145.992,299.393C147.077,294.299 146.8,289.008 145.191,284.055C143.581,279.101 140.695,274.659 136.823,271.175L36.012,180.471L170.884,166.346C176.064,165.803 181.01,163.906 185.224,160.844C189.438,157.782 192.771,153.665 194.888,148.906L250,25Z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                viewBox="0 0 500 500"
                id="star"
                className="h-10 w-10"
              >
                <path
                  fill="#AB9950"
                  d="M250,25L305.112,148.906C307.229,153.665 310.562,157.782 314.776,160.844C318.99,163.906 323.936,165.803 329.116,166.346L463.988,180.471L363.177,271.175C359.305,274.659 356.419,279.101 354.809,284.055C353.2,289.008 352.923,294.299 354.008,299.393L382.252,432.029L264.835,364.181C260.325,361.575 255.209,360.203 250,360.203C244.791,360.203 239.675,361.575 235.165,364.181L117.748,432.029L145.992,299.393C147.077,294.299 146.8,289.008 145.191,284.055C143.581,279.101 140.695,274.659 136.823,271.175L36.012,180.471L170.884,166.346C176.064,165.803 181.01,163.906 185.224,160.844C189.438,157.782 192.771,153.665 194.888,148.906L250,25Z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                viewBox="0 0 500 500"
                id="star"
                className="h-10 w-10"
              >
                <path
                  fill="#AB9950"
                  d="M250,25L305.112,148.906C307.229,153.665 310.562,157.782 314.776,160.844C318.99,163.906 323.936,165.803 329.116,166.346L463.988,180.471L363.177,271.175C359.305,274.659 356.419,279.101 354.809,284.055C353.2,289.008 352.923,294.299 354.008,299.393L382.252,432.029L264.835,364.181C260.325,361.575 255.209,360.203 250,360.203C244.791,360.203 239.675,361.575 235.165,364.181L117.748,432.029L145.992,299.393C147.077,294.299 146.8,289.008 145.191,284.055C143.581,279.101 140.695,274.659 136.823,271.175L36.012,180.471L170.884,166.346C176.064,165.803 181.01,163.906 185.224,160.844C189.438,157.782 192.771,153.665 194.888,148.906L250,25Z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                viewBox="0 0 500 500"
                id="star"
                className="h-10 w-10"
              >
                <path
                  fill="#AB9950"
                  d="M250,25L305.112,148.906C307.229,153.665 310.562,157.782 314.776,160.844C318.99,163.906 323.936,165.803 329.116,166.346L463.988,180.471L363.177,271.175C359.305,274.659 356.419,279.101 354.809,284.055C353.2,289.008 352.923,294.299 354.008,299.393L382.252,432.029L264.835,364.181C260.325,361.575 255.209,360.203 250,360.203C244.791,360.203 239.675,361.575 235.165,364.181L117.748,432.029L145.992,299.393C147.077,294.299 146.8,289.008 145.191,284.055C143.581,279.101 140.695,274.659 136.823,271.175L36.012,180.471L170.884,166.346C176.064,165.803 181.01,163.906 185.224,160.844C189.438,157.782 192.771,153.665 194.888,148.906L250,25Z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                viewBox="0 0 500 500"
                id="star"
                className="h-10 w-10"
              >
                <path
                  fill="#AB9950"
                  d="M250,25L305.112,148.906C307.229,153.665 310.562,157.782 314.776,160.844C318.99,163.906 323.936,165.803 329.116,166.346L463.988,180.471L363.177,271.175C359.305,274.659 356.419,279.101 354.809,284.055C353.2,289.008 352.923,294.299 354.008,299.393L382.252,432.029L264.835,364.181C260.325,361.575 255.209,360.203 250,360.203C244.791,360.203 239.675,361.575 235.165,364.181L117.748,432.029L145.992,299.393C147.077,294.299 146.8,289.008 145.191,284.055C143.581,279.101 140.695,274.659 136.823,271.175L36.012,180.471L170.884,166.346C176.064,165.803 181.01,163.906 185.224,160.844C189.438,157.782 192.771,153.665 194.888,148.906L250,25Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

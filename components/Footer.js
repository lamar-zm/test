function Footer() {
  return (
    <>
      <div className="h-screen lg:h-[60rem] bg-[#595959] flex flex-col gap-5 justify-center items-center">
        <div className="h-full lg:h-[90%] w-[60%]">
          <div className="h-full lg:h-[80%] w-full flex flex-col lg:flex-row items-center justify-center">
            <div className="h-[40%] lg:h-[80%] w-full lg:w-[50%] flex flex-col justify-around items-center">
              <div className="h-[18%] flex flex-col justify-between items-start">
                <h1 className="font-Rye text-6xl text-white ">Ali Kapper</h1>
                <p className=" text-2xl lg:text-xl text-white font-Montserrat text-center">
                  BarberShop & HairSalon
                </p>
              </div>
              <p className="text-2xl lg:text-2xl text-white font-Montserrat text-center ">
                lorem12 lorem12 lorem12 lore12asmk ads admsiasdwi
                <br />
                lorem edsdqdwid wdj 12
              </p>
              <div className="h-[20%] flex flex-col justify-between ">
                <div>
                  <p className="text-2xl font-semibold text-white font-Montserrat flex gap-12">
                    WhatsApp <span className="text-[#AB9950]">07722270660</span>
                  </p>
                  <p className="text-2xl font-semibold text-white font-Montserrat flex gap-12">
                    TelePhone{" "}
                    <span className="text-[#AB9950]">07722270660</span>
                  </p>
                </div>
                <p className="text-2xl font-semibold text-white font-Montserrat flex gap-12">
                  Email-address{" "}
                  <span className="text-[#AB9950]">AliKapper@outlook.com</span>
                </p>
              </div>
            </div>
            <div className="h-[40%] lg:h-full w-full lg:w-[50%] flex items-center">
              <div className="h-[60%] w-full flex flex-col items-center lg:justify-around">
                <p className="text-2xl lg:text-xl font-semibold text-white font-Montserrat">
                  Opening Hours
                </p>
                <div>
                  <p className="text-2xl lg:text-2xl font-semibold text-white font-Montserrat flex gap-12">
                    Monday <span>09:00 - 12:00</span>
                  </p>
                  <p className="text-2xl lg:text-2xl font-semibold text-white font-Montserrat flex gap-12">
                    Monday <span>09:00 - 12:00</span>
                  </p>
                  <p className="text-2xl lg:text-2xl font-semibold text-white font-Montserrat flex gap-12">
                    Monday <span>09:00 - 12:00</span>
                  </p>
                  <p className="text-2xl lg:text-2xl font-semibold text-white font-Montserrat flex gap-12">
                    Monday <span>09:00 - 12:00</span>
                  </p>
                  <p className="text-2xl lg:text-2xl font-semibold text-white font-Montserrat flex gap-12">
                    Monday <span>09:00 - 12:00</span>
                  </p>
                  <p className="text-2xl lg:text-2xl font-semibold text-white font-Montserrat flex gap-12">
                    Monday <span>09:00 - 12:00</span>
                  </p>
                  <p className="text-2xl lg:text-2xl font-semibold text-white font-Montserrat flex gap-12">
                    Monday <span>09:00 - 12:00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full hidden lg:flex justify-center h-[20%]">
            <div className="w-[50%] h-full flex items-center justify-around">
              <img
                src="/icons/facebook.svg"
                alt=""
                className="h-[4rem] lg:h-[8rem]"
              />
              <img
                src="/icons/instagram.svg"
                alt=""
                className="h-[4rem] lg:h-[8rem]"
              />{" "}
            </div>
          </div>
        </div>
        <hr class="line" />
      </div>
    </>
  );
}
export default Footer
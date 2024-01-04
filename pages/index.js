import BarberCard from "../components/Barbers.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

function Home() {
  return (
    <>
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
          <Header/>
          <div className="h-[80%] w-[100%] flex items-center justify-center relative z-10">
            <div className="h-[70%] w-[70%] flex flex-col justify-center items-center gap-[25px]">
              <h1 className="font-Rye text-6xl text-white text-center">
                Ali Kapper
              </h1>
              <p className=" text-2xl lg:text-4xl text-white font-Montserrat text-center">
                BarberShop & HairSalon
              </p>
              <div className="flex gap-2">
                <img src="/icons/star.svg" alt="" className="h-10 w-10" />
                <img src="/icons/star.svg" alt="" className="h-10 w-10" />
                <img src="/icons/star.svg" alt="" className="h-10 w-10" />
                <img src="/icons/star.svg" alt="" className="h-10 w-10" />
                <img src="/icons/star.svg" alt="" className="h-10 w-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[35rem] bg-[#AB9950] flex items-center justify-center">
        <div className="h-[90%] w-[80%] flex flex-col items-center justify-around">
          <p className="font-Rye text-6xl text-[#595959]">Follow Us</p>
          <img src="/icons/star.svg" alt="" className="h-[4rem] lg:h-[8rem]" />
          <p className="text-white text-2xl font-Montserrat text-center">
            Stay updated and follow us on our Social Media!
          </p>
          <div className="h-[4rem] w-[95%] lg:w-[45%] flex items-center justify-between">
            <button className="bg-[#595959] p-3 lg:text-2xl text-white font-Montserrat shadow-md">
              Follow Us On Instgram
            </button>
            <span className="text-white text-2xl lg:text-4xl">&</span>
            <button className="bg-white p-3 lg:text-2xl font-Montserrat shadow-md">
              Follow Us On Facebook
            </button>
          </div>
        </div>
      </div>
      <div className="h-[80rem] lg:h-[60rem] flex flex-col lg:flex-row">
        <div
          className="h-full lg:w-[30%]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('https://assets-global.website-files.com/644a9d9ce529ef8812f82a28/647fb85c69e95444243ef9bd_Henley%27s%20Gentlemen%27s%20Grooming%20-%20Barbershop%20and%20Mens%20Grooming.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="h-full lg:w-[40%]  flex items-center justify-center">
          <div className="h-[90%] lg:h-[70%] w-[85%]   flex flex-col items-center justify-evenly">
            <div className="h-[50%] flex flex-col items-center justify-between">
              <img
                src="/icons/comb.png"
                alt=""
                className="h-[3rem] transform rotate-90"
              />
              <p className="font-Rye text-4xl lg:text-6xl text-[#595959] text-center">
                About Us
              </p>
              <img
                src="/icons/star.svg"
                alt=""
                className="h-[4rem] lg:h-[8rem]"
              />
            </div>
            <div className="flex flex-col justify-between h-[50%]">
              <p className="text-lg lg:text-2xl font-semibold text-center lg:text-left font-Montserrat">
                From childhood, we have embraced this profession. We learned not
                only to do, but to perfect!
              </p>
              <p className="text-lg lg:text-2xl font-semibold text-center lg:text-left font-Montserrat">
                Beginning in the Middle East and continuing to Europe, putting
                together both Western and Eastern styles in their own unique
                ways and with excellent results!
              </p>
              <p className="text-lg lg:text-2xl font-semibold text-center lg:text-left font-Montserrat">
                Want to book an appointment? <br></br>
                call <span className="text-[#AB9950]">050 208 70 59</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="h-full lg:w-[30%]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('https://assets-global.website-files.com/644a9d9ce529ef8812f82a28/647fb85c69e95444243ef9bd_Henley%27s%20Gentlemen%27s%20Grooming%20-%20Barbershop%20and%20Mens%20Grooming.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="h-screen flex flex-col gap-[5rem]">
        <div className="h-[35%] w-full  flex flex-col items-center justify-around">
          <img src="/icons/mustach.svg" alt="" className="h-[6rem]" />
          <p className="font-Rye text-6xl text-[#595959] text-center">
            The Barbers
          </p>
          <img src="/icons/star.svg" alt="" className="h-[4rem] lg:h-[8rem]" />
        </div>
        <div className="h-[65%] w-full flex justify-center items-center">
          <div className="h-full lg:w-[33%]  flex justify-center items-center">
            <BarberCard />
          </div>
          <div className="hidden h-full lg:w-[33%]  xl:flex justify-center items-center">
            <BarberCard />
          </div>
          <div className="hidden h-full lg:w-[33%]  xl:flex justify-center items-center">
            <BarberCard />
          </div>
        </div>
      </div>
      <div
        className="h-screen flex justify-center items-center"
        style={{
          backgroundImage:
            'url("https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71XTMoE9lJL._AC_UF894,1000_QL80_.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[80%] lg:h-[60%] w-[80%] bg-white flex flex-col lg:flex-row">
          <div className="h-full lg:w-[50%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d71542.08443767844!2d44.36761633365026!3d33.344881742159636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2siq!4v1704402778082!5m2!1sen!2siq"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="h-full lg:w-[50%] flex flex-col items-center justify-around">
            <div className="h-[7rem] w-[7rem] lg:h-[10rem] lg:w-[10rem] bg-[#AB9950] rounded-full flex items-center justify-center">
              <img src="/icons/phone.png" alt="" className="h-12 w-12" />
            </div>
            <img
              src="/icons/star.svg"
              alt=""
              className="h-[4rem] lg:h-[8rem]"
            />
            <div className="h-[50%] w-[70%] lg:w-[90%] flex flex-col justify-around">
              <p className="font-Rye text-4xl lg:text-6xl text-[#595959] text-center">
                Book an Appointment
              </p>
              <p className="text-lg lg:text-2xl font-semibold text-center">
                You can walk in at any given time without an appointment, but if
                you want to make sure you have a spot? <br /> Give us a call!.
              </p>
              <p className="text:xl lg:text-2xl text-[#AB9950] font-semibold text-center ">
                050 208 70 59
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;

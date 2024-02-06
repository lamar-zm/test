import Image from "next/image";
import loginIllustration from "../public/assests/loginIllustration.svg";
import logo from '../public/assests/colourdLogo.svg'
import blackAndWhiteLogo from '../public/assests/blackandwhitelogo.svg'

function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between bg-[#F5F7F8]">
        <div className="h-[12%] flex items-center justify-between p-14 bg-white">
          <div>
            <button className="text-2xl custom-font rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg text-white py-6 px-6">
              تسجيل الدخول
            </button>
          </div>
          <div className="w-[6%]">
            <Image
              src={logo}
              alt="Logo"
            />
          </div>
        </div>
        <div className="h-[80%] w-full flex items-center justify-center">
          <div className="h-[90%] w-[80%] flex items-center rounded-3xl bg-white">
            <div className="h-full w-[50%] flex relative">
              <Image
              className="absolute lg:w-[90%] h-[90%] w-[100%] bottom-4 lg:left-4 -left-14 top-12"
                src={loginIllustration}
                alt="Login Illustration"
              />
              <div className="bg-[#E8F2F9] w-[64%] rounded-3xl"></div>
            </div>
            <div className="h-[85%] w-[50%] flex items-center justify-center px-8">
              <div className="h-[80%] w-full  p-3 flex flex-col items-end justify-center gap-[14px]">
                <div className="flex flex-col gap-6 items-end">
                  <p className="text-[#142457] text-5xl font-semibold">تسجيل الدخول</p>
                  <p className="text-[#848A9C] text-3xl font-light font-sans">
                    الرجاء ادخال رقم هاتفك المحمول
                  </p>
                </div>
                <div className="h-[40%] w-full flex flex-col justify-center gap-5">
                  <div className="flex items-center gap-2">
                    <div className="relative h-[80%] flex items-center justify-end w-full">
                      <input
                        className=" h-full w-[88%] border border-[#CAD0D7] rounded-3xl bg-transparent lg:py-8 xl:py-12 px-5 text-2xl outline-none relative"
                        type="tel"
                        name="phone"
                        id="phone-input"
                        dir="rtl"
                        placeholder="ادخل رقم الهاتف"
                      />
                      <span className="right-5 top-2 font-semibold absolute lg:text-sm xl:text-lg text-[#5E6366] ">رقم الهاتف</span>
                    </div>
                    <select className="border border-[#CAD0D7] rounded-3xl text-lg lg:py-6 xl:py-9 outline-none">
                      <option value="whatsapp">
                      whatsapp
                      </option>
                    </select>
                  </div>
                  <div className="flex items-center justify-end gap-4">
                    <label htmlFor="myCheckbox" className="text-2xl text-[#848A9C]">تذكرني</label>
                    <input className="h-12 w-6" type="checkbox" id="myCheckbox" name="myCheckbox" />
                  </div>
                </div>
                <button className="border w-[90%] py-7 bg-gradient-to-r from-pink-500 to-purple-600 shadow-xl text-white text-2xl font-semibold rounded-lg ">ارسل الرمز</button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[4%] bg-[#142457] flex justify-between px-9">
          <div className="flex items-center justify-between w-[15%] ">
            <p className="text-xl text-white">FB</p>
            <p className="text-xl text-white">iN</p>
            <p className="text-xl text-white">IG</p>
            <p className="text-xl text-white">WA</p>
          </div>
          <div className="flex items-center justify-evenly w-[70%]">
            <p className="text-xl text-white">
              جميع الحقوق محفوظة لمنصة ابداع @2024
            </p>
          </div>
          <div className="flex items-center justify-end w-[15%]">
            <Image
              src={blackAndWhiteLogo}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
import Image from "next/image";
import loginIllustration from "../public/assests/login2.png";
import ColourdLogo from '../public/assests/colourdLogo.svg'
import whatsapp from '../public/assests/whatsapp.svg'
import blackAndWhiteLogo from '../public/assests/blackandwhitelogo.svg'

function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <div className="h-[12%] flex items-center justify-between p-12">
          <div>
            <button className="text-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white py-6 px-6 rounded-xl">
              تسجيل الدخول
            </button>
          </div>
          <div className="w-[6%]">
            <Image
              src={ColourdLogo}
              alt="Logo"
            />
          </div>
        </div>
        <div className="h-[80%] w-full flex items-center justify-center">
          <div className="h-[90%] w-[80%] flex items-center rounded-xl">
            <div className="h-full w-[50%] flex relative">
              <Image
                src={loginIllustration}
                alt="Login Illustration"
                layout="fill"
                objectFit="cover"
              />
              <div className="bg-[#E8F2F9] w-[60%]"></div>
            </div>
            <div className="h-[85%] w-[50%] flex items-center justify-center">
              <div className="h-[80%] w-full  p-3 flex flex-col items-end justify-between">
                <div className="flex flex-col gap-6 items-end">
                  <p className="text-[#142457] text-5xl">تسجيل الدخول</p>
                  <p className="text-[#c7c7c7] text-xl font-semibold">
                    الرجاء ادخال رقم هاتفك المحمول
                  </p>
                </div>
                <div className="h-[40%] flex flex-col justify-center gap-8">
                  <div className="flex gap-2">
                    <div className="relative">
                      <input
                        className="border bg-transparent py-8 px-3 w-[449px] text-xl rounded-lg outline-none relative"
                        type="tel"
                        name="phone"
                        id="phone-input"
                        dir="rtl"
                        placeholder="ادخل رقم الهاتف"
                      />
                      <span className="right-3 top-1 absolute text-sm font-bold">رقم الهاتف</span>
                    </div>
                    <select className="py-6 rounded-lg outline-none border">
                      <option value="whatsapp">
                        <p>whatsapp</p>
                      </option>
                    </select>
                  </div>
                  <div className="flex items-center justify-end gap-4">
                    <label htmlFor="myCheckbox" className="text-2xl text-[#7c7c7c]">تذكرني</label>
                    <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                  </div>
                </div>
                <button className="border w-[80%] py-7 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-semibold rounded-lg ">ارسل الرمز</button>
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
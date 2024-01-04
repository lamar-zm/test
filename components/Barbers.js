function Barbers() {
  return (
    <>
      <div className="h-[90%] w-[80%] flex flex-col items-center justify-around ">
        <div
          className="h-[70%] w-[70%]  lg:h-[50%] lg:w-[50%] rounded-full border-[5px] border-[#AB9950]"
          style={{
            backgroundImage: "url('https://3axis.co/user-images/poknvjoj.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="h-[50%] lg:w-[80%]  flex flex-col justify-evenly lg:justify-around">
          <p className="font-Rye text-4xl lg:text-6xl  text-[#595959] text-center">
            Barber A
          </p>
          <p className="text-[#AB9950] text-2xl font-semibold text-center">
            I am a driven and passionate barber. Whatever makes puts a smile on
            your face. That’s the magic of my job.
          </p>
        </div>
      </div>
    </>
  );
}
export default Barbers;

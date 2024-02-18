import React from "react";

const Copyright = () => {
  const year = new Date().getFullYear();
  return <p className="m-0 text-white font-ElMessiri text-xl">جميع الحقوق محفوظة لمنصة إبداع ©  {year} </p>;
};

export default Copyright;

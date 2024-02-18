'use client';
import { RHFTextField } from "@/app/[locale]/hooks/hook-form";
import React from "react";
import Button from "../../Button/Button";
import FormProvider from "@/app/[locale]/hooks/hook-form/FormProvider";

const LoginForm = () => {
  return (
    <article className="flex flex-col items-start justify-center">
      <h1>Login</h1>
      <p>please enter your phone number</p>
      <div>
        <FormProvider>
          <select>
            <option>1</option>
            <option>2</option>
          </select>
          <label htmlFor="phone_number">
            {/* <RHFTextField name={"phone_number"} /> */}
          </label>
          <label htmlFor="remember_me">remember me</label>
          <Button text="send code" />
        </FormProvider>
      </div>
    </article>
  );
};

export default LoginForm;

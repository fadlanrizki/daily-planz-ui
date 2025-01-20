import React from "react";
import Button from "./../../components/button/Button";
import Input from "./../../components/input/Input";
import LoginBanner from "../../assets/login-banner.svg";
import Logo from "../../components/logo/Logo";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <div className="w-100 min-h-screen overflow-hidden">
      <div className="flex items-center">
        <div className="w-1/2">
          <Logo />
          <div className="flex justify-center">
            <img
              className="block h-[50em] w-[50em] border-blue-500"
              src={LoginBanner}
              alt="banner"
            />
          </div>
        </div>
        <div className="w-1/2 h-screen flex justify-center items-center bg-primary">
          <form
            className="w-2/4 max-h-fit flex flex-col gap-y-10 border py-[2em] px-[2em] rounded-md bg-white shadow-lg"
            onSubmit={handleSubmit}
          >
            <h2 className="text-center font-bold text-lg text-primary">
              Sign-In
            </h2>
            <Input
              type="text"
              name="username"
              placeholder="username"
              autoComplete={"off  "}
            />
            <Input type="password" name="password" placeholder="password" />
            <Button type={"submit"}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

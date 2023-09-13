import { useState } from "react";
import loginimg from "../../../assets/young-african-woman.png";
import eye from "../../../assets/eye.svg";
import { Input } from "../../../components/Input";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // Add state for password visibility

  const backgroundImageStyle = {
    backgroundImage: `url(${loginimg})`,
    height: "100%",
    overflow: "hidden",
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-y-hidden">
      <div
        className="bg-cover bg-center h-screen w-full relative object-none object-left"
        style={backgroundImageStyle}
      >
        <h1 className="text-white text-[32px] font-[500] font-bodoni-moda my-[50px] mx-[50px]">
          Ajó Savings
        </h1>
        <div className="absolute bottom-40 inset-x-0 flex items-center justify-center flex-col p-4">
          <h2 className="text-white text-[32px] font-[600] font-Inter mb-5">
            Easy Group Savings
          </h2>
          <p className="text-white text-[16px] font-[600] font-Inter">
            Save collectively with rotating lump sum payouts,
            <br />
            <span className="ml-8">
              eliminating risks of traditional methods.
            </span>
          </p>
        </div>
      </div>
      <div className="items-center flex flex-col my-7 w-full md:mt-[80px] h-screen">
        <h1 className="text-[#088AB2] text-[32px] font-[500] font-bodoni-moda">
          Ajó Savings
        </h1>
        <p className="text-[#101828] text-[16px] font-[600] font-Inter mt-[32px] mb-[64px]">
          Welcome back to Ajó Savings.
        </p>
        <div>
          <form>
            <p className="text-[#101828] text-[16px] font-[600] font-Inter mb-[8px]">
              Email Address
            </p>
            <Input
              className="placeholder:text-[#98A2B3] placeholder:text-[16px] placeholder:font-[400] h-[46px] w-[320px] rounded border pl-7"
              type="Email"
              placeholder="Enter your email"
            />
            <p className="text-[#101828] text-[16px] font-[600] font-Inter mt-[16px] mb-[8px]">
              Password
            </p>
            <div className="relative">
              <Input
                className="placeholder:text-[#98A2B3] placeholder:text-[16px] placeholder:font-[400] h-[46px] w-[320px] rounded border relative password-input pl-7"
                type={passwordVisible ? "text" : "password"}
                placeholder="***************"
              />

              <div
                className="absolute inset-y-0 right-0 mb-7 flex items-center pr-7 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <img src={eye} alt="Toggle password visibility" />
              </div>
            </div>

            <p className="text-[#1570EF] text-[16px] font-[400] font-Inter mt-[16px] mb-[24px]">
              <a href="#" className="underline">
                Forgot Password
              </a>
            </p>

            <div className="mb-4">
              <button className="bg-[#088AB2] py-[12px] px-[16px] w-[320px] rounded text-white text-[16px] font-[500] font-Inter">
                Login
              </button>
            </div>
            <span className="text-[#98A2B3] text-[16px] font-[400] font-Inter mr-4">
              Don't have an account?
            </span>
            <span className="text-[#088AB2] text-[16px] font-[400] font-Inter">
              <a href="#" className="underline">
                Sign Up here
              </a>
            </span>
          </form>
        </div>
        <div className="flex justify-between items-center w-full mt-40 pl-12 pr-12 mx-4">
          <p className="text-black text-[18px] font-[500] font-Inter">
            Privacy Policy
          </p>
          <p className="text-black text-[18px] font-[500] font-Inter">
            Copyright 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

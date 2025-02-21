import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import apple from "../assets/logo/Apple.png"
import facebook from "../assets/logo/Facebook.png";
import google from "../assets/logo/Google.png";
import Linkedin from "../assets/logo/LinkedIn.png";
import logo1 from "../assets/JobLogo.svg";
import rafiki from "../assets/rafiki.svg";

const LoginPage = () => {
  const ValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please insert your email"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password must be at most 15 characters")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .trim()
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      console.log("Login Data:", values);
    },
  });

  return (
 
    <div className="flex gap-18 justify-center items-center min-h-screen bg-white">
      <div className=" flex justify-center items-center w-[740px] h-[800px]">
        <img src={rafiki} alt="Logo" className="w-[654px] bg-[#F2F2F2] h-[800px]" />
      </div>
      <div className="mb-[10px] w-[466px] h-[702px] top-[180px] left-[995px] gap-[42px]">
      <div className="flex flex-col  ">
        <div className="bg-[#0034D1] w-[128px] h-[45px] rounded-lg flex items-center p-2">
          <img src={logo1} alt="Small Logo" className=" " />
        </div>

        
        <h3 className="font-bold text-2xl mt-4">Login to your account</h3>

        <form onSubmit={formik.handleSubmit} className="mt-6 w-[320px] space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-lg"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border rounded-lg"
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

    
          <button
            type="submit"
            className="w-full bg-[#0034D1] text-white p-2 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        <div className="flex items-center gap-4 mt-6 w-full">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex gap-4 mt-4 p-4">
          <img src={google} alt="Google Icon" className="w-[48px]" />
          <img src={apple} alt="Apple Icon" className="w-[48px]"/>
          <img src={facebook} alt="Facebook Icon" className="w-[48px]"/>
          <img src={Linkedin} alt="Linkedin Icon" className="w-[48px]" />
        </div>

      
        <div className="mt-6 text-gray-700">
          <span className="font-medium">Don't have an account?</span>{" "}
          <Link to="/SignUp" className="text-blue-500 font-semibold">
            Create account
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
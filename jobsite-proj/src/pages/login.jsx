import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import apple from "../assets/logo/Apple.png";
import facebook from "../assets/logo/Facebook.png";
import google from "../assets/logo/Google.png";
import Linkedin from "../assets/logo/LinkedIn.png";
import logo1 from "../assets/JobLogo.svg";
import rafiki from "../assets/rafiki.svg";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const Login = () => {
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
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white">
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 p-8">
        <img src={rafiki} alt="Logo" className="w-full max-w-[654px] h-auto" />
      </div>

      <div className="w-full md:w-1/2 p-8 max-w-[466px]">
        <div className="flex flex-col space-y-6">
          <div className="bg-blue-600 w-32 h-12 rounded-lg flex items-center justify-center p-2">
            <img src={logo1} alt="Small Logo" className="w-24" />
          </div>

          <h3 className="text-2xl font-bold">Login to your account</h3>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="relative">
              <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div className="relative">
              <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
              />
              {formik.errors.password && formik.touched.password && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
          <div className="flex items-center gap-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center gap-4">
            <img src={google} alt="Google Icon" className="w-12 cursor-pointer" />
            <img src={apple} alt="Apple Icon" className="w-12 cursor-pointer" />
            <img src={facebook} alt="Facebook Icon" className="w-12 cursor-pointer" />
            <img src={Linkedin} alt="Linkedin Icon" className="w-12 cursor-pointer" />
          </div>

          <div className="text-center text-gray-700">
            <span className="font-medium">Don't have an account?</span>{" "}
            <Link to="/SignUp" className="text-blue-600 font-semibold hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
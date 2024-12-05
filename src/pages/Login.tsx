import React from "react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";

import PathConstants from "../routes/pathConstants";
import { setToken } from "../utils/local-storage-service";
import axiosInstance from "../interceptors/api-response-interceptor";
import { toast } from "react-toastify";

interface LoginFormValues {
  userEmail: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const initialValues: LoginFormValues = { userEmail: "", password: "" };

  const handleFormSubmit = async (formValue: LoginFormValues) => {
    try {
      const response = await axiosInstance.post(
        "/user/login",
        formValue
      );
      const result = await response?.data;

      // Set token to the local storage if login is successful.
      if (result?.status === 200) {
        setToken(result?.data?.accessToken);
        toast.success(result?.message,{
          position: "bottom-right"
        })
        navigate(PathConstants.HOME);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <div className="w-full flex flex-col py-3 p-5 bg-[#0B192C] h-auto md:rounded-md shadow-xl md:w-[500px]">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl text-white font-semibold leading-none">
            Login
          </h1>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          <Form className="flex flex-col gap-y-5">
            <div className="flex flex-col">
              <label htmlFor="userEmail" className="text-white text-xl mb-2">
                Email
              </label>
              <Field
                type="email"
                id="userEmail"
                name="userEmail"
                placeholder="enter your email"
                className="input-field"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-white text-xl mb-2">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="enter your password"
                className="input-field"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="btn-secondary w-full md:w-40 h-10"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;

import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { togglePasswordVisibility } from "../Utils/Utils";

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validation = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not valid"),
    password: yup.string().required("Password is required"),
  });
  async function sendDataToLogin(values) {
    console.log("Working sendDataToLogin");
    setLoading(true);
    let { data } = await axios
      .post(
        `https://nodejstask-4-password-reset-backend.onrender.com/api/user/login/`,
        values
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        setLoading(false);
        setError("Email or password is not valid");
        toast.error("Email or password is not valid", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    setLoading(false);
    console.log(data);
    localStorage.setItem("Auth Token", `${data?.authToken}`);
    localStorage.setItem("userName", `${data?.userName}`);
    toast.success("Welcome To Home Page", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/", { state: { message: "Welcome back" } });
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: sendDataToLogin,
  });
  function changeBgLogin() {
    document.getElementById("change").classList.add("auth");
    console.log("Working changeBgLogin");
  }
  return (
    <>
      <div className="bg-color">
        <div className="container min-vh-100 d-flex align-items-center justify-content-center py-5 py-md-0">
          <div className="content row gx-0">
            <div className="col-md-5">
              <div className="bg-login text-white h-100 d-flex align-items-center justify-content-center flex-column p-5 text-center">
                <h2 className="mb-3 fw-bold">Don't have an Account?</h2>
                <p>Register Here</p>
                <Link to={"/register"}>
                  <button className="btn btn-outline-light  fw-bold rounded-pill py-2 px-4">
                    Register
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-7 bg-light">
              <div className="text-center p-5">
                <img
                  width="128"
                  alt="Apple logo grey"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3d/ICloud.svg"
                  style={{ width: "12rem", marginBottom: "1rem" }}
                />
                {/* <h1 className="text-main fw-bolder">Login Now</h1> */}
                <form onSubmit={formik.handleSubmit}>
                  {error ? <p className="text-danger ">{error}</p> : ""}
                  <input
                    type="email"
                    className="form-control mt-3"
                    placeholder="Enter Email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <p className="fs-small ps-1 text-danger text-start">
                      {formik.errors.email}
                    </p>
                  ) : (
                    ""
                  )}

                  <div className="position-relative">
                    <input
                      id="password-input"
                      type="password"
                      className="form-control mt-3"
                      placeholder="Enter Password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    <i
                      onClick={() => togglePasswordVisibility()}
                      className="fa-regular fa-eye-slash eyeIcon"
                    ></i>
                  </div>
                  {formik.errors.password && formik.touched.password ? (
                    <p className="fs-small ps-1 text-danger text-start">
                      {formik.errors.password}
                    </p>
                  ) : (
                    ""
                  )}
                  <button
                    onClick={() => changeBgLogin()}
                    id="change"
                    type="submit"
                    className="btn-style text-center mt-3 w-100"
                  >
                    {loading ? (
                      <div className="d-flex justify-content-center">
                        <Oval
                          height={30}
                          width={30}
                          color="#0A0A0A"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                          ariaLabel="oval-loading"
                          secondaryColor="white"
                          strokeWidth={2}
                          strokeWidthSecondary={2}
                        />
                      </div>
                    ) : (
                      "Login"
                    )}
                  </button>
                  <div className="mt-4">
                    <Link
                      to="/forgotPassword"
                      style={{
                        textDecoration: "none",
                        color: "#0A0A0A",
                        fontWeight: "bold",
                      }}
                    >
                      Forgot Password
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

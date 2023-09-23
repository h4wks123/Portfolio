import React from "react";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../layouts/navbar.js";

function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      currentAddress: "",
      companyName: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .label("First Name")
        .min(2, "Must be at least 2 characters")
        .max(100, "Must be at most 100 characters")
        .matches(/^[A-Za-z\s]*$/, "Must contain letters and spaces only.")
        .required("First Name is required"),
      lastName: Yup.string()
        .label("Last Name")
        .min(2, "Must be at least 2 characters")
        .max(100, "Must be at most 100 characters")
        .matches(/^[A-Za-z\s]*$/, "Must contain letters and spaces only.")
        .required("Last Name is required"),
      email: Yup.string()
        .label("Email")
        .matches(
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          "Invalid email format"
        )
        .min(2, "Must be at least 2 characters")
        .max(100, "Must be at most 100 characters")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .label("Phone Number")
        .matches(/^\d*$/, "Invalid phone number format")
        .length(11, "Must be 11 digits")
        .required("Phone Number is required"),
      currentAddress: Yup.string()
        .label("Current Address")
        .min(2, "Must be at least 2 characters")
        .max(100, "Must be at most 100 characters")
        .matches(/^[A-Za-z0-9\s.,-]+$/, "Invalid current address format")
        .required("Current Address is required"),
      companyName: Yup.string()
        .label("Company Name")
        .min(2, "Must be at least 2 characters")
        .max(100, "Must be at most 100 characters")
        .matches(/^[A-Za-z\s]*$/, "Invalid characters in Company Name"),
      subject: Yup.string()
        .label("Subject")
        .min(2, "Must be at least 2 characters")
        .max(100, "Must be at most 100 characters")
        .matches(/^[A-Za-z0-9\s.,-]+$/, "Must contain letters and spaces only.")
        .required("Subject is required"),
      message: Yup.string()
        .label("Message")
        .min(2, "Must be at least 2 characters")
        .max(200, "Must be at most 100 characters")
        .matches(/^[A-Za-z0-9\s.,-]+$/, "Invalid characters in Message")
        .required("Message is required"),
    }),
    onSubmit: async (values) => {
      try {

        await formik.validateForm();
        
        formik.resetForm();
        toast.success("Form is submitted successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (errors) {
        toast.error("Please fix your form and try again!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    },
  });

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat relative bg-tier1">
        <Navbar />
        <form onSubmit={formik.handleSubmit}>
          <div className="absolute bg-tier4 w-[47%] h-[84%] left-28 top-20 rounded-lg">
            <div className="relative top-6 left-8 mb-10">
              <span className="text-tier2 font-semibold text-2xl">Lets </span>
              <span className="text-tier3 font-semibold text-2xl">Talk</span>
            </div>

            <div className="relative flex flex-row items-center left-8 mb-3.5">
              <div className="w-[45%] pr-4">
                <h1 className="mb-2 text-tier2 text-base">First Name </h1>
                <input
                  id="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  placeholder="e.g. John"
                  className="tier-3 w-full rounded-sm"
                />
                <div
                  className="text-red-700"
                  style={{
                    visibility:
                      formik.touched.firstName && formik.errors.firstName
                        ? "visible"
                        : "hidden",
                    width: "300px",
                    height: "7px",
                  }}
                >
                  {formik.errors.firstName}
                </div>
              </div>

              <div className="w-[45%] pl-4">
                <h1 className="mb-2 text-tier2 text-base">Last Name </h1>
                <input
                  id="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  placeholder="e.g. Doe"
                  className="tier-3 w-full rounded-sm"
                />
                <div
                  className="text-red-700"
                  style={{
                    visibility:
                      formik.touched.lastName && formik.errors.lastName
                        ? "visible"
                        : "hidden",
                    width: "300px",
                    height: "7px",
                  }}
                >
                  {formik.errors.lastName}
                </div>
              </div>
            </div>

            <div className="relative flex flex-row items-center left-8 mb-3.5">
              <div className="w-[45%] pr-4">
                <h1 className="mb-2 text-tier2 text-base">Email Address </h1>
                <input
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  placeholder="e.g. Johndoe@gmail.com"
                  className="tier-3 w-full rounded-sm"
                />
                <div
                  className="text-red-700"
                  style={{
                    visibility:
                      formik.touched.email && formik.errors.email
                        ? "visible"
                        : "hidden",
                    width: "300px",
                    height: "7px",
                  }}
                >
                  {formik.errors.email}
                </div>
              </div>

              <div className="w-[45%] pl-4">
                <h1 className="mb-2 text-tier2 text-base">Phone Number </h1>
                <input
                  id="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  placeholder="e.g. 09477996377"
                  className="tier-3 w-full rounded-sm"
                />
                <div
                  className="text-red-700"
                  style={{
                    visibility:
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                        ? "visible"
                        : "hidden",
                    width: "300px",
                    height: "7px",
                  }}
                >
                  {formik.errors.phoneNumber}
                </div>
              </div>
            </div>

            <div className="relative flex flex-row items-center left-8 mb-3.5">
              <div className="w-[45%] pr-4">
                <h1 className="mb-2 text-tier2 text-base">Current Address </h1>
                <input
                  id="currentAddress"
                  onChange={formik.handleChange}
                  value={formik.values.currentAddress}
                  placeholder="e.g. 3478 Shearwood Forest Drive"
                  className="tier-3 w-full rounded-sm"
                />
                <div
                  className="text-red-700"
                  style={{
                    visibility:
                      formik.touched.currentAddress &&
                      formik.errors.currentAddress
                        ? "visible"
                        : "hidden",
                    width: "300px",
                    height: "7px",
                  }}
                >
                  {formik.errors.currentAddress}
                </div>
              </div>

              <div className="w-[45%] pl-4">
                <h1 className="mb-2 text-tier2 text-base">Company Name </h1>
                <input
                  id="companyName"
                  onChange={formik.handleChange}
                  value={formik.values.companyName}
                  placeholder="e.g. Company Inc."
                  className="tier-3 w-full rounded-sm"
                />
                <div
                  className="text-red-700"
                  style={{
                    visibility:
                      formik.touched.companyName && formik.errors.companyName
                        ? "visible"
                        : "hidden",
                    width: "300px",
                    height: "7px",
                  }}
                >
                  {formik.errors.companyName}
                </div>
              </div>
            </div>

            <div className="relative flex flex-row items-center justify-center mb-3.5">
              <div className="w-[45%] pr-4">
                <h1 className="mb-2 text-tier2 text-base flex justify-center">
                  Subject
                </h1>
                <input
                  id="subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  placeholder="e.g. Inquiry Subject"
                  className="tier-3 w-full rounded-sm"
                />
                <div
                  className="text-red-700"
                  style={{
                    visibility:
                      formik.touched.subject && formik.errors.subject
                        ? "visible"
                        : "hidden",
                    width: "300px",
                    height: "7px",
                  }}
                >
                  {formik.errors.subject}
                </div>
              </div>
            </div>

            <div className="relative flex flex-row items-center justify-center mb-4">
              <div className="w-[93%] pr-4">
                <h1 className="mb-2 text-tier2 text-base flex justify-center">
                  Message{" "}
                </h1>
                <textarea
                  id="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  placeholder="Your message here..."
                  className="tier-3 w-full h-20 rounded-sm"
                />
                <div
                  className="text-red-700"
                  style={{
                    visibility:
                      formik.touched.message && formik.errors.message
                        ? "visible"
                        : "hidden",
                    width: "300px",
                    height: "7px",
                  }}
                >
                  {formik.errors.message}
                </div>
              </div>
            </div>

            <div className="relative flex flex-row items-center justify-center mb-3.5">
              <button
                type="submit"
                className="bg-tier3 hover:bg-green-400 active:bg-green-400 focus:outline-none focus:ring focus:ring-green-70 
  rounded-md w-36 h-10 drop-shadow-3xl"
              >
                <div className="text-tier2 font-bold text-1xl">SUBMIT</div>
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;

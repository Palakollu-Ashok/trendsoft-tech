import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import Select from "react-select";

import s1 from "../../assets/Home/Home1.jpg";
import { contactForm, googleSheetContactForm } from "../../services/api";
export default function GetStart() {
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm();

  const InquriesData = [
    {
      id: 1,
      name: "Web Accessibility",
    },
    {
      id: 2,
      name: "Document Accessibility",
    },
    {
      id: 3,
      name: "InDesign Accessibility",
    },

    {
      id: 7,
      name: "Testing",
    },
    {
      id: 8,
      name: "Cyber Security",
    },
  ];

  const [fileUploaded, setFileUploaded] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [countryCodeError, setCountryCodeError] = useState("");

  const countryCodes = [
    { label: "+91 - India", value: "+91" },
    { label: "+1 - United States", value: "+1" },
    { label: "+44 - United Kingdom", value: "+44" },
    { label: "+1 - Canada", value: "+1" },
    { label: "+61 - Australia", value: "+61" },
  ];

  useEffect(() => {
    if (fileUploaded) {
      const timeout = setTimeout(() => {
        setFileUploaded(false);
      }, 50000); // 5 seconds
      return () => clearTimeout(timeout);
    }
  }, [fileUploaded]);

  const validateCountryCode = (code) => {
    if (!code) {
      setCountryCodeError("Country Code is required");
    } else {
      setCountryCodeError("");
    }
  };

  const onSubmit = (data) => {
    data.phoneNumber = selectedCountryCode + " " + data.phoneNumber;

    googleSheetContactForm(data, setFileUploaded(true))
      .then((res) => {
        if (res.status === 200) {
          contactForm(data).then((res) => {
            console.log("contact form res ", res);
            setFileUploaded(false);
            alert("Form Submitted Successfully");
            reset();
          });
        }
      })
      .catch((err) => {
        alert("Form SUbmission Failed!");
      });
  };

  return (
    <div>
      <img src={s1} alt="" className="md:h-[70vh] h-[40vh] object-cover" />
      <div className="h-full  xl:px-[330px] lg:px-[150px] sm:px-[28px] md:px-[50px] px-5 xl:-translate-y-30 md:-translate-y-24 -translate-y-14">
        <div className="w-full   rounded-2xl  bg-white md:p-10 sm:p-5 p-3 shadow-xl">
          <div className="space-y-2 py-5 pb-20">
            <h2 className="text-center">Contact GrackleDocs</h2>
            <p className="text-center">We'd love to hear from you!</p>
          </div>
          <form action="" className="px-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:grid grid-cols-2 md:gap-8 gap-3 sm:space-y-0 space-y-4 lg:py-0 py-3">
              <div className="grid space-y-2">
                <label htmlFor="Name" className="px-1">
                  Name <span className="text-red">*</span>
                </label>
                <input
                  placeholder="Name"
                  id="Name"
                  name="Name"
                  type="text"
                  aria-describedby="Name_error"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[a-zA-Z ]+$/,
                      message: "Please enter valid name",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("name");
                  }}
                  className={`border py-[5px]  border-[#d2d2d2] px-1 rounded-[3px] focus:outline-none focus:ring-1 focus:ring-red ${
                    errors.name ? "border-[#EB1414]" : ""
                  }`}
                />
                {errors.name && (
                  <small className="text-[#EB1414]" id="Name_error">
                    {errors.name.message}
                  </small>
                )}
              </div>

              <div className="grid  space-y-2">
                <label htmlFor="Email" className="px-1">
                  Email <span className="text-red">*</span>
                </label>
                <input
                  type="text"
                  aria-describedby="Email_error"
                  id="Email"
                  name="Email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter valid email address",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("email");
                  }}
                  className={`border py-[5px]  border-[#d2d2d2] px-1 rounded-[3px] focus:outline-none focus:ring-1 focus:ring-red ${
                    errors.email ? "border-[#EB1414]" : ""
                  }`}
                />
                {errors.email && (
                  <small className="text-[#EB1414]" id="Email_error">
                    {errors.email.message}
                  </small>
                )}
              </div>

              <div className="grid space-y-2">
                <label htmlFor="countryCode" className="px-1">
                  Country Code <span className="text-[#EB1414]">*</span>
                </label>
                <Select
                  inputId="countryCode"
                  name="countryCode"
                  aria-describedby="CountryCode_error"
                  className={`focus:outline-none focus:ring-1 focus:ring-red  ${
                    countryCodeError ? "border-[#EB1414]" : ""
                  }`}
                  options={countryCodes}
                  value={countryCodes.find(
                    (code) => code.label === selectedCountryCode
                  )}
                  onChange={(selectedOption) =>
                    setSelectedCountryCode(selectedOption.label)
                  }
                  onBlur={() => validateCountryCode(selectedCountryCode)}
                  isSearchable
                  placeholder="select country code"
                />
                {countryCodeError && (
                  <small className="text-[#EB1414]" id="CountryCode_error">
                    {countryCodeError}
                  </small>
                )}
              </div>

              <div className="grid space-y-2">
                <label htmlFor="Phone_Number" className="px-1">
                  Phone Number <span className="text-red">*</span>
                </label>
                <input
                  placeholder="Phone Number"
                  name="Phone_Number"
                  type="text"
                  id="Phone_Number"
                  aria-describedby="Phone_Number_error"
                  className={`border py-[5px]  border-[#d2d2d2] px-1 rounded-[3px] focus:outline-none focus:ring-1 focus:ring-red ${
                    errors.phoneNumber ? "border-[#EB1414]" : ""
                  }`}
                  {...register("phoneNumber", {
                    required: "Phone Number is required",
                    pattern: {
                      value: /^\d*(?:\.\d{1,2})?$/,
                      message: "Please enter valid Phone Number",
                    },
                    maxLength: {
                      value: 10,
                      message: "Please enter 10 Digit Phone Number",
                    },
                    minLength: {
                      value: 10,

                      message: "Please enter  10 Digit Phone Number",
                    },
                  })}
                  onKeyUp={() => {
                    trigger("phoneNumber");
                  }}
                />
                {errors.phoneNumber && (
                  <small className="text-[#EB1414]" id="Phone_Number_error">
                    {errors.phoneNumber.message}
                  </small>
                )}
              </div>

              <div className="grid space-y-2 col-span-2">
                <label htmlFor="Company_Name" className="px-1">
                  Company Name
                </label>
                <input
                  type="text"
                  aria-describedby="Company_Name_error"
                  id="Company_Name"
                  name="Company_Name"
                  placeholder="Enter your Company name"
                  className={`border py-[5px]  border-[#d2d2d2] px-1 rounded-[3px] focus:outline-none focus:ring-1 focus:ring-red ${
                    errors.companyName ? "border-[#EB1414]" : ""
                  }`}
                  {...register("companyName", {
                    required: "Company Name is required",
                  })}
                  onKeyUp={() => {
                    trigger("companyName");
                  }}
                />
                {errors.companyName && (
                  <small className="text-[#EB1414]" id="Company_Name_error">
                    {errors.companyName.message}
                  </small>
                )}
              </div>

              <div className="grid col-span-2 space-y-2">
                <label htmlFor="Enquiries" className="px-1">
                  Select Purpose Of Contact<span className="text-red">*</span>
                </label>
                <select
                  aria-describedby="Enquiries_error"
                  id="Enquiries"
                  name="Enquiries"
                  className={`border py-[5px]  border-[#d2d2d2] px-1 rounded-[3px] focus:outline-none focus:ring-1 focus:ring-red ${
                    errors.enquiries ? "border-[#EB1414]" : ""
                  }`}
                  {...register("enquiries", {
                    required: "Select Enquiries is required",
                  })}
                  onKeyUp={() => {
                    trigger("enquiries");
                  }}
                >
                  <option value="">Select Enquiries</option>
                  {InquriesData.map((c, idx) => (
                    <option value={c.InquriesData} key={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>

                {errors.enquiries && (
                  <small className="text-[#EB1414]" id="Enquiries_error">
                    {errors.enquiries.message}
                  </small>
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting || fileUploaded}
              aria-live="polite"
              aria-atomic="true"
              className="bg-blue py-3 rounded-full px-10 mt-5 text-white font-semibold tracking-wide uppercase hover:text-dark hover:bg-white hover:border-dark border duration-300"
            >
              {isSubmitting || fileUploaded ? "Please wait..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

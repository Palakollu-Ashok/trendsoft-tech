import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { contactForm, googleSheetContactForm } from "../../services/api";
import Select from "react-select";

export default function ContactUs() {
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
      id: 4,
      name: "Testing",
    },
    {
      id: 5,
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

  const validateCountryCode = (code) => {
    if (!code) {
      setCountryCodeError("Country Code is required");
    } else {
      setCountryCodeError("");
    }
  };

  useEffect(() => {
    if (fileUploaded) {
      const timeout = setTimeout(() => {
        setFileUploaded(false);
      }, 50000);
      return () => clearTimeout(timeout);
    }
  }, [fileUploaded]);

  const onSubmit = (data) => {
    data.phoneNumber = selectedCountryCode + " " + data.phoneNumber;

    googleSheetContactForm(data, setFileUploaded(true))
      .then((res) => {
        if (res.status === 200) {
          setFileUploaded(false);
          alert("Form Submitted Successfully");
          reset();
          contactForm(data).then((res) => {
            console.log("contact form res ", res);
          });
        }
      })
      .catch((err) => {
        alert("Form submission Failed!");
        console.log(err);
      });
  };

  return (
    <div className="md:px-6 xl:px-10 3xl:px-16 px-3 pt-32 h-full">
      <h2 className="py-3 text-center md:pb-10 pb-5">Get In Touch</h2>

      <div className="lg:flex lg:gap-10 w-full h-full lg:space-y-0 space-y-3 sm:space-y-6 pb-5">
        <div className="lg:w-1/2 flex lg:grid w-full gap-3 p-0.5">
          <div className="lg:h-full h-[200px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3827.0413003580547!2d80.57439567466332!3d16.422728729878514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTrendsoft%20Technologies%20Pvt%20Ltd%2C%20%23301-302%2C%20NRT%20Tech%20Park%2C%20Mangalagiri%20Bypass%2C%20Amaravathi%2C%20Andhra%20Pradesh%20522503!5e0!3m2!1sen!2sin!4v1722507946520!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="lg:h-full h-[200px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.8340835142151!2d78.40170932789304!3d17.491020900849563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91949a0322e3%3A0x42ea9c96fc8be8b8!2sMIG-37%2C%20K%20P%20H%20B%20Phase%201%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1722572636071!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="w-full lg:w-1/2  lg:px-5 bg-gray-100 rounded-2xl xl:py-10 sm:py-5 py-7 ">
          <form action="" className="px-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:grid grid-cols-2 md:gap-8 gap-3 sm:space-y-0 space-y-4 lg:py-0 py-3">
              <div>
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
                </div>
                {errors.name && (
                  <small className="text-[#EB1414]" id="Name_error">
                    {errors.name.message}
                  </small>
                )}
              </div>

              <div>
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
                </div>
                {errors.email && (
                  <small className="text-[#EB1414]" id="Email_error">
                    {errors.email.message}
                  </small>
                )}
              </div>

              <div>
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
                </div>

                {countryCodeError && (
                  <small className="text-[#EB1414]" id="CountryCode_error">
                    {countryCodeError}
                  </small>
                )}
              </div>
              <div>
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
                </div>

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
              className="bg-blue py-3 rounded-full px-10 mt-5 text-white font-semibold tracking-wide uppercase hover:text-dark hover:bg-white hover:border-dark border duration-300 focus:bg-light focus:text-dark"
            >
              {isSubmitting || fileUploaded ? "Please wait..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

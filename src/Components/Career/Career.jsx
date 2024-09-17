import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Img from "../../assets/Home/Career.jpg";
export default function Career() {
  const [fileUploaded, setFileUploaded] = useState(false);

  const position = [
    {
      id: 1,
      position: "Fresher",
    },
    {
      id: 2,
      position: "Epub Accessibility Developer",
    },
    // {
    //   id: 3,
    //   position: "Business Development",
    // },
  ];

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (fileUploaded) {
      const timeout = setTimeout(() => {
        setFileUploaded(false);
      }, 50000);
      return () => clearTimeout(timeout);
    }
  }, [fileUploaded]);

  const onSubmit = async (data) => {
    setFileUploaded(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("position", data.position);
    formData.append("file", data.file[0]);
    try {
      const response = await axios.post(
        "https://trendsofttech-forms.onrender.com/careers-form",
        formData
      );
      if (response.status === 200) {
        setFileUploaded(false);
        alert("Application submitted successfully");
        window.location.reload();
      } else {
        console.log("Failed to send application");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="md:px-6 xl:px-10 3xl:px-16 px-3">
      <div className="  h-full">
        <h2 className="py-3 text-center md:pb-10 pb-5">Get In Touch</h2>

        <div className="lg:flex lg:gap-10 w-full h-full md:space-y-0 space-y-3 pb-5">
          <div className="lg:w-1/2 flex lg:grid w-full gap-3 p-0.5">
            <div className="flex justify-center">
              <img src={Img} alt="Image Not Found" className="h-[500px]" />
            </div>
          </div>

          <div className="w-full lg:w-1/2  lg:px-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-6 py-6 bg-gray-200 "
            >
              <div className=" md:gap-8 gap-3  space-y-4 lg:py-0 py-3 md:px-4">
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
                    className={`border py-2  border-gray-400  px-1 focus:outline-none focus:ring-1 focus:ring-red ${
                      errors.name ? "border-[#EB1414]" : ""
                    }`}
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
                  />

                  {errors.name && (
                    <small className="text-[#EB1414]" id="Name_error">
                      {errors.name.message}
                    </small>
                  )}
                </div>
                <div className="grid space-y-2">
                  <label htmlFor="Phone_Number" className="px-1">
                    Phone Number <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    name="Phone_Number"
                    id="Phone_Number"
                    placeholder="Phone Number"
                    aria-describedby="Phone_Number_error"
                    minLength={10}
                    className={`border py-2  px-1 border-gray-400  focus:outline-none focus:ring-1 focus:ring-red ${
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

                <div className="grid space-y-2">
                  <label htmlFor="Email" className="px-1">
                    Email <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="Email"
                    name="Email"
                    placeholder="Email"
                    aria-describedby="Email_career_error"
                    className={`border py-2  px-1 border-gray-400 focus:outline-none focus:ring-1 focus:ring-red ${
                      errors.email ? "border-[#EB1414]" : ""
                    }`}
                    {...register("email", {
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                      required: "Email is required",
                    })}
                    onKeyUp={() => {
                      trigger("email");
                    }}
                  />
                  <span id="Email_career" className="d-none con-error"></span>
                  {errors.email && (
                    <small className="text-[#EB1414]" id="Email_career_error">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <div className="grid  space-y-2">
                  <label htmlFor="Select_position" className="px-1">
                    Experince/Fresher<span className="text-red">*</span>
                  </label>
                  <select
                    name="Select_position"
                    id="Select_position"
                    aria-describedby="Select_position_error"
                    className=" text-[14px] h-10  pl-2 border border-gray-500"
                    {...register("position", {
                      required: "Position is required",
                    })}
                    onKeyUp={() => {
                      trigger("position");
                    }}
                  >
                    <option value="">Select position</option>
                    {position.map((c) => (
                      <option value={c.position} key={c.id}>
                        {c.position}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <small
                      className="text-[#EB1414]"
                      id="Select_position_error"
                    >
                      {errors.position.message}
                    </small>
                  )}
                </div>

                {/* <div className="grid">
                  <label htmlFor="file-upload" className="px-1">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                    aria-describedby="file-upload_error"
                    className="border border-gray-400  md:py-2 py-1  px-1 focus:outline-none focus:ring-1 focus:ring-red"
                    {...register("file", {
                      required: "File Upload is required",
                    })}
                    onKeyUp={() => {
                      trigger("file");
                    }}
                  />
                  {errors.file && (
                    <small className="text-[#EB1414]" id="file-upload_error">
                      {errors.file.message}
                    </small>
                  )}
                </div> */}
                <div className="grid">
                  <label className="text-sm font-medium text-gray-700">
                    Upload CV/Resume <span className="text-red text-lg">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                      aria-describedby="file-upload_error"
                      className="bg-white h-10 opacity-0 absolute z-10 w-full cursor-pointer"
                      {...register("file", {
                        required: "File Upload is required",
                      })}
                      onKeyUp={() => {
                        trigger("file");
                      }}
                    />
                    <div className="bg-white h-10 border border-gray-400 pl-2 flex items-center cursor-pointer">
                      <span className="text-gray-600">Choose File</span>
                    </div>
                    {errors.file && (
                      <small className="text-[#EB1414]" id="file-upload_error">
                        {errors.file.message}
                      </small>
                    )}
                  </div>
                </div>
              </div>
              <button
                disabled={isSubmitting || fileUploaded}
                type="submit"
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
    </div>
  );
}

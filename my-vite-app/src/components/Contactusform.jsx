import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function Contactusform() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State variables for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    interest: [],
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        interest: checked
          ? [...prevData.interest, value]
          : prevData.interest.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // const sheetBestUrl = "https://api.sheetbest.com/sheets/ce48c548-497d-4875-94bf-d0fde7864f43"; // Replace with your SheetBest API URL

    // fetch(sheetBestUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //     alert("Form submitted successfully!");
    //     setFormData({
    //       name: "",
    //       email: "",
    //       phoneNumber: "",
    //       interest: [],
    //       message: "",
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     alert("Something went wrong!");
    //   });

    // setFormData({
    //   name: "",
    //   email: "",
    //   phoneNumber: "",
    //   interest: [],
    //   message: "",
    // })
toast.success("Form Submitted");
  };

  return (
    <div className="flex justify-center sm:py-12 items-center min-h-screen bg-gradient-to-tr from-[#000428] to-[#004e92] p-2 sm:p-4 py-4">
      <div className="bg-white p-2 py-3 sm:p-8 rounded-lg shadow-2xl w-full max-w-4xl">
        <h3 className="text-3xl font-bold mb-4 relative inline-block border-b-4 pb-2">
          ENQUIRY FORM
        </h3>
        <form onSubmit={handleSubmit} className="sm:space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="input input-bordered w-full"
                pattern="[0-9]{10}"
                placeholder="Enter Phone Number"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">I am interested in:</label>
            <div className="space-y-2">
              {[
                "Refer a Student",
                "Donate to Trust",
                "Open Enrollment",
                "Become a Member",
              ].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="interest"
                    value={option}
                    checked={formData.interest.includes(option)}
                    onChange={handleChange}
                    className="checkbox"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered mb-2 w-full"
              rows="3"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 text-xl bg-black text-white font-bold rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

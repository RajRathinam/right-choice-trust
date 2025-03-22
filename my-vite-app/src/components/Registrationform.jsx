import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function RegistrationForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for each input field
  const [studentName, setStudentName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [community, setCommunity] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [district, setDistrict] = useState("");
  const [studyingGroup, setStudyingGroup] = useState("");
  const [courseWillingness, setCourseWillingness] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // const formData = {
    //   studentName,
    //   mobileNumber,
    //   whatsappNumber,
    //   age,
    //   dob,
    //   community,
    //   schoolName,
    //   district,
    //   studyingGroup,
    //   courseWillingness,
    // };
    
    // fetch("https://api.sheetbest.com/sheets/59c182a6-e4cc-48d1-b0c0-e695b06879fe", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json()) // Convert response to JSON
    //   .then((data) => console.log("Success:", data)) // Log response
    //   .catch((error) => console.error("Error:", error));

    //   setAge('');
    //   setCommunity('');
    //   setCourseWillingness('');
    //   setDistrict('');
    //   setDob('');
    //   setMobileNumber('');
    //   setSchoolName('');
    //   setStudentName('');
    //   setStudyingGroup('');
    //   setWhatsappNumber('');
toast.success("Form Submitted");
  };

  return (
    <div className="flex bg-white justify-center items-center sm:py-10 min-h-screen bg-gradient-to-tr from-[#000428] to-[#004e92] p-2 py-4">
      <div className="bg-white p-2 sm:p-8 rounded-lg shadow-2xl w-full max-w-4xl">
        <h3 className="sm:text-3xl text-lg mx-auto font-bold mb-4 relative inline-block border-b-4 pb-2">
          STUDENT REGISTRATION FORM
        </h3>
        <form onSubmit={handleSubmit} className="sm:space-y-4">
          <div>
            <label className="block uppercase text-sm sm:text-lg text-gray-600">Student Name</label>
            <input
              type="text"
              name="studentName"
              className="input input-bordered w-full"
              placeholder="Enter Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 mt-0 md:grid-cols-2 gap-2 sm:gap-4">
            <div>
              <label className="block uppercase text-sm sm:text-lg text-gray-600">Mobile Number</label>
              <input
                type="tel"
                name="mobileNumber"
                className="input input-bordered w-full"
                pattern="[0-9]{10}"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block uppercase text-sm sm:text-lg text-gray-600">Whatsapp Number</label>
              <input
                type="tel"
                name="whatsappNumber"
                className="input input-bordered w-full"
                pattern="[0-9]{10}"
                placeholder="Enter Whatsapp Number"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
            <div>
              <label className="block uppercase text-sm sm:text-lg text-gray-600">Age</label>
              <input
                type="number"
                name="age"
                className="input input-bordered w-full"
                min="1"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block uppercase text-sm sm:text-lg text-gray-600">Date of Birth</label>
              <input
                type="date"
                name="dob"
                className="input input-bordered w-full"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
            <div>
              <label className="block uppercase text-sm sm:text-lg text-gray-600">Community</label>
              <select
                name="community"
                className="select select-bordered w-full"
                value={community}
                onChange={(e) => setCommunity(e.target.value)}
                required
              >
                <option disabled value="">Select Community</option>
                <option value="OC">OC</option>
                <option value="BC">BC</option>
                <option value="BCM">BCM</option>
                <option value="MBC & DNC">MBC & DNC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>
            <div>
              <label className="block uppercase text-sm sm:text-lg text-gray-600">School Name</label>
              <input
                type="text"
                name="schoolName"
                className="input input-bordered w-full"
                placeholder="Enter School Name"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
            <div>
              <label className="block uppercase text-sm sm:text-lg text-gray-600">District</label>
              <input
                type="text"
                name="district"
                className="input input-bordered w-full"
                placeholder="Enter District"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block uppercase text-sm sm:text-lg text-gray-600">Studying Group</label>
              <select
                name="studyingGroup"
                className="select select-bordered w-full"
                value={studyingGroup}
                onChange={(e) => setStudyingGroup(e.target.value)}
                required
              >
                <option disabled value="">Select Studying Group</option>
                <option value="PCMB">PCMB</option>
                <option value="PCMC">PCMC</option>
                <option value="PCBC">PCBC</option>
                <option value="PCBZ">PCBZ</option>
                <option value="M-VOC">M-VOC</option>
                <option value="ARTS">ARTS</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block uppercase text-sm sm:text-lg text-gray-600">Course Willingness</label>
            <select
              name="courseWillingness"
              className="select select-bordered w-full"
              value={courseWillingness}
              onChange={(e) => setCourseWillingness(e.target.value)}
              required
            >
              <option disabled value="">Select Course</option>
              <option value="Medical">Medical</option>
              <option value="Engg">Engg</option>
              <option value="Law">Law</option>
              <option value="Agri">Agri</option>
              <option value="Fisheries">Fisheries</option>
              <option value="Arts">Arts</option>
              <option value="Poly">Poly</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-full py-2 mt-2 sm:mt-0 text-xl text-white font-bold rounded-lg" style={{ background: "linear-gradient(90deg, #667eea, #764ba2)" }}>
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

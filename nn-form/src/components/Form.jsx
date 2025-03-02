import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    dob: "",
    education: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const toastLoading = toast.loading("Submitting...");
      await axios.post(`${VITE_SERVER_URL}/api/form`, formData);
      console.log(formData);
      toast.dismiss(toastLoading);
      toast.success("Form submitted successfully!", {
        duration: 3000,
        position: "bottom-center",
        style: {
          background: "#333",
          color: "#fff",
        },
      });

      setFormData({
        name: "",
        email: "",
        gender: "",
        dob: "",
        education: "",
        phone: "",
        address: "",
        message: "",
      });
    } catch (error) {
      toast.dismiss();
      toast.error("Error submitting form", {
        duration: 5000,
        position: "bottom-center",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      console.error("Error submitting form", error);
    }
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = today.toISOString().split("T")[0];
    return maxDate;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white/30 backdrop-blur-lg  rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        User Information Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="w-full p-1">
          <label htmlFor="name" className="block font-medium text-gray-800">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-1 border rounded-lg shadow-sm shadow-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
            required
          />
        </div>

        <div className="w-full p-1">
          <label htmlFor="email" className="block font-medium text-gray-800">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-1 border rounded-lg shadow-sm shadow-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
            required
          />
        </div>

        <div className="w-full p-1">
          <label htmlFor="dob" className="block font-medium text-gray-800">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            placeholder="Enter your date of birth"
            value={formData.dob}
            onChange={handleChange}
            max={getMaxDate()}
            className="w-full p-1 border rounded-lg shadow-sm shadow-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 text-gray-800"
            required
          />
        </div>

        <div className="w-full p-1">
          <label htmlFor="gender" className="block font-medium text-gray-800">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-1 border rounded-lg shadow-sm shadow-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
            required
          >
            <option value="" disabled hidden>
              Select Gender
            </option>
            <option
              value="Male"
            >
              Male
            </option>
            <option
              value="Female"
            >
              Female
            </option>
            <option
              value="Other"
            >
              Other
            </option>
          </select>
        </div>

        <div className="w-full p-1">
          <label htmlFor="phone" className="block font-medium text-gray-800">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-1 border rounded-lg shadow-sm shadow-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
            required
          />
        </div>

        <div className="w-full p-1">
          <label
            htmlFor="education"
            className="block font-medium text-gray-800"
          >
            Education
          </label>
          <input
            type="text"
            name="education"
            placeholder="Enter your highest qualification"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-1 border rounded-lg shadow-sm shadow-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
            required
          />
        </div>

        <div className="w-full p-1">
          <label htmlFor="address" className="block font-medium text-gray-800">
            Address
          </label>
          <textarea
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-1 border rounded-lg shadow-sm shadow-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
            rows="3"
            required
          ></textarea>
        </div>

        <div className="w-full p-1">
          <label htmlFor="message" className="block font-medium text-gray-800">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-1 border rounded-lg shadow-sm shadow-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
            rows="3"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer transition ease-in-out duration-300 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

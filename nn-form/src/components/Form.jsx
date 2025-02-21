import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const SERVER_URL = import.meta.env.SERVER_URL;
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
      await axios.post(`{${SERVER_URL}/api/form}`, formData);
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

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-200/30 shadow-sm shadow-gray-400 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        User Information Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-800">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-800">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="dob" className="block font-medium text-gray-800">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
        </div>

        <div>
          <label htmlFor="gender" className="block font-medium text-gray-800">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="phone" className="block font-medium text-gray-800">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
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
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block font-medium text-gray-800">
            Address
          </label>
          <textarea
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="2"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="message" className="block font-medium text-gray-800">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  registrationStudent,
  studentListById,
  updateStudent,
} from "../userApi/apiRequest";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  let navigate = useNavigate();
  let [UpdateID, SetUpdateID] = useState(null);
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    email: "",
    phone: "",
    admissionDate: "",
    courses: "",
  });

  useEffect(() => {
    (async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      SetUpdateID(id);
      if (id !== null) {
        await FillForm(id);
      }
    })();
  }, []);

  const FillForm = async (id) => {
    let res = await studentListById(id);
    setFormData({
      firstName: res["firstName"],
      lastName: res["lastName"],
      gender: res["gender"],
      dateOfBirth: res["dateOfBirth"],
      nationality: res["nationality"],
      address: res["address"],
      email: res["email"],
      phone: res["phone"],
      admissionDate: res["admissionDate"],
      courses: res["courses"],
    });
  };

  const handleChange = (name, value) => {
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.firstName.length === 0) {
      toast.error("First Name Required !");
    } else if (formData.lastName.length === 0) {
      toast.error("Last Name Required !");
    } else if (formData.gender.length === 0) {
      toast.error("Gender Required !");
    } else if (formData.dateOfBirth.length === 0) {
      toast.error("Date Of Birth Required !");
    } else if (formData.nationality.length === 0) {
      toast.error("Nationality Required !");
    } else if (formData.email.length === 0) {
      toast.error("Email Required !");
    } else if (formData.phone.length === 0) {
      toast.error("Phone Required !");
    } else if (formData.admissionDate.length === 0) {
      toast.error("Admission Date Required !");
    } else if (formData.courses.length === 0) {
      toast.error("Course Required !");
    } else {
      if (UpdateID === null) {
        try {
          let res = await registrationStudent(formData);
          if (res) {
            toast.success("Request Completed");
            navigate("/");
          } else {
            toast.error("Create Request Fail");
          }
        } catch (error) {
          return false;
        }
      } else {
        let res = await updateStudent(formData, UpdateID);
        if (res) {
          toast.success("Updated Completed");
          navigate("/");
        } else {
          toast.error("Update Request Fail");
        }
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-600">
        Registration Form
      </h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-600"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-600"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="nationality"
              className="block text-sm font-medium text-gray-600"
            >
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={(e) => handleChange("nationality", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <textarea
              rows="1"
              cols="10"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="admissionDate"
              className="block text-sm font-medium text-gray-600"
            >
              Admission Date
            </label>
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={(e) => handleChange("admissionDate", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-600"
            >
              Course
            </label>
            <input
              type="text"
              id="courses"
              name="courses"
              value={formData.courses}
              onChange={(e) => handleChange("courses", e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full	"
          >
            Submit
          </button>
        </div>
      </form>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default RegistrationForm;

import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    father: "",
    mother: "",
    mobile: "",
    college: "",
    course: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onSubmit(formData);
  };

  return (
    <form onSubmit={submitForm} style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="father" placeholder="Father's Name" value={formData.father} onChange={handleChange} />
      <input name="mother" placeholder="Mother's Name" value={formData.mother} onChange={handleChange} />
      <input name="mobile" type="tel" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
      <input name="college" placeholder="College Name" value={formData.college} onChange={handleChange} />
      <input name="course" placeholder="Course" value={formData.course} onChange={handleChange} />
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
    </form>
  );
};

export default Form;


import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    
    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: "400px", margin: "50px auto", padding: "30px", border: "1px solid #000000", borderRadius: "10px", boxShadow: "0 4px 6px rgba(113, 113, 113, 0.1)", backgroundColor: "#fff", color: "#333" }}>
      <h2 style={{ textAlign: "center", color: "black"}}>Registration Form</h2>
      
      {submitted && <p style={{ color: "green", textAlign: "center", fontWeight: "bold" }}>Form submitted successfully!</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
          {errors.name && <small style={{ color: "red", display: "block", marginTop: "5px" }}>{errors.name}</small>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
          {errors.email && <small style={{ color: "red", display: "block", marginTop: "5px" }}>{errors.email}</small>}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: "100%", padding: "10px", boxSizing: "border-box", border: "1px solid #ccc", borderRadius: "4px" }} />
          {errors.password && <small style={{ color: "red", display: "block", marginTop: "5px" }}>{errors.password}</small>}
        </div>

        <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
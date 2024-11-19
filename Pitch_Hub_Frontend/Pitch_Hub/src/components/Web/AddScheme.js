// src/components/AddSchemeForm.js
import React, { useState } from "react";

function AddSchemeForm() {
  const [schemeData, setSchemeData] = useState({
    name: "",
    link: "",
    type: "government",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchemeData({ ...schemeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission to backend here
    console.log("Submitted scheme data:", schemeData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Add New Scheme</h2>
      <label>
        Scheme Name:
        <input type="text" name="name" value={schemeData.name} onChange={handleChange} required />
      </label>
      <label>
        Link:
        <input type="url" name="link" value={schemeData.link} onChange={handleChange} required />
      </label>
      <label>
        Type:
        <select name="type" value={schemeData.type} onChange={handleChange}>
          <option value="government">Government</option>
          <option value="non-government">Non-Government</option>
        </select>
      </label>
      <label>
        Description:
        <textarea name="description" value={schemeData.description} onChange={handleChange} required />
      </label>
      <button type="submit">Add Scheme</button>
    </form>
  );
}

export default AddSchemeForm;

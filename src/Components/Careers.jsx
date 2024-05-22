import React, { useState } from "react";
import "../Css/Careers.css";
import { Link } from "react-router-dom";
function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file upload logic here, e.g., sending to a server
    console.log("Uploading", file);
    alert("Resume submitted!");
  };

  return (
    <div className="career-container">
      <h1>We are always looking to hire the right talent to help us grow.</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Browse Your Resume</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Send Resume</button>
      </form>
      OR mail to
      <Link to="mailto:itech.co.in" style={{ color: "red" }}>
        career@itech.co.in
      </Link>
    </div>
  );
}

export default ResumeUpload;

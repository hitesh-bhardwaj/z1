import { useState } from "react";

export default function PrivatePage(props) {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      // Check if the selected file type is allowed
      if (isValidFileType(selectedFile)) {
        setFile(selectedFile);
        setFilePath(URL.createObjectURL(selectedFile));
      } else {
        alert("Invalid file type. Please select a PDF, DOCX, or PPTX file.");
      }
    }
  };

  const isValidFileType = (file) => {
    const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation"];
    return allowedTypes.includes(file.type);
  };

  const handleFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
  
      try {
        // Send the file to the server
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
  
        if (response.ok) {
          const responseData = await response.json(); // Parse the JSON response
          const { filePath } = responseData; // Extract the 'filePath' property
          const emailResponse = await sendEmailWithAttachment(filePath); // Use the extracted 'filePath'
          console.log(emailResponse); // Handle Nodemailer response
        } else {
          alert("File upload failed. Please try again later.");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
  
const sendEmailWithAttachment = async (filePath) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Hello ${firstName} ${lastName},\n\nYou have requested the following service: ${selectedService}.\n\nThe file is available at this URL: ${filePath}`,
        }),
      });
  
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
};

  return (
    <>
        <div>
            <div>
                <h4>User Information</h4>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <h4>Select Service</h4>
                <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                >
                    <option value="">Select Service</option>
                    <option value="UI-UX">UI-UX</option>
                    <option value="Website">Website</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Branding">Branding</option>
                </select>
            </div>
            <div>
                <h4>Select File (PDF, DOCX, PPTX)</h4>
                <input type="file" accept=".pdf, .docx, .pptx" name="myFile" onChange={handleFileChange} />
                <button className="btn btn-primary" onClick={handleFileUpload}>
                Upload and Send Email
                </button>
            </div>
        </div>
    </>
    
  );
}
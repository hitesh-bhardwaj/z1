import { useEffect, useRef, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useRouter } from 'next/router';


export default function ContactUs(props) {
    const [step, setStep] = useState(1);
    const router = useRouter();
    const totalSteps = 4; // Define the total number of steps
    const [attemptedSubmitName, setAttemptedSubmitName] = useState(false); // New state variable
    const [attemptedSubmitService, setAttemptedSubmitService] = useState(false);
    const [attemptedSubmitContact, setAttemptedSubmitContact] = useState(false);
    const [messageStatus, setMessageStatus] = useState(null);  
    const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
  
  
    // User information
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    // Service information
    const [selectedService, setSelectedService] = useState("");
  
    // Contact information
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
  
    // File and message
    const [filePath, setFilePath] = useState(null);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
  
  // Valid Email
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  const nextStep = () => {
      if (step === 1) {
        if (firstName === "") {
          setAttemptedSubmitName(true);
        } else {
          setAttemptedSubmitName(false);
          setStep(step + 1);
        }
      } else if (step === 2) {
        if (selectedService === "") {
          setAttemptedSubmitService(true);
        } else {
          setAttemptedSubmitService(false);
          setStep(step + 1);
        }
      } else if (step === 3) {
          if (!isValidPhoneNumber(phoneNumber)) {
            setAttemptedSubmitContact(true);
            // Set an appropriate error message for an invalid phone number
            setPhoneNumberErrorMessage("Phone number is not valid");
          } else if (phoneNumber === "") {
            setAttemptedSubmitContact(true);
            // Clear any previous error message for phone number
            setPhoneNumberErrorMessage("");
          } else {
            setAttemptedSubmitContact(false);
            setStep(step + 1);
            // Clear any previous error message for phone number
            setPhoneNumberErrorMessage("");
          }
        }
    };
    
    const prevStep = () => {
      setStep(step - 1);
    };
  
  
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
            const responseData = await response.json();
            const { filePath } = responseData;
            return filePath; // Return the file path
          } else {
            alert("File upload failed. Please try again later.");
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    
      return null; // No file path if no file is selected
    };
    
    const handleSubmit = async () => {
      // Initialize a formData object to send data to the server
      const formData = new FormData();
  
      // Add user information to the formData
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("selectedService", selectedService);
  
      // Add contact information to the formData
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
  
      // Check if a file is selected
  
      const uploadedFilePath = await handleFileUpload();
  
      if (uploadedFilePath !== null) {
          // Add the file URL to the formData
          formData.append("fileUrl", uploadedFilePath);
        }
  
      // Add the message to the formData
      formData.append("message", message);
  
      try {
        // Send the formData to the server for email sending
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `Name: ${firstName} ${lastName}
                    \nRequested Service: ${selectedService}
                    \nConatct Number: ${phoneNumber}
                    \nEmail: ${email}
                    \nFile Url: ${uploadedFilePath}
                    \nMessage: ${message}`,
          }),
        });
  
        if (response.ok) {
          setMessageStatus('success');
          setTimeout(() => {
            router.push('/thankyou');
          }, 500);
        } else {
          setMessageStatus('error');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setMessageStatus('error');
      }
    };
    
    // Calculate the progress percentage
    // const progressPercentage = (step / totalSteps) * 100;
  
    return (
      <>
  
  {/* Main Contact Form Start */}
  
  <div className="relative h-full w-full">
  
  {/* Progress bar */}
  {/* <div className="progress-bar">
  <div
    className="progress"
    role="progressbar"
    style={{ width: `${progressPercentage}%` }}
    aria-valuenow={progressPercentage}
    aria-valuemin="0"
    aria-valuemax="100"
  >
    {progressPercentage.toFixed(0)} %
  </div>
  </div> */}
  
  {step === 1 && (
  <div className="form-sections">
    <div className="popUp-form-step">
      <h2>
        01 —<span className="color-grey"> 04</span>
      </h2>
    </div>
  <div className="mt-10"><h1>Hi<span className="color-primary"> There !</span></h1></div>
  <div className="m-10"><p>What's Your Name</p></div>
  <div className="flex gap-10 name-input-popUp-Form">
        <div className="pop-up-div-form">
          <input className="name-input-form"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            {attemptedSubmitName && firstName === "" && (
                  <p className="error">Please enter your name</p>
              )}
  
        </div>
        <div className="pop-up-div-form">
          <input className="name-input-form"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>
      </div>
  
  <div className="form-button m-10">
      <button
          type="button"
          onClick={nextStep}
      >
          Next
      </button>
    </div>
  </div>
  )}
  
  {step === 2 && (
  <div className="form-sections">
  <div className="popUp-form-step">
      <h2>
        02 —<span className="color-grey"> 04</span>
      </h2>
    </div>
  <div className="mt-10"><h1>Hello,<span className="color-primary capitalize"> {firstName} !</span></h1></div>
  <div className="m-10"><p>What can we help you with?</p></div>
  <div>
    <select
      value={selectedService}
      onChange={(e) => setSelectedService(e.target.value)}
    >
          <option className="form-select-option" value="">Select Service</option>
          <option value="UI-UX">UI-UX</option>
          <option value="Website">Website</option>
          <option value="Marketing">Marketing</option>
          <option value="Branding">Branding</option>
    </select>
      {attemptedSubmitService && selectedService === "" && (
          <p className="error">Please select a service</p>
      )}
  </div>
  <div className="form-button mt-10 flex gap-5">
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
  </div>
  </div>
  )}
  
  
  {step === 3 && (
  <div className="form-sections">
  <div className="popUp-form-step">
      <h2>
        03 —<span className="color-grey"> 04</span>
      </h2>
    </div>
      <div className="mt-10"><h1 className="color-primary">Great !</h1></div>
      <div className="m-10"><p>Please provide your contact information.</p></div>
      <div>
    <PhoneInput
      international
      defaultCountry="US"
      placeholder="Your Number"
      value={phoneNumber}
      error={!phoneNumber ? 'Phone number is required' : !isValidPhoneNumber(String(phoneNumber)) ? 'Phone number is not valid' : undefined}
      onChange={(value) => setPhoneNumber(value)}
    />
    {attemptedSubmitContact && phoneNumber === "" && (
      <p className="error">Phone number is required</p>
    )}
    {attemptedSubmitContact && phoneNumber && !isValidPhoneNumber(String(phoneNumber)) && (
      <p className="error">Phone number is not valid</p>
    )}
  </div>
  
      
      <div>
      <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => {setEmail(e.target.value);
          setIsEmailValid(emailRegex.test(e.target.value));
          }}
      />
      {attemptedSubmitContact && email === "" && (
          <p className="error">Email is required.</p>
      )}
      {!isEmailValid && (
          <p className="error">This email looks a bit weird.</p>
      )}
      </div>
  
      <div className="form-button mt-10 flex gap-5"> 
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
      </div>
  </div>
  )}
  
  
  {step === 4 && (
  <div className="form-sections">
  <div className="popUp-form-step">
      <h2>
        04 —<span className="color-grey"> 04</span>
      </h2>
    </div>
      <div className="mt-10"><p>Do you have a brief?</p></div>
      <div className='form-attach'>
          <input
              type="file"
              id='attach'
              name="myFile"
              accept=".pdf,.docx,.pptx"
              onChange={handleFileChange}
              hidden
          />
          <button>
              <img src="/assets/icons/attach.png" />
              <label className="label" htmlFor='attach'>
              Add Attachment
              </label>
          </button>
          <div className='mt-3'>
              <span id='file-chosen'>{file ? file.name : 'No file chosen'}</span>
          </div>
      </div>
      <div className="popUp-for-TextArea">
          <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
          />
      </div>
      <div className='form-button-2 mt-10'>
          <button className='btn_CTA' onClick={handleSubmit}>
              <span className="btn_CTA-ripple">
              <span></span>
              </span>
              <span className='btn_CTA-title'>
              <span data-text='Submit'>Submit</span>
              </span>
          </button>
          {messageStatus === 'success' && (
              <p className="text-green-400">Thanks, Your details have been submitted.</p>
          )}
          {messageStatus === 'error' && (
              <p>Failed to send the message.</p>
          )}
      </div>
      {/* <div className="form-button mt-10 flex gap-5"> 
          <button onClick={prevStep}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
      </div>*/}
      </div>
      )}
      </div>
      </>
      
    );
  }
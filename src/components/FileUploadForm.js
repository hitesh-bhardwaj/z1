import React, { useState } from 'react';

function FileUploadForm() {
    // State to store the uploaded file's URL
    const [fileUrl, setFileUrl] = useState('');
    // State to manage form submission to prevent default form behavior
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append('file', event.target.file.files[0]);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            setFileUrl(result.fileUrl);
            setFormSubmitted(true);
            event.target.reset(); // Reset the form fields
        } else {
            alert(`Failed to upload file: ${result.message}`);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" required />
                <button type="submit">Upload File</button>
            </form>
            {formSubmitted && fileUrl && (
                <div>
                    <a href={fileUrl} target="_blank" rel="noopener noreferrer">View Uploaded File</a>
                </div>
            )}
        </>
    );
}

export default FileUploadForm;

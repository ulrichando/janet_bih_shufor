import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidenav from '../components/Sidenav'
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import '/src/css/FileUpload.css'; 


const CvPage = () => {

  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded files here
    console.log('Uploaded files:', acceptedFiles);
    // You can send the files to the backend for further processing (e.g., email sending)
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
    <Navbar />
    <Sidenav />
    <div className='h-screen flex'>


    </div>
    <div className='p-10'>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop a file here, or click to select a file</p>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default CvPage
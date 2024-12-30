import { useState } from "react";
import axios from "axios";

interface FormData {
    file: File | null;
    paper_name: string;
    subject: string;
    exam_board: string;
    exam_year: string;
}
function PageNavBar(){
    return(
        <nav className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-start">
         <a href="/" className="btn btn-outline-success me-2">Home</a>
         <button className="btn btn-sm btn-outline-secondary " type="button">Logout</button>
         </form>
        </nav>
    )
}

export default function UploadPage() {
    const [formData, setFormData] = useState<FormData>({
        file: null,
        paper_name: '',
        subject: '',
        exam_board: '',
        exam_year: ''
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        e.preventDefault();
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file_upload = e.target.files?.[0];
        if (file_upload) {
            if (file_upload.type === 'application/pdf') {
                setFormData(prev => ({
                    ...prev,
                    file: file_upload
                }));
            } else {
                console.log('Please upload only PDF files.');
                e.target.value = '';
            }
        }
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formDataToSend = new FormData();
        
        if (formData.file) {
            formDataToSend.append('file', formData.file);
        }
        formDataToSend.append('paper_name', formData.paper_name);
        formDataToSend.append('subject', formData.subject);
        formDataToSend.append('exam_board', formData.exam_board);
        formDataToSend.append('exam_year', formData.exam_year);
       
        try {
            console.log(formDataToSend);
            const response = await axios.post('http://localhost:8080/exam-papers/create', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Upload successful:', response.data);
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }

    return (
    <>
    <PageNavBar/>
        <div className="container mt-5">
            <h2 className="text-center mb-4">Upload Exam Paper</h2>
            <form onSubmit={handleSubmit} className="form-group">
                
            <div className="row justify-content-center mb-3">
                <div className="col-md-7">
                <input 
                    type="text"  
                    className="form-control"
                    placeholder="Paper Name" 
                    value={formData.paper_name} 
                    onChange={handleInputChange} 
                    name='paper_name' 
                />    
                </div>
            </div>

            <div className="row justify-content-center mb-3">
                 <div className="mb-3 col-md-7">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Subject" 
                        value={formData.subject} 
                        onChange={handleInputChange} 
                        name='subject' 
                    />
                </div>
            </div>


            <div className="row justify-content-center mb-3">
                <div className="mb-3 col-md-7">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Examination Board" 
                        value={formData.exam_board} 
                        onChange={handleInputChange}  
                        name='exam_board'
                    />
                </div>
            </div>

            <div className="row justify-content-center mb-3"> 
                <div className="mb-3 col-md-7">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Year of Examination" 
                        value={formData.exam_year} 
                        onChange={handleInputChange} 
                        name='exam_year' 
                    />
                </div>
            </div>

            <div className="row justify-content-center mb-3"> 
                <div className="mb-3 col-md-7">
                    <input
                        type="file"
                        className="form-control"
                        accept=".pdf"
                        name='file'
                        onChange={handleFileChange}
                    />
                </div> 
            </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Upload</button>
                </div>  
            </form>
        </div>
        </>
    );
}

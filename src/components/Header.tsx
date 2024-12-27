import { useEffect, useState } from 'react'
import millerLogo from '../assets/audit.png'
import axios from 'axios';
export default function Header({onSearchResults}){

    const [userSearch, setUserSearch] = useState({
        text:''
    });


    async function fetchPapers(){
        try{
          const userInput = userSearch.text.toLowerCase();
          const response = await axios.get(`http://localhost:8080/exam-papers/get-all`);
          console.log(response.data);
          onSearchResults(response.data)
        }
        catch(error){
          console.log(error)
        };
    }

    useEffect(()=>{
      fetchPapers();
    }, []);


    function handleChange(e){
        setUserSearch({
            ...userSearch,
            [e.target.name]:e.target.value
        })
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img
            src={millerLogo}
            alt='miller'
            height="40"
            width="auto"
            className='rounded-circle'
            /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/upload"><b>Upload</b></a>
                </li>
              </ul>
              
             
              <form className="d-flex justify-content-center flex-grow-1 mx-4"  onSubmit={fetchPapers}>
                <input className="form-control me-2 w-50" type="text" placeholder="Search" aria-label="Search" name="text" onChange={handleChange}/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              
          
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
    )
}
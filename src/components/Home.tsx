import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./MainPage";
import {ExamPaperDto} from '../Interfaces/ExamPaperResponse';

export default function HomeComponent(){
    const [searchData, setData] = useState<ExamPaperDto[]>([]);

    const handleSearchResults = (data: ExamPaperDto[]) =>{
      setData(data);
    };

    return(
      <div className="d-flex flex-column min-vh-100">
      <Header onSearchResults={handleSearchResults} />
      <Main  retrivedPapers={searchData}/>
      <Footer/>
      </div>
    )
}
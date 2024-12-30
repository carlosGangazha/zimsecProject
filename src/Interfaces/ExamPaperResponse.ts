export interface ExamPaperDto{
    id:number;
    paper_name:string;
    subject:string;
    exam_board:string;
    year:number
}

export interface MainProps{
    retrivedPapers: ExamPaperDto[];
}

export interface HeaderProps{
    onSearchResults: (data: ExamPaperDto[]) => void;
}
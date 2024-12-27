export default function Main({retrivedPapers}){
    return(
        <main className="flex-fill overflow-auto">
             <div className="container mt-4">
            {retrivedPapers.length > 0 ? (
                <div className="row">
                    {retrivedPapers.map((paper) => (
                        <div key={paper.id} className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{paper.paper_name}</h5>
                                    <p>{paper.year}</p>
                                    <p>{paper.exam_board}</p>
                                    <a 
                                        href={`http://localhost:8080/exam-papers/get-pdf/${paper.id}`} 
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No papers found. Try searching for something.</p>
            )}
        </div>
        </main>
    )
}
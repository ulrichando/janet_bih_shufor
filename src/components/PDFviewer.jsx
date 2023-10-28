import { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "../Pages/Janet_Shufor.pdf";
import "/src/css/CvPage.css";

function PDFviewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="pdf-div">
      <div className="pdf-container">
        <div>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
            Prev
          </button>
          <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
            Next
          </button>
        </div>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            key={`page_${pageNumber}`}
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
        <div>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
            Prev
          </button>
          <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PDFviewer;

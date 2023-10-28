import { pdfjs } from "react-pdf";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import PDFviewer from "../components/PDFviewer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.js",
  import.meta.url
).toString();

const CvPage = () => {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <PDFviewer />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default CvPage;

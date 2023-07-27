import jsPDF from "jspdf";
import Button from "../utils/Button";

const SaveCV = () => {
  return (
    <div>
      <p>Save your CV!</p>
      <Button onClick={generatePDF} text="Download"></Button>;
    </div>
  );
};

export default SaveCV;

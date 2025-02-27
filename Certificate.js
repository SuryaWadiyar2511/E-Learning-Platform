import React,{useRef} from "react";
import{useReactToPrint} from "react-to-print";


const Certificate = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
    });
    return (
        <div>
            <div ref={componentRef} style={{ border: "1px solid black", padding: "20px", width: "800px", margin: "0 auto" }}>
                <h2>Certificate of Completion</h2>
                <p> This is to certify that<strong> Student name</strong> has completed the course on Course Name with score of <strong>80%</strong></p>
            </div>
            <button onClick={handlePrint}>Download Certificate</button>
        </div>
    );
}
export default Certificate;
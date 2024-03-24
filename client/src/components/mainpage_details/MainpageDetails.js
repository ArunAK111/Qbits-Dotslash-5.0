import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./mainpagedetails.css";
import { useParams } from "react-router-dom";
import { getQuestionById } from "../../api/question";

const MainpageDetails = () => {
  const { postId } = useParams();
  const [question, setQuestion] = useState(null);

  function convertToNewUrl(originalUrl) {
    // Assuming the original URL is of the form "https://dsld.od.nih.gov/label/{id}.pdf"
    const id = originalUrl.split("/").pop().replace(".pdf", "");
    // Correctly form the new URL without duplicating parts of the path
    return `https://api.ods.od.nih.gov/dsld/s3/pdf/${id}.pdf`;
  }

  useEffect(() => {
    const fetchQuestion = async () => {
      getQuestionById(postId)
        .then((res) => res.json())
        .then((data) => setQuestion(data));
    };
    fetchQuestion();
  }, [postId]);

  return (
    <div className="mainpage_details">
      <Navbar />
      {question && (
        <>
          <div className="mainpage_details_top">
            <h1>Recommendations ({question.rec_list.length})</h1>
          </div>
          <div className="mainpage_details_container">
            {question.rec_list.map((d, index) => (
              <div key={index} className="mainpage_details_inner">
                <div className="mainpage_details_object">
                  {/* Instead of embedding, provide a link to the PDF */}
                  <a
                    href={convertToNewUrl(d[0])}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Document
                  </a>
                </div>
                <div className="mainpage_details_object_bottom">
                  <h3>{d[2]}</h3>
                  <p>By {d[3]}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MainpageDetails;

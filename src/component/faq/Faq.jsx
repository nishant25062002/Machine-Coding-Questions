import React, { useState } from "react";
import "./Faq.css";

const Faq = (props) => {
  const { open = false, question = "", answer = "" } = props;
  const [show, setShow] = useState(open);
  return (
    <div className="faq">
      <div onClick={() => setShow(!show)} className="question">
        {!show ? <div>{">"}</div> : <div className="downIcon">{">"}</div>}
        {question}
      </div>
      {show && <div className="answer">{answer}</div>}
    </div>
  );
};

export default Faq;

import React from "react";
import Faq from "./Faq";

const Faqs = () => {
  const faqData = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];

  return (
    <div className="faqs">
      <h1>FAQs</h1>

      {faqData?.map((data, index) => (
        <Faq key={index} {...data} open={index === 0} />
      ))}
    </div>
  );
};

export default Faqs;

"use client";

import './contact.css';
import { useState } from 'react';

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin pharetra rutrum purus vel egestas. Phasellus ut nulla ut odio blandit pretium. Proin sit amet turpis posuere, vehicula est non, aliquet mauris.",
  },
  {
    question: "Lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin pharetra rutrum purus vel egestas. Phasellus ut nulla ut odio blandit pretium. Proin sit amet turpis posuere, vehicula est non, aliquet mauris.",
  },
  {
    question: "Lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin pharetra rutrum purus vel egestas. Phasellus ut nulla ut odio blandit pretium. Proin sit amet turpis posuere, vehicula est non, aliquet mauris.",
  },
];

export default function ContactPage() {
  const [openIdx, setOpenIdx] = useState(2); // mặc định mở câu hỏi thứ 3

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="contact-title">Get in<br />touch</h2>
        <p className="contact-desc">Lorem ipsum dolor sit amet,<br />cons adipisicing elit</p>
        <img className="contact-img" src="https://images.unsplash.com/photo-1465101178521-c1a2b3a8e8c7" alt="Contact" />
      </div>
      <div className="contact-right">
        <form className="contact-form">
          <input type="text" placeholder="Name" className="contact-input" />
          <input type="email" placeholder="Email" className="contact-input" />
          <input type="text" placeholder="Ideas" className="contact-input" />
          <textarea placeholder="Message" className="contact-input contact-textarea" />
          <button type="submit" className="contact-submit">Submit</button>
        </form>
        <div className="contact-faq">
          <h4 className="contact-faq-title">Frequently asked questions</h4>
          <div className="contact-faq-list">
            {faqData.map((item, idx) => (
              <div
                key={idx}
                className={`contact-faq-item${openIdx === idx ? ' contact-faq-open' : ''}`}
              >
                <div
                  className="contact-faq-question"
                  onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="contact-faq-number">{`0${idx + 1}`}</span>
                  <span>{item.question}</span>
                  <span className="contact-faq-toggle">{openIdx === idx ? '−' : '+'}</span>
                </div>
                {openIdx === idx && (
                  <div className="contact-faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
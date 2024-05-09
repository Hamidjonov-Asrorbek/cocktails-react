import React from "react";
import './style.css';

function NewsLetter() {
  return (
    <body>
        
    <section className="page">
      <form method="post" action="/newsletter" className="form">
        <h4 className="newsletter_title">our newsletter</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            required=""
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            last name
          </label>
          <input
            type="text"
            className="form-input"
            name="lastName"
            id="lastName"
            required=""
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            className="form-input"
            name="email"
            id="email"
            required=""
            value="test@test.com"
          />
        </div>
        <button type="submit" className="newsletter_btn btn-block">
          submit
        </button>
      </form>
    </section>
    </body>
  );
}

export default NewsLetter;

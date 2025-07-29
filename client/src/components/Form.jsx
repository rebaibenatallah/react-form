import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [book, setBook] = useState({
    title: "",
    subtitle: "",
    author: "",
    subject: "",
    publisher: "",
    date: "",
    img: "",
  });
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form>
        <div className="box-form">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            name="title"
            required
          />
        </div>
        <div className="box-form">
          <label htmlFor="subtitle">Subtitle:</label>
          <textarea
            id="subtitel"
            onChange={handleChange}
            name="subtitle"
            rows="5"
          ></textarea>
        </div>
        <div className="box-form">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            onChange={handleChange}
            name="author"
            required
          />
        </div>
        <div className="box-form">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            onChange={handleChange}
            name="subject"
            required
          />
        </div>
        <div className="box-form">
          <label htmlFor="publisher">Publisher:</label>
          <input
            type="text"
            id="publisher"
            onChange={handleChange}
            name="publisher"
            required
          />
        </div>
        <div className="box-form">
          <label htmlFor="date">Publication Date:</label>
          <input
            type="date"
            id="date"
            onChange={handleChange}
            name="date"
            required
          />
        </div>
        <div className="box-form">
          <label htmlFor="cover">Cover Image:</label>
          <input
            type="file"
            id="cover"
            onChange={handleChange}
            name="cover"
            required
          />
        </div>
        <input
          className="btn-form"
          type="submit"
          onClick={handleClick}
          value="Submit"
        />
      </form>
    </>
  );
}

export default Form;

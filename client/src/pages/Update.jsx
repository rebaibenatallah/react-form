import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Update() {
  const [book, setBook] = useState({
    title: "",
    subtitle: "",
    author: "",
    subject: "",
    publisher: "",
    date: "",
    img: "",
  });
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  // const [book, setBook] = useState("");
  // useEffect(() => {
  //   const fecthAllBooks = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8800/books/" + bookId);
  //       setBook(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fecthAllBooks();
  // }, []);

  // var book1 = { ...book[0] };
  // console.log(book1);
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // setBook(e.tar)
  };
  console.log(bookId);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
}

export default Update;

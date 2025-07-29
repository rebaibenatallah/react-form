import React from "react";
import img01 from "../assets/daa-wdawa.jpg";
import img02 from "../assets/thalath.jpg";
import img03 from "../assets/sira.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Table() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fecthAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <table className="pure-table pure-table-bordered">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Publisher</th>
            <th>Publication Date</th>
            <th>Operation</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>
                <img src={img01} />
              </td>
              <td>{book.title}</td>
              <td>{book.subtitle}</td>
              <td>{book.author}</td>
              <td>{book.subject}</td>
              <td>{book.publisher}</td>
              <td>{book.date}</td>
              <td>
                <label
                  className="delete-book"
                  onClick={() => handleDelete(book.id)}
                >
                  delete
                </label>
                <label>
                  <Link to={`/update/${book.id}`}>update</Link>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;

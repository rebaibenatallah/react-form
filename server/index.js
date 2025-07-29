import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "books",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello this is the server");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM book";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "SELECT * FROM book WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q =
    "INSERT INTO `book` (`title`, `subtitle`, `author`, `subject`, `publisher`, `date`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.subtitle,
    req.body.author,
    req.body.subject,
    req.body.publisher,
    req.body.date,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created !");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM book WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created successfully.");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE book SET `title`= ?, `subtitle`= ?, `author`= ?, `subject`= ?, `publisher`= ?, `date`= ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.subtitle,
    req.body.author,
    req.body.subject,
    req.body.publisher,
    req.body.date,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been updated successfully.");
  });
});

app.listen(8800, () => {
  console.log("connected to server!");
});
